import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		return this.get("integration").findAll("user");
	},
	actions:{
		createUser:function(record){
			this.transitionTo("users.create");
		},
		updateUser:function(record){
			this.transitionTo("users.update", record.get("id"));
		},
		deleteUser:function(record){
			this.get("integration").deleteRecord("user",record);
		}
	}
});
