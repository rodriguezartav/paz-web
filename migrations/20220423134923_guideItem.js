"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("guide_items", function (table) {
    table.increments();
    table.integer("type_id");
    table.string("name");
    table.string("uri");
    table.jsonb("images");
    table.string("features_csv");
    table.jsonb("details");
    table.string("description");
    table.integer("likes");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("guide_items");
};
