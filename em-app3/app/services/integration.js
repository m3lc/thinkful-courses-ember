import Ember from 'ember';

export default Ember.Service.extend({
	store: Ember.inject.service('store'),
    adapter: null,
	findAll(modelName, fromCache) {
	    if (fromCache) {
	        return this.get("store").peekAll(modelName);
	    } else {
	        return this.get("store").findAll(modelName);
	    }
	},
	findRecord(modelName, recordId, fromCache) {
	    return this.get("store").findRecord(modelName, recordId, fromCache ? {} : {
	        reload: true
	    });
	},
	createRecord(modelName, record) {
	    if((modelName.modelName||modelName)==="test"){
	        return record;
	    }else{
	        return this.get("store").createRecord(modelName, record);
	    }
	},
	deleteRecord(modelName, record) {
	    if (this.isDSModel(modelName, record)) {
	        return record.destroyRecord();
	    }
	},
	updateRecord(modelName, record) {
	    if (this.isDSModel(modelName, record)) {
	        return record.save();
	    }
	},
	saveRecord(modelName, record) {
	    return this.updateRecord(modelName, record);
	},
	rollBackRecord(modelName, record) {
	    if (this.isDSModel(modelName, record)) {
	        return record.rollbackAttributes();
	    }
	},
	isDSModel(modelName, record) {
	    if(Em.get(record,"isNew")){
	        return record.save && Em.inspect(record).indexOf("model:"+modelName)!==-1;
	    }else{
	        return this.get("store").hasRecordForId(modelName, Em.get(record, "id"));
	    }
	}
});
