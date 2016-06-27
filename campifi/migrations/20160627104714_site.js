
exports.up = function(knex, Promise) {
  return knex.schema.createTable('site', function(table) {
    table.increments();
    table.string('name');
    table.string('image');
    table.string('longitude');
    table.string('latitude');
    table.string('description');
    table.integer('camper_id').references('camper.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('site');
};
