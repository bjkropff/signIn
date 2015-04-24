var studentLog = angular.module("studentLog", ["ui.router"]);

studentLog.config(function($stateProvider) {
  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('sign-in', {
    url: "/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: "StudentCtrl"
  });

  $stateProvider.state('whos-here', {
    url: "/whos-here",
    templateUrl: "partials/whos-here.html",
    controller: 'StudentCtrl'
  });
});
