import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("about");
    this.route("images",function(){
        this.route("image",{path:":id"});
    });
});

export default Router;
