import Ember from 'ember';
export default Ember.Component.extend({
    setup:function(){
        this.set("errors",[]);
    }.on("init"),
    formData: null,
    fields: null,
    errors: null,
    submitButtonCaption:"Submit",
    cancelButtonCaption:"Cancel",
    actions:{
        submitAction:function(){
            // console.log(this.get("formData").get("firstName"));
            if(Em.isEmpty(this.get("errors"))){
                this.sendAction("commitAction",this.get("formData"),this.get("errors"));
            }
        },
        cancelAction:function(){
            this.sendAction("rollbackAction",this.get("formData"),this.get("errors"));
        }
    }
});