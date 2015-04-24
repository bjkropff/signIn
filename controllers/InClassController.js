studentLog.controller('InClassCtrl', function InClassCtrl($scope, StudentFactory) {
  $scope.students = StudentsFactory.students
  $scope.studentSignIn = function(student) {
    student.inClass = true;
  };
});
