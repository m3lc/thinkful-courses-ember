import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		// if(!Em.isEmpty(params.id)){
			return this.get("integration").findRecord("user",params.id?params.id:1);
		// }else{
		// 	return {};
		// }
	},
	validateRecord(record){
		return Em.isEmpty(record.get("password"))||record.get("password")===record.get("password2");
	},
	actions:{
		saveAction(record,success,fail){
			var result = this.validateRecord(record);
			if(!result){
				fail("password don't match");
			}else{
				success();
				this.get("integration").saveRecord("user",record);
			}
		}
	}
});
