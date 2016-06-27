
exports.up = function(knex, Promise) {
  return knex.schema.createTable('camper_site', function(table){
    table.increments();
    table.integer('camper_id').references('camper.id').onDelete('CASCADE');
    table.integer('site_id').references('site.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('camper_site');
};
