"use strict";

exports.up = function (knex, Promise) {
  return knex.schema.createTable("quotes", function (table) {
    table.increments();
    table.string("name");
    table.string("phone");
    table.string("email");
    table.string("type");
    table.string("check_in_date");
    table.datetime("parsed_date");
    table.string("comments");
    table.integer("nights");
    table.integer("persons");
    table.string("status");
    table.string("status_comment");
    table.date("follow_up_date");
    table.date("follow_up_comment");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("quotes");
};
