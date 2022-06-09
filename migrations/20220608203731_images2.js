"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.alterTable("images", function (table) {
    table.string("type");
    table.integer("size");
  });
};

exports.down = function (knex, Promise) {};
