import Ember from 'ember';
export default Ember.Controller.extend({
    queryParams: ["filter"],
    filter: null,
    filteredModel: Em.computed.oneWay("model"),
    filterImages: function() {
        if (!Em.isEmpty(this.get("model"))) {
        	var self = this;
            var filter = this.get("filter") ? this.get("filter").trim() : null;
            if (Em.isEmpty(filter)) {
                this.set("filter", null);
                this.set("filteredModel", this.get("model"));
            } else {
                var filteredModel = this.get("model").filter(function(elem) {
                    return elem.get("description").indexOf(self.get("filter")) !== -1;
                });
                this.set("filteredModel", filteredModel);
            }
            Em.run.next(function() {
                if (self.get("filteredModel").length === 1) {
                    self.transitionToRoute("images.image", self.get("filteredModel")[0].id);
                } else {
                    self.transitionToRoute("images");
                }
            });
        }
    }.observes("filter", "model")
});