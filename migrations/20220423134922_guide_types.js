"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("guide_types", function (table) {
    table.increments();
    table.string("name");
    table.string("category");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("guide_types");
};
