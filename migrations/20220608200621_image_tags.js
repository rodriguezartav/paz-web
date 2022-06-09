"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("image_tags", function (table) {
    table.increments();
    table.string("tag");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("image_tags");
};
