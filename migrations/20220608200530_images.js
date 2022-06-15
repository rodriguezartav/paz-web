"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("images", function (table) {
    table.increments();
    table.string("title");
    table.integer("media_type");
    table.string("width");
    table.string("height");
    table.string("src");
    table.string("tags_csv");

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("images");
};
