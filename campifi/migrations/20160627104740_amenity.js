
exports.up = function(knex, Promise) {
  return knex.schema.createTable('amenity', function(table){
    table.increments();
    table.string('name');
    table.string('iconURL');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('amenity');
};
