"use strict";

let app = angular.module("app", ["ui.router", "ngResource", "ngAnimate"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  // default route
  $urlRouterProvider.otherwise("/");

  // app routes
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "home/home-view.html",
      controller: "HomeController",
      controllerAs: "vm"
    })
    .state("test-page", {
      url: "/test-page",
      templateUrl: "test-page/test-page-view.html",
      controller: "TestPageController",
      controllerAs: "vm"
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
