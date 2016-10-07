var knex = require('./knex');

module.exports = {
  findUserByUsername: function(username){
    return knex('camper').select().where({username: username}).first();
  },
  addCamper: function(body){
    return knex('camper').insert(body, 'id');
  },
  findUserById: function(id){
    return knex('camper').where({id: id}).first();
  }
};
