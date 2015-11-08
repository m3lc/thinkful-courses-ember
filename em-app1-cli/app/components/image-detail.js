import Ember from 'ember';

export default Ember.Component.extend({
	fadeComp:function(){
		this.$().css("display","none");
		var self = this;
		Em.run.later(function(){
			self.$().fadeIn("400");
		});
	}.on("didInsertElement").observes("model")
});
