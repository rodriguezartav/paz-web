const AWS = require("aws-sdk");

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_APP,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_APP,
  },
  region: process.env.AWS_REGION_APP,
});
const stream = require("stream");

class S3 {
  constructor(keys) {
    this.AWS = require("aws-sdk");
    this.s3 = new this.AWS.S3();
  }

  get = async function get(bucket, key) {
    var params = {
      Bucket: bucket,
      Key: key,
    };

    try {
      const result = await this.s3.getObject(params).promise();
      return result.Body.toString("utf-8");
    } catch (e) {
      return null;
    }
  };

  put = async function put(bucket, key, body, options = {}) {
    var params = {
      Body: body,
      Bucket: bucket,
      Key: key,
      ...options,
    };
    return this.s3.putObject(params).promise();
  };

  upload = async function put(bucket, key, body, options = {}) {
    var params = {
      Body: body,
      Bucket: bucket,
      Key: key,
      ...options,
    };
    return this.s3.upload(params).promise();
  };

  uploadStream = ({ Bucket, Key }) => {
    const pass = new stream.PassThrough();
    return {
      writeStream: pass,
      promise: this.s3.upload({ Bucket, Key, Body: pass }).promise(),
    };
  };
}

module.exports = S3;
