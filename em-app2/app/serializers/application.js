import DS from 'ember-data';
export default DS.RESTSerializer.extend({
    normalize(typeClass, hash) {
    	//hash contains json, so it can be modified to fit the DS.Model record
        return this._super(typeClass, hash);
    },
    serialize(record, options) {
    	//here the json can be produced from the record
        return this._super(record, options);
    }
});