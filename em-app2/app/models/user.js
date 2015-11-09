import DS from 'ember-data';

export default DS.Model.extend({
  username:DS.attr("string"),
  password:DS.attr("string"),
  password2:null,
  firstName:DS.attr("string"),
  lastName:DS.attr("string"),
  details:DS.attr()
});