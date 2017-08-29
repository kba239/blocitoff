(function() {
  function Task($firebaseArray) {

    var ref = firebase.database().ref().child('tasks');
    this.tasks = $firebaseArray(ref);

    return {
      all: this.tasks,
    };
  }

  angular
    .module('blocItOff')
    .factory('Task', ['$firebaseArray', Task]);
})();
