import Ember from 'ember';

import Band from '../models/band';
import Song from '../models/song';


// var Band = Ember.Object.extend({
//   name: '',

//   slug: Ember.computed('name', function(){
//     return this.get('name').dasherize();
//   }),
// });

// var Song = Ember.Object.extend({
//   title: '',
// });

var blackDog = Song.create({
  title: "Black Dog",
  rating: 3
});


var yellowLedbetter = Song.create({ title: 'Yellow Ledbetter',
  rating: 4
});


var daughter = Song.create({
  title: 'Daughter',
  rating: 5
});


var pretender = Song.create({ title: 'The Pretender', rating: 2
});

var BandsCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['name:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties'),
});


var ledZeppelin = Band.create({name: 'Led Zeppelin', songs: [blackDog]});
var pearlJam = Band.create({name: 'Pearl Jam', songs: [daughter, yellowLedbetter]});
var fooFighters = Band.create({name: 'Foo Fighters', songs: [pretender]});



var bands = BandsCollection.create();

bands.get('content').pushObjects([ledZeppelin, pearlJam, fooFighters]);


export default Ember.Route.extend({
  model: function (){
    return bands.get('sortedContent');
  },


  actions: {
    createBand: function (){
      var name = this.get('controller').get('name');
      var band = Band.create({name: name});
      bands.get('sortedContent').pushObject(band);
      this.get('controller').set('name', '');
    }
  }
});
