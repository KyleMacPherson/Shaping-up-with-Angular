(function(){
  var gem = {
    name: 'Azurite', price: 2.95,
    price: 110.50,
    canPurchase: false,
    soldOut: true
  };

  var app = angular.module('gemStore', []);

  app.controller("StoreController", function () {
  	this.product = gem;
  });

})();
