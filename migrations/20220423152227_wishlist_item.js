"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("wishlist_item", function (table) {
    table.increments();
    table.integer("follower_id");
    table.integer("guide_item_id");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("wishlist_item");
};
