
exports.up = function(knex, Promise) {
  return knex.schema.createTable('site_amenity', function(table){
    table.increments();
    table.integer('site_id').references('site.id').onDelete('CASCADE');
    table.integer('amenity_id').references('amenity.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('site_amenity');
};
