import Ember from 'ember';

export default Ember.Component.extend({
classNames:["edit-form"],
    setup:function(){
        this.set("errors",[]);
    }.on("init"),
    formData: null,
    fields: null,
    fieldsFor:function(){
        var fieldFor = {};
        this.get("fields").forEach(function(field){
            fieldFor[Em.get(field,"name")] = field;
        });
        return fieldFor;
    }.property("fields"),
    errors: null,
    submitButtonCaption:"Submit",
    cancelButtonCaption:"Cancel",
    runValidations(){
        var allErrors = [];
        this.get("fields").forEach(function(field){
            allErrors = allErrors.concat(Em.get(field,"formField").runValidations());
        });
        return allErrors;
    },
    actions:{
        submitAction:function(){
            var allErrors = this.runValidations();
            this.set("errors",allErrors);
            var self = this;
            if(Em.isEmpty(this.get("errors"))){
                this.sendAction("commitAction",this.get("formData"),
                function(result){

                },function(result){
                    if(!self.get("errors").contains(result)){
                        self.get("errors").pushObject(result);
                    }
                });
            }
        },
        cancelAction:function(){
            this.sendAction("rollbackAction",this.get("formData"),this.get("errors"));
        }
    }});
