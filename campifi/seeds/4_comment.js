
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comment').insert({camper_id: 1, site_id: 3, message: "The trees here are beautiful!!!"}),
        knex('comment').insert({camper_id: 2, site_id: 2, message: "I love this site and pie"}),
        knex('comment').insert({camper_id: 3, site_id: 1, message: "The river was dried up... no fish"})
      ]);
    });
};
