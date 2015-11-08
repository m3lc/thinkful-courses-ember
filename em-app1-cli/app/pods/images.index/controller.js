import Ember from 'ember';

export default Ember.Controller.extend({
	model:function(){console.log(Em);
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
