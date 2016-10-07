
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('amenity').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('amenity').insert({name: 'Wheelchair-accessible', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Pictograms-nps-accessibility-wheelchair-accessible-2.svg/2000px-Pictograms-nps-accessibility-wheelchair-accessible-2.svg.png'}),
        knex('amenity').insert({name: 'Campfire', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pictograms-nps-campfire-2.svg/2000px-Pictograms-nps-campfire-2.svg.png'}),
        knex('amenity').insert({name: 'Picnic Area', iconURL: 'http://publicdomainvectors.org/photos/johnny_automatic_NPS_map_pictographs_part_56.png'}),
        knex('amenity').insert({name: 'Fishing', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pictograms-nps-fishing-2.svg/1024px-Pictograms-nps-fishing-2.svg.png'}),
        knex('amenity').insert({name: 'Hiking', iconURL: 'http://www.clker.com/cliparts/3/d/3/7/12065718151966625209johnny_automatic_NPS_map_pictographs_part_96.svg.hi.png'}),
        knex('amenity').insert({name: 'Bicycle Trail', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pictograms-nps-bicycle_trail.svg/2000px-Pictograms-nps-bicycle_trail.svg.png'})
      ]);
    });
};
