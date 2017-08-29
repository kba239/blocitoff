(function() {
  function PastTasksCtrl(Task) {
    var ctrl = this;

    ctrl.tasks = Task.all;

    ctrl.expiredTask = function(timeDate) {
      var sevenDays = 604740000;
      var currentTimeDate = new Date().getTime();
      if (currentTimeDate > (timeDate + sevenDays)) {
        return true;
      }
    };

    ctrl.completedTask = function (completedStatus) {
      if (completedStatus === "yes") {
        return true;
      }
    };

  }

  angular
    .module('blocItOff')
    .controller('PastTasksCtrl', ['Task', PastTasksCtrl]);
})();
