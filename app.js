var studentLog = angular.module("studentLog", ["ui.router"]);

studentLog.config(function($stateProvider) {
  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/home.html"
  });

  // $stateProvider.state('topics', {
  //   url: "/topics",
  //   templateUrl: "partials/topics.html",
  //   controller: "TopicsCtrl"
  // });
  //
  // $stateProvider.state('comments', {
  //   url: "/:topicId",
  //   templateUrl: "partials/comments.html",
  //   controller: 'CommentsCtrl'
  // });
});
