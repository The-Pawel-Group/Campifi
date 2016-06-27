
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE camper, site, amenity RESTART IDENTITY CASCADE;');
};
