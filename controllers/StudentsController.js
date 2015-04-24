studentLog.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;

  $scope.studentSignOut = function(student) {
    student.inClass = false;
  };

  $scope.studentSignIn = function(student) {
    student.inClass = true;
  };
});
