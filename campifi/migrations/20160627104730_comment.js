
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', function(table){
    table.increments();
    table.integer('camper_id').references('camper.id').onDelete('CASCADE');
    table.integer('site_id').references('site.id').onDelete('CASCADE');
    table.string('message');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment');
};
