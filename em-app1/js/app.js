var App = Em.Application.create();

App.Router.map(function(){
	this.route("about");
	this.route("images");
});

App.ApplicationRoute = Em.Route.extend({
	// model:function(){
	// 	var defer = new $.Deferred();

	// 	setTimeout(function(){
	// 		var data =  [
	// 				{id:1,name:"Home",url:"#/"},
	// 				{id:1,name:"Images",url:"#/images"},
	// 				{id:1,name:"About",url:"#/about"}
	// 			];
	// 			defer.resolve(data);
	// 	},3000);

	// 	return defer.promise();
	// 	// return [
	// 	// {id:1,name:"Home",url:"#/"},
	// 	// {id:1,name:"Images",url:"#/images"},
	// 	// {id:1,name:"About",url:"#/about"}
	// 	// ];
	// },
	setupController:function(controller,model){
		var defer = new $.Deferred();

		setTimeout(function(){
			var data =  [
					{id:1,name:"Home",url:"#/"},
					{id:1,name:"Images",url:"#/images"},
					{id:1,name:"About",url:"#/about"}
				];
				controller.set("model",data);
		},3000);
	},
	actions:{
		loading:function(){
			console.log("loading....");
		}
	}
// 	// renderTemplate:function(){
// 	// 	this._super.apply(this,arguments);
// 	// 	this.render("menu",{into:"application",outlet:"menu"});
// 	// }
});