import Ember from 'ember';
export default Ember.Route.extend({
	model(){
		return this.get("integration").createRecord("user",{});
	},
    setupController(controller,model){
        this.controllerFor("users.update").set("model",model);
    },
    renderTemplate() {
        this.render({
            controller: "users.update"
        });
    },
    validateRecord(record){
        return Em.isEmpty(record.get("password"))||record.get("password")===record.get("password2");
    },
    actions:{
    	registerAction(record,success,fail){
    		var result = this.validateRecord(record);
            if(!result){
                fail("password don't match");
            }else{
                success();
                this.get("integration").saveRecord("user",record);
                this.transitionTo("users");
            }
    	},
		cancelAction(){
			this.transitionTo("users");
		}
    }
});