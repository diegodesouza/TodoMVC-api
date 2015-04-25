import DS from "ember-data";

// todo model
var Todo = DS.Model.extend({
  title: DS.attr('string'),
  is_completed: DS.attr('boolean')
});

// Todo.reopenClass({
  // FIXTURES: [
    // {
      // id: 1,
      // title: 'Do something interesting today',
      // isCompleted: true
    // },
    // {
      // id: 2,
      // title: 'Finish this app',
      // isCompleted: false
    // },
    // {
      // id: 3,
      // title: 'What to do',
      // isCompleted: false
    // },
    // {
      // id: 4,
      // title: 'Last',
      // isCompleted: false
    // }
  // ]
// });

export default Todo;
