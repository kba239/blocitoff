(function() {
  function HomeCtrl(Task) {
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

    ctrl.addTask = function(priority) {
      if (this.text) {
        this.tasks.$add({
          text: this.text,
          completed: "no",
          timeDate: Date.now(),
          $priority: "Low"
        });
        this.text = "";
      }
    };

    ctrl.data = {
      availableOptions: [
        {id: '1', name: 'High'},
        {id: '2', name: 'Medium'},
        {id: '3', name: 'Low'}
      ],
      selectedOption: {id: '3', name: 'Low'}
    };
  }

  angular
    .module('blocItOff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
