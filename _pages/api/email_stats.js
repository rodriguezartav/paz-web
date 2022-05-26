import Rds from "../../helpers/lambda-rds";
import moment from "moment";
import Users from "../../helpers/users";

import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const users = Users({ user: session.user }, req.headers);
  const user = await users.getUserWithCustomer();
  const rds = new Rds("boomi");
  const knex = rds.knex;

  const week = moment().utcOffset(-6).week();
  const year = moment().utcOffset(-6).year();

  let emails = await rds.execute(
    knex
      .table("email_stats")
      .where("week", week)
      .where("year", year)
      .orderBy("sent", "DESC")
      .orderBy("channel", "ASC")
  );

  res.status(200).json(emails);
}
