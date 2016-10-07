
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('camper_site').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('camper_site').insert({camper_id: 1, site_id: 1}),
        knex('camper_site').insert({camper_id: 2, site_id: 2}),
        knex('camper_site').insert({camper_id: 3, site_id: 3})
      ]);
    });
};
