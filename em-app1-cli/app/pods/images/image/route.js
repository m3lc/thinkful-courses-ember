import Ember from 'ember';

export default Ember.Route.extend({
	model:function(params){
		// console.log(">>>> model of ImagesImageRoute");
		return this.modelFor("images").findBy("id",parseInt(params.id,10));
	}
});
