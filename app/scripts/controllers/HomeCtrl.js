(function() {
  function HomeCtrl(Task) {
    var ctrl = this;

    ctrl.tasks = Task.all;

    ctrl.addTask = function() {
      if (this.text) {
        this.tasks.$add({
          text: this.text,
          timeDate: Date.now()
        });
        this.text = "";
      }
    };

    ctrl.activeTasks = function (timeDate) {
      if (timeDate > Date.now() - 604740) {
        return true;
      }
    }
  }

  angular
    .module('blocItOff')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
