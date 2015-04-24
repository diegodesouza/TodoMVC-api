import DS from "ember-data";

// todo model
export default DS.Model.extend({
  title: DS.attr('string'),
  is_completed: DS.attr('boolean')
});
