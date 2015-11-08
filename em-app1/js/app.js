var App = Em.Application.create();

App.Router.map(function(){
	this.route("about");
	this.route("images");
});

App.ApplicationRoute = Em.Route.extend({
	model:function(){
		return [
		{id:1,name:"Home",url:"#/"},
		{id:1,name:"Images",url:"#/images"},
		{id:1,name:"About",url:"#/about"}
		];
	}
// 	// renderTemplate:function(){
// 	// 	this._super.apply(this,arguments);
// 	// 	this.render("menu",{into:"application",outlet:"menu"});
// 	// }
});