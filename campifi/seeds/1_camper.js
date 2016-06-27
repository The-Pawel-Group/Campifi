
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('camper').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('camper').insert({username: 'Ray', password: '1234'}),
        knex('camper').insert({username: 'Pawel', password: '1234'}),
        knex('camper').insert({username: 'Amanda', password: '1234'})
      ]);
    });
};
