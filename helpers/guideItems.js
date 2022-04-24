import { getKnex } from "../knex";

export default function GuideItems(options = {}, headers) {
  const knex = getKnex();

  return {
    async getOne(uri) {
      const one = await knex
        .table("guide_items")
        .select("guide_items.*", "guide_item_types.name as type_name")
        .join(
          "guide_item_types",
          "guide_items.guide_item_type_id",
          "guide_item_types.id"
        )
        .where("uri", uri)
        .first();

      if (!one) return one;

      return {
        ...one,
        path: `/osa-travel-guide/${one.uri}`,
        images: one.images && one.images.items ? one.images.items : [],
        image:
          one.images && one.images.items && one.images.items[0]
            ? one.images.items[0]
            : {},
        details: one.details && one.details.items ? one.details.items : [],
        features: one.features ? one.features.split(",") : [],
      };
    },

    async getAll() {
      const res = await knex
        .table("guide_items")
        .select("guide_items.*", "guide_item_types.name as type_name")
        .join(
          "guide_item_types",
          "guide_items.guide_item_type_id",
          "guide_item_types.id"
        );

      return res.map((item) => {
        return {
          ...item,
          path: `/osa-travel-guide/${item.uri}`,
          images: item.images && item.images.items ? item.images.items : [],
          image:
            item.images && item.images.items && item.images.items[0]
              ? item.images.items[0]
              : {},
          details: item.details && item.details.items ? item.details.items : [],
          features: item.features ? item.features.split(",") : [],
        };
      });
    },

    async getTypes() {
      const res = await knex.table("guide_item_types").select();

      let categories = {};

      res.forEach((item, index) => {
        if (categories[item.category]) {
        } else {
          categories[item.category] = {
            id: index,
            name: item.category,
            options: [],
          };
        }
        categories[item.category].options.push({
          label: item.name,
          ...item,
          value: item.name,
        });
      });

      return Object.values(categories);
    },
  };
}
