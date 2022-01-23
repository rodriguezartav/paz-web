import { getKnex } from "../knex";

export default function Integrations(options = {}, headers) {
  const knex = getKnex();

  return {
    async getIntegrations(req) {
      return knex
        .table("integrations")
        .select("integrations.*", "providers.*")
        .join("customers", "integrations.customer_id", "customers.id")
        .join("users", "users.customer_id", "customers.id")
        .join("providers", "providers.id", "integrations.provider_id")
        .where("users.email", options.user.email);
    },
    async createIntegration() {
      return knex
        .table("integrations")
        .select("integrations.*", "providers.*")
        .join("customers", "integrations.customer_id", "customers.id")
        .join("users", "users.customer_id", "customers.id")
        .join("providers", "providers.id", "integrations.provider_id")
        .where("users.email", options.user.email);
    },

    async getUser(id) {
      return knex.table("users").where("id", id).first();
    },
    async getUserByEmail(email) {
      return knex.table("users").where("email", email).first();
    },
    async getUserByAccount({ provider, id }) {
      return;
    },
    async updateUser(user) {
      const userIds = await knex
        .table("users")
        .update(user)
        .where("id", user.id)
        .returning("id");
      return user;
    },
    async deleteUser(userId) {
      return;
    },
    async linkAccount(account) {
      return;
    },
    async unlinkAccount({ provider, id }) {
      return;
    },
    async createSession({ sessionToken, userId, expires }) {
      const sessionIds = await knex
        .table("sessions")
        .insert({ sessionToken, userId, expires })
        .returning("id");

      return { sessionToken, userId, expires, id: sessionIds[0] };
    },
    async getSessionAndUser(sessionToken) {
      console.log(sessionToken);
      const session = await knex
        .table("sessions")
        .where("sessionToken", sessionToken)
        .first();

      const user = await knex
        .table("users")
        .where("id", session.userId)
        .first();

      return { session, user };
    },
    async updateSession({ sessionToken }) {
      return knex
        .table("sessions")
        .update({ sessionToken })
        .where("sessionToken", sessionToken)
        .returning("id");
    },
    async deleteSession(sessionToken) {
      return knex.table("sessions").where("sessionToken", sessionToken);
    },
    async createVerificationToken({ identifier, expires, token }) {
      console.log(token);
      return knex
        .table("verificationTokens")
        .insert({ identifier, token, expires })
        .returning("id");
    },
    async useVerificationToken({ identifier, token }) {
      console.log(token);
      const tokens = await knex
        .table("verificationTokens")
        .select("*")
        .where({ identifier, token })
        .first();

      //await knex.table("verificationTokens").delete().where("id", tokens.id);

      return tokens;
    },
  };
}
