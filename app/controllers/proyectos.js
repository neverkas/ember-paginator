import Ember from 'ember';

export default Ember.Controller.extend({
	columns: ['Título', 'Tipo'],
	fields: ['title'],

	data: [],

	filterData: function(){
		var data = [];

		this.data.content.forEach(function(item){
//			console.log(item._data)
		});
		
		
		//return data;

	}.observes('data')
});
