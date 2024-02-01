//Ability to add 3 students details and their marks in 3 subjects
//Method to find the student with the least total.
//Method to find the student with the highest total.
const studentDatabase = {
  students: [],
  addStudent: function (name, subject1, subject2, subject3) {
    const student = {
      name: name,
      marks: [subject1, subject2, subject3],
    };
    this.students.push(student);
  },
  findLeastTotal: function () {
    let leastTotal = Infinity;
    let leastStudent = null;
    for (let i = 0; i < this.students.length; i++) {
      const student = this.students[i];
      const totalMarks = student.marks.reduce((a, b) => a + b, 0);
      if (totalMarks < leastTotal) {
        leastTotal = totalMarks;
        leastStudent = student;
      }
    }
    return { student: leastStudent, total: leastTotal };
  },
  findHighestTotal: function () {
    let highestTotal = -Infinity;
    let highestStudent = null;
    for (let i = 0; i < this.students.length; i++) {
      const student = this.students[i];
      const totalMarks = student.marks.reduce((a, b) => a + b, 0);
      if (totalMarks > highestTotal) {
        highestTotal = totalMarks;
        highestStudent = student;
      }
    }
    return { student: highestStudent, total: highestTotal };
  },
};
studentDatabase.addStudent("Alice", 85, 90, 78);
studentDatabase.addStudent("Bob", 92, 88, 95);
studentDatabase.addStudent("Charlie", 78, 82, 88);
console.log("leastTotal", studentDatabase.findLeastTotal());
console.log("hoghTotal", studentDatabase.findHighestTotal());
