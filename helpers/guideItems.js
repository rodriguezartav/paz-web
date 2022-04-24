import { getKnex } from "../knex";

export default function GuideItems(options = {}, headers) {
  const knex = getKnex();

  return {
    getUserWithCustomer() {
      return knex
        .table("guide_items")
        .select("guide_items.*", "guide_item_types.name as type_name")
        .join(
          "guide_item_types",
          "guide_items.guide_item_type_id",
          "guide_item_types.id"
        )
        .where("customer_id", options.user.customer_id)
        .first();
    },

    getAll() {
      return knex
        .table("guide_items")
        .select("guide_items.*", "guide_item_types.name as type_name")
        .join(
          "guide_item_types",
          "guide_items.guide_item_type_id",
          "guide_item_types.id"
        );
    },
  };
}
