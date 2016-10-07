
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('site').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('site').insert({name: 'O\'haver Lake', image: 'https://s-media-cache-ak0.pinimg.com/736x/82/62/f4/8262f40ac9ada01e869a2fdae0f3aa68.jpg', longitude: '-106.1436303', latitude: '38.4277761', description: 'O\'Haver Campground, located on the shores of O\'Haver Lake, attracts many campers for fishing, bird watching and canoeing on the calm, pleasant lakes.', camper_id: 1}),
        knex('site').insert({name: 'Clear Creek RV Park', image: 'http://wegofar.com/wp-content/uploads/2010/08/ClearCreekRVPark_thumb.jpg', longitude: '-105.2304231', latitude: '39.7539846', description: 'Situated in the heart of Golden with scenic views and the bubbling sounds of Clear Creek, the Clear Creek RV Park is the perfect getaway.', camper_id: 2}),
        knex('site').insert({name: 'Golden Gate Canyon State Park', image: 'https://cdn-co.milespartnership.com/sites/default/master/files/2_GoldenGatePark3_YannRopars_0.jpg', longitude: '-105.4198', latitude: '39.8414', description: 'More than 12,000 acres of dense forest, rocky peaks, and aspen-rimmed meadows laced with miles of trails awaiting the hiker, horseback rider, mountain biker and winter sports enthusiast at Golden Gate Canyon State Park.', camper_id: 3})
      ]);
    });
};
