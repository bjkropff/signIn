signIn.controller('studentsCtrl', function StudentsCtrl($scope, $stateParams, StudentFactory) {
  $scope.student = StudentsFactory.findById(StudentFactory.students, $stateParams.studentId)
  $scope.signIn

});
