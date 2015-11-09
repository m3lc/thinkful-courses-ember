import Ember from 'ember';
export default Ember.Component.extend({
	classNameBindings:["isRequired","isDisabled","hasErrors"],
    field: null,
    data: null,
    errors:null,
    hasErrors:function(){
    	return !Em.isEmpty(this.get("errors"));
    }.property("errors.[]"),
    dataValue: Em.computed("data", {
        get(key) {
                var formData = this.get("data");
                var fieldName = this.get("field.name");
                return Em.get(formData, fieldName);
            },
            set(key, value) {
            	var formData = this.get("data");
                var fieldName = this.get("field.name");
            	Em.set(formData,fieldName, value);
            	return value;
            }
    }),
    runValidations:function(){
    	var validations = Em.get(this.get("field"),"validations");
    	if(!Em.isEmpty(validations)){
    		for (var i = 0; i < validations.length; i++) {
    			var message = this.get("field.caption")+":"+Em.get(validations[i],"message");
    			if(!validations[i].validate(this.get("dataValue"),this)){
    				if(!this.get("errors").contains(message)){
						this.get("errors").pushObject(message);
    				}
    				break;
    			}else{
    				this.get("errors").removeObject(message);
    			}
    		}
    	}
    }.observes("dataValue"),
    isRequired:function(){
    	return Em.get(this.get("field"),"isRequired")||false;
    }.property(),
    isDisabled:function(){
		return Em.get(this.get("field"),"isDisabled")||false;
    }.property()
});