(function() {
  function PastTasksCtrl(Task) {

    this.tasks = Task.all;

    this.expiredTask = function(timeDate) {
      var sevenDays = 604740000;
      var currentTimeDate = new Date().getTime();
      if (currentTimeDate > (timeDate + sevenDays)) {
        return true;
      }
    };

    this.completedTask = function (completedStatus) {
      if (completedStatus === true) {
        return true;
      }
    };

  }

  angular
    .module('blocItOff')
    .controller('PastTasksCtrl', ['Task', PastTasksCtrl]);
})();
