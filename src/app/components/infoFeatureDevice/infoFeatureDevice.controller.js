(function(){
  'use strict';

  angular
    .module('e715')
      .controller('InfoFeatureController', infoFeatureController)

  function infoFeatureController(){
    var vm = this;
    vm.title = "Основные характеристики"
    vm.testHTML = "<em>10<sup><small>-7</small></sup>-16*10<sup><small>3</small></sup> Гн</em>"
    vm.features = [
      {"name": "Диапазои измерения индуктивности",
      "data": "<em>10<sup><small>-7</small></sup>-16*10<sup><small>3</small></sup> Гн</em>"},
      {"name": "Диапазои измерения сопротивления",
      "data": "<em>10<sup><small>-3</small></sup>-10<sup><small>7</small></sup> Ом</em>"},
      {"name": "Диапазои измерения емкости",
      "data": "<em>10<sup><small>-13</small></sup>-16*10<sup><small>3</small></sup> Ф</em>"}
    ];
  }

})();
