import Users from "../../../../helpers/users";

import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const users = Users({ user: session.user }, req.headers);
  const user = await users.getUserWithCustomer();
  const url = `${process.env.API_URL}/integrations/slack/${user.customer_id}`;
  res.status(200).json({ url });
}
