import Integrations from "../../helpers/integrations";
import Users from "../../helpers/users";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  const users = Users({ user: session.user }, req.headers);

  if (req.method == "GET") {
    const result = await users.getAll();
    res.status(200).json(result);
  }
  if (req.method == "POST") {
    const result = await users.saveUser(req.body, req.query.user_id);
    res.status(200).json(result);
  }
}
