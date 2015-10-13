import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  type: DS.attr('string'),

  label: function(){
  	return this.get('title') + ' ' + this.get('type');
  }.property('title', 'type')
});
