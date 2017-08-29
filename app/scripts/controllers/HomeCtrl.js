(function() {
  function HomeCtrl(Task) {

    this.tasks = Task.all;

    this.addTask = function(priority) {
      if (this.text) {
        this.tasks.$add({
          text: this.text,
          completed: false,
          timeDate: Date.now(),
          $priority: priority
        });
        this.text = "";
      }
    }

    this.expiredTask = function (timeDate) {
      var sevenDays = 604800000;
      var currentTimeDate = new Date().getTime();
      if (currentTimeDate > (timeDate + sevenDays)) {
        return true;
      }
    }

    this.completedTask = function (task) {
      if (task === true) {
        return true;
      }
    }

    this.data = {
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
