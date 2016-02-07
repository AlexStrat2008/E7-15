(function() {
  'use strict';

  angular
    .module('e715')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });
    $urlRouterProvider.otherwise('/');
  }

})();
