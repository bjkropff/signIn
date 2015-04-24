studentLog.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [
    { name: "Jane Doe", inClass: false },
    { name: "John Doe", inClass: true },
    { name: "Wedge Antilles", inClass: false },
    { name: "Biggs Darklighter", inClass: true },
    { name: "Lando Calrissian", inClass: false },
    { name: "Chewbacca", inClass: true }
    ]
  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName, inClass: false})
    factory.studentName = null;
  }
  return factory;
});
