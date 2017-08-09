(function() {
  function Task($firebaseArray) {
    var Task = {};

    var ref = firebase.database().ref().child('tasks');
    var tasks = $firebaseArray(ref);

    Task.all = tasks;

    Task.add = function(newTask) {
      newTask.createdAt = firebase.database.ServerValue.TIMESTAMP;
      tasks.$add(newTask);
    };

    return Task;
  }
  angular
    .module('blocItOff')
    .factory('Task', ['$firebaseArray', Task]);
})();
