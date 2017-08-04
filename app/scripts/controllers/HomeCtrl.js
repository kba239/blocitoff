(function() {
  function HomeCtrl(Task) {
    var ctrl = this;

    // ctrl.open = function() {
    //   console.log("open");
    //   //add uibModal
    //
    // };

    // ctrl.activeTask;
    ctrl.tasks = Task.all;

    // ctrl.selectTask = function(task) {
    //   ctrl.activeTask = task;
    // };


  }

  angular
    .module('blocItOff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
