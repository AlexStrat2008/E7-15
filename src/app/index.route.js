(function() {
  'use strict';

  angular
    .module('e715')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    // $logProvider.debugEnabled(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('/reference',{
        url: '/reference',
        templateUrl:'app/pages/reference.html',
      });
     $urlRouterProvider.otherwise('/')
     $locationProvider.html5Mode({
          enabled : true,
          requireBase : false
      })
  }

})();
