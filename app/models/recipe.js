import DS from 'ember-data';

var Recipe = DS.Model.extend({
	title: DS.attr('string')
});

Recipe.reopenClass({
   FIXTURES: [
     {id: 1, title: 'Bunny'},
     {id: 2, title: 'Coyote'}
   ]
});

export default Recipe;