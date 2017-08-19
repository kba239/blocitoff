(function() {
  function Task($firebaseArray) {

    var ref = firebase.database().ref().child('tasks');
    var tasks = $firebaseArray(ref);

    return tasks;
  }

  angular
    .module('blocItOff')
    .factory('Task', ['$firebaseArray', Task]);
})();
