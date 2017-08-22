(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
          controller: 'HomeCtrl as home',
          templateUrl: '/templates/home.html'
      })
      .state('pastTasks', {
        url: '/pastTasks',
          controller: 'PastTasksCtrl as pastTasks',
          templateUrl: '/templates/pastTasks.html'
      });
  }

  angular
    .module('blocItOff', ['ui.router', 'firebase'])
    .config(config);
})();
