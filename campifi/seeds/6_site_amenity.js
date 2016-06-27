
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('site_amenity').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('site_amenity').insert({site_id: 1, amenity_id: 4}),
        knex('site_amenity').insert({site_id: 1, amenity_id: 2}),
        knex('site_amenity').insert({site_id: 1, amenity_id: 1}),
        knex('site_amenity').insert({site_id: 1, amenity_id: 5}),
        knex('site_amenity').insert({site_id: 1, amenity_id: 3}),
        knex('site_amenity').insert({site_id: 2, amenity_id: 4}),
        knex('site_amenity').insert({site_id: 2, amenity_id: 1}),
        knex('site_amenity').insert({site_id: 3, amenity_id: 6})
      ]);
    });
};
