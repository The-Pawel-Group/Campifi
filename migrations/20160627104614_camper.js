
exports.up = function(knex, Promise) {
  return knex.schema.createTable('camper', function(table) {
    table.increments();
    table.string('username');
    table.string('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('camper');
};
