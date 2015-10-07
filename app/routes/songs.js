import Ember from 'ember';

var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});


var SongCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['rating:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties')
});

var songs = SongCollection.create();
songs.get('content').pushObjects([blackDog, yellowLedbetter, pretender]);

export default Ember.Route.extend({
  model: function () {
    return songs.get('sortedContent');
  }
});
