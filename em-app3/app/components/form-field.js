import Ember from 'ember';

export default Ember.Component.extend({
	 classNames:["form-field","form-group"],
	classNameBindings:["isRequired","isDisabled","hasError"],
    field: null,
    data: null,
    hasError:false,
    initField:function(){
        Em.set(this.get("field"),"formField",this);
    }.on("init").observes("field"),
    dataValue: Em.computed("data", {
        get(key) {
                var formData = this.get("data");
                var fieldName = this.get("field.name");
                return formData?Em.get(formData, fieldName):null;
            },
            set(key, value) {
            	var formData = this.get("data");
                var fieldName = this.get("field.name");
                if(!Em.isEmpty(formData)){
                    Em.set(formData,fieldName, value);
                }
            	return value;
            }
    }),
    runValidations:function(){
        var errors=[];
    	var validations = Em.get(this.get("field"),"validations");
        var self = this;
        if(!Em.isEmpty(this.get("field.isRequired"))){
            validations = validations || [];
            validations.pushObject({
                message:"*",
                validate(value,formField){
                    return !Em.isEmpty(value);
                }
            });
        }
    	if(!Em.isEmpty(validations)){
    		for (var i = 0; i < validations.length; i++) {
    			let message = this.get("field.caption")+":"+Em.get(validations[i],"message");
    			if(!validations[i].validate(this.get("dataValue"),this)){
				    errors.pushObject(message);
                    this.set("hasError",true);
    				break;
    			}else{
                    this.set("hasError",false);
    			}
    		}
    	}
        return errors;
    },
    isRequired:function(){
    	return Em.get(this.get("field"),"isRequired")||false;
    }.property(),
    isDisabled:function(){
		return Em.get(this.get("field"),"isDisabled")||false;
    }.property()
});
