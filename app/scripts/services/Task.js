(function() {
  function Task($firebaseArray) {
    var Task = {};

    var ref = firebase.database().ref().child('tasks');
    var tasks = $firebaseArray(ref);
    Task.all = tasks;

    Task.add = function(task) {
      tasks.$add(task);
    };

    return Task;
  }
  angular
    .module('blocItOff')
    .factory('Task', ['$firebaseArray', Task]);
})();
