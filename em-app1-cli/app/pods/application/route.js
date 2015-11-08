import Ember from 'ember';

export default Ember.Route.extend({
	setupController:function(controller){

		setTimeout(function(){
			var data =  [
					{id:1,name:"Home",url:"#/"},
					{id:1,name:"Images",url:"#/images"},
					{id:1,name:"About",url:"#/about"}
				];
				controller.set("model",data);
		},0);
	},
	actions:{
		loading:function(){
			console.log("loading....");
			return true;
		}
	}
});
