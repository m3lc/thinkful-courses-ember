import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		if(!Em.isEmpty(params.id)){
			return this.get("integration").findRecord("user",params.id);
		}else{
			return {};
		}
	},
	actions:{
		saveAction(record){
			this.get("integration").saveRecord("user",record);
		}
	}
});
