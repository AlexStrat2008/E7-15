(function() {
  'use strict';

  angular
    .module('e715')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
})();
