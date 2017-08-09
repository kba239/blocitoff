(function() {
  function HomeCtrl(Task) {
    var ctrl = this;

    ctrl.activeTasks;
    ctrl.tasks = Task.all;

    ctrl.showActive = function(task) {
      ctrl.activeTasks = task;
    };


  }

  angular
    .module('blocItOff')
    .controller('HomeCtrl', ['Task', 'List', HomeCtrl]);
})();
