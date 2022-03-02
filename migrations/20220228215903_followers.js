"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("followers", function (table) {
    table.increments();
    table.string("name");
    table.string("phone");
    table.string("email");
    table.string("type");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("followers");
};
