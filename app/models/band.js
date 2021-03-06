import Ember from 'ember';

export default Ember.Object.extend({
  name: '',

  init: function() {
    this._super(...arguments);
    if(!this.get('songs')) {
      this.set('songs', []);
    }
  },

  // setupSongs: Ember.on('init', function(){
  //   if(!this.get('songs')) {
  //     this.set('songs', []);
  //   }
  // }),

  slug: Ember.computed('name', function(){
    return this.get('name').dasherize();
  }),

});
