studentLog.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [{ name: "Jane Doe", inClass: false }, { name: "John Doe", inClass: true }]
  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName, inClass: false})
    factory.studentName = null;
  }
  return factory;
});
