(function() {
  function Task($firebaseArray) {

    var ref = firebase.database().ref().child('tasks');
    var tasks = $firebaseArray(ref);

    var confirmCompleted = function (task) {
      task.completed = true;
      task.$save(task)
    }

    return {
      all: tasks,
      completeTask: confirmCompleted,
    };
  }

  angular
    .module('blocItOff')
    .factory('Task', ['$firebaseArray', Task]);
})();
