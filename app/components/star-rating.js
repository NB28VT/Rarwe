import Ember from 'ember';

export default Ember.Component.extend({
  // CSS/HTML
  tagName: 'div',
  classNames: ['rating-panel'],

  rating: 0,
  maxRating: 5,
  item: null,
  setAction: '',
});
