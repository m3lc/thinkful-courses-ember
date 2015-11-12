import Ember from 'ember';

export default Ember.Component.extend({
	content:null,
	colContent:null,
	selectedRow:null,
	hasButtons:true,
	addSelectListener:function(){
		var self = this;
		this.$("tr").on("click",function(){
			$(this).toggleClass("active");
			var selectedRow = this;
			if($(this).hasClass("active")){
				self.set("selectedRow",self.get("content").filterBy("id",$(this).data("row")+"")[0]);
				self.$("tr").each(function(i,elem){
					if(selectedRow!==elem){
						$(elem).removeClass("active");
					}
				});
			}else{
				self.set("selectedRow",null);
			}
		});
	}.on("didInsertElement"),
	actions:{
		create:function(){
			this.sendAction("createAction",this.get("selectedRow"));
		},
		update:function(){
			this.sendAction("updateAction",this.get("selectedRow"));
		},
		delete:function(){

			this.sendAction("deleteAction",this.get("selectedRow"));
		}
	}
});
