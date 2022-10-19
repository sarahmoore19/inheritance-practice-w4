const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(s1, s2) {
    let high;
    if (s1.GPA > s2.GPA) high = s1;
    else if (s2.GPA > s1.GPA) high = s2;
    else return "Both students have the same GPA"
    return `${high.firstName} ${high.lastName} has the higher GPA.`;

  }
}

const sarah = new Student("cherry", "moore", "computers", 4.5)
const cherry = new Student("sarah", "moore", "computers", 2.7)

console.log(Student.compareGPA(sarah, cherry))
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
