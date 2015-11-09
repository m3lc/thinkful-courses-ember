import Ember from 'ember';
// import config from '../config/environment';
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
        return this.get("store").createRecord(modelName, record);
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
        return this.get("store").hasRecordForId(modelName, Em.get(record, "id"));
    }
});