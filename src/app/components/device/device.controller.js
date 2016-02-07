(function() {
  'use strict';

  angular
    .module('e715')
      .controller('DeviceController', deviceController)

  function deviceController(){
    var vm = this;
    vm.title = "Прибор"
    vm.device = {
      "name": "Измеритель иммитанса Е7-15",
      "imgPath": "../../assets/images/mE7-15.jpg"
    }
  }

})();
