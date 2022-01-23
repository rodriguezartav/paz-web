const moment = require("moment");
const Knex = require("knex");
const AWS = require("aws-sdk");

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_APP,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_APP,
  },
  region: process.env.AWS_REGION_APP,
});

var lambda = new AWS.Lambda();
const request = require("superagent");
const S3 = require("./s3");

class Lambda {
  constructor(accountName) {
    this.isReady = false;
    this.s3 = new S3();
    this.accountName = accountName.toLowerCase();
    this.knex = Knex({ client: "pg" });
    this.data = require("data-api-client")({
      region: "us-east-1",
      secretArn: `arn:aws:secretsmanager:us-east-1:637311199472:secret:secret-${accountName.toLowerCase()}`,
      resourceArn: `arn:aws:rds:us-east-1:637311199472:cluster:${accountName.toLowerCase()}`,
      database: "master", // default database
    });
  }

  testReady = async function () {
    let ready = false;
    try {
      const sql = `select * from information_schema.tables where table_schema='public' limit 1;`;
      let result = await this.data.query(sql);
      if (result && result.records && result.records.length > 0) ready = true;
    } catch (e) {
      console.log(e);
    }

    return ready;
  };

  ready = async function (tableName) {
    let isReady = false;
    while (!isReady) {
      isReady = await this.testReady();
      if (!isReady) await new Promise((r) => setTimeout(r, 10000));
    }
    this.isReady = true;
    return true;
  };

  execute = async function (_knex, log) {
    if (!this.isReady) await this.ready();

    const sql = typeof _knex.sql == "string" ? _knex : _knex.toSQL();

    const text = sql.sql;
    const values = sql.bindings;

    var params = {
      FunctionName: "lambda-pg-prod-app",
      Payload: JSON.stringify({
        customer: this.accountName,
        sql: text,
        values: values,
      }),
    };
    const textResponse = await lambda.invoke(params).promise();

    const response = JSON.parse(textResponse.Payload);

    if (log) console.log(response);

    if (response.code == 200) {
      return response.rows || response;
    } else if (response.code == 202) {
      if (log) console.log("Downloading", response.url);
      const domain = "http://response.mogi.ai/";

      const jsonResponse = await this.s3.get(
        "response.mogi.ai",
        response.url.replace(domain, "")
      );
      if (log) console.log("Downloading", "done");

      console.log("Memory", process.memoryUsage());
      const json = JSON.parse(jsonResponse);
      return json;
    } else if (response.code == 203) {
      if (log) console.log("Downloading", response.url);
      const domain = "http://response.mogi.ai/";

      const jsonResponse = await this.s3.get(
        "response.mogi.ai",
        response.url.replace(domain, "")
      );
      if (log) console.log("Downloading", "done");
      console.log("Memory", process.memoryUsage());
      const json = JSON.parse(jsonResponse);
      return json;
    } else throw new Error("Error " + response.errorMessage);
  };
}

module.exports = Lambda;
