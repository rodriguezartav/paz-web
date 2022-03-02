"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("calls", function (table) {
    table.increments();
    table.string("name");
    table.string("country_code");
    table.string("phone_number");
    table.string("email");
    table.string("type");
    table.datetime("follow_up_date");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("calls");
};
