let foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function () {
  let self = this;

  let fullMenu = ['cake', 'pie', 'ice cream', 'brownies'];
  self.foodList = fullMenu;

  self.addFood = function (newFood) {
    fullMenu.push(newFood);
  }
}) 