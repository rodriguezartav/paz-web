"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("guide_item_likes", function (table) {
    table.increments();
    table.string("name");
    table.string("code");
    table.string("ip");
    table.string("country");
    table.string("browser");
    table.string("language");
    table.string("comment");
    table.jsonb("actions");
    table.string("utm");

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("guide_item_likes");
};
