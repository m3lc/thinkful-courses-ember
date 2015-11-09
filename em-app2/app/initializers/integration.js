export function initialize(application) {
    application.inject("route", "integration", "service:integration");
    application.inject("service:integration", "adapter", "adapter:application");
    // application.register( "person:App.Logger", App.Logger, { singleton: false } );
 //    application.register("logger:main", {
 //  		log: function(m) {
 //    		console.log(m);
 //  		}
	// }, { instantiate: false });
}
export default {
    name: "integration",
    initialize: initialize
};