var App = Em.Application.create();

App.Router.map(function(){
	this.route("about");
	this.route("images",function(){
		this.route("image",{path:":id"});
	});
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
		var defer = new Em.$.Deferred();

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
// 	// renderTemplate:function(){
// 	// 	this._super.apply(this,arguments);
// 	// 	this.render("menu",{into:"application",outlet:"menu"});
// 	// }
});

App.ImagesRoute = Em.Route.extend({
	model:function(){
	var defer = new Em.$.Deferred();

		setTimeout(function(){
			var data =  [];

			var ImageRecord = Em.Object.extend({
				dateCreated:null,
				dateCreatedCalc:function(){
					var d = new Date(this.get("dateCreated"));
					var dFmt = (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear();
					return dFmt;
				}.property("dateCreated")
			});

			for (var i = 8; i >= 1; i--) {
				var tempObj = ImageRecord.create({id:i,caption:"Image "+i,
					description:"This is a nature image "+i,
					src:"http://lorempixel.com/400/200/nature/"+i,
					dateCreated: new Date().setDate(Math.random()*30)
				});
				// tempObj.reopen({
				// 	dateCreatedCalc:function(){
				// 		var d = new Date(this.get("dateCreated"));
				// 		var dFmt = (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear();
				// 		return dFmt;
				// 	}.property("dateCreated")
				// });
				data.push(tempObj);
			}
			defer.resolve(data);
		},0);

		return defer.promise();
	}
});

App.ImagesIndexController = Em.Controller.extend({
	queryParams:["filter"],
	filter:null,
	filteredModel:Em.computed.oneWay("model"),
	filterImages:function(){
		if(!Em.isEmpty(this.get("model"))){
			var filter = this.get("filter")?this.get("filter").trim():null;
			if(Em.isEmpty(filter)){
				this.set("filter",null);
				this.set("filteredModel",this.get("model"));
			}else{
				var self = this;
				var filteredModel = this.get("model").filter(function(elem) {
					return elem.get("description").indexOf(self.get("filter")) !== -1;
				});
				this.set("filteredModel",filteredModel);
			}
			if(this.get("filteredModel").length==1){
				this.transitionToRoute("images.image",this.get("filteredModel")[0].id);
			}else{
				this.transitionToRoute("images");
			}
		}
	}.observes("filter","model")
});

App.ImagesImageRoute = Em.Route.extend({
	model:function(params){
		// console.log(">>>> model of ImagesImageRoute");
		return this.modelFor("images").findBy("id",parseInt(params.id,10));
	}
});

App.ImageDetailComponent = Em.Component.extend({
	fadeComp:function(){
		this.$().css("display","none");
		var self = this;
		Em.run.later(function(){
			self.$().fadeIn("400");
		});
	}.on("didInsertElement").observes("model")
});