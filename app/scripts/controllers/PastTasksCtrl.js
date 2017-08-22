(function() {
  function PastTasksCtrl(Task) {
    var ctrl = this;

    ctrl.tasks = Task.all;

    ctrl.expiredTasks = function (timeDate) {
      if (timesDate < Date.now() - 604740) {
        return true;
      }
    }

    ctrl.completedTasks = function (task) {
      if (task === true) {
        return true;
      }
    }

  }

  angular
    .module('blocItOff')
    .controller('PastTasksCtrl', ['Task', PastTasksCtrl]);
})();
