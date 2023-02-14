class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getNmae() {
        return this.name;
    }
}
///////////////////////////////////////////////////////////////////
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
//////////////////////////////////////////////////////////////////
const student1 = new Student("Huzaifa", 20, "PIAIC_1");
const student2 = new Student("Khan", 10, "PIAIC_2");
//console.log(student1);
//console.log(student2);
/////////////////////////////////////////////////////////////////
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
//////////////////////////////////////////////////////////////////////
const instructor1 = new Instructor("Andrew Ng", 74, 25000);
//instructor1.assignCourse("machine learning");
//console.log(instructor1.courses);
const instructor2 = new Instructor("Jackie Chan", 18, 35000);
//instructor2.assignCourse("kungfu");
//console.log(instructor2.courses);
////////////////////////////////////////////////////////////////////////
class Course {
    id;
    name;
    students = []; //multiple students
    instructor; //single instructor
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
/////////////////////////////////////////////////////////
const course1 = new Course("AI", "Artificial Intelligience");
const course2 = new Course("ML", "Machine Learning");
course1.addStudent(student1);
course1.addStudent(student2);
//console.log(course1.students);
//console.log(student1.courses);
//Sconsole.log(student2.courses);
course1.setInstructor(instructor1);
//console.log(course1);
///////////////////////////////////////////////////////////
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
////////////////////////////////////////////////////////////////
const department1 = new Department("Electronics");
department1.addCourse(course1);
department1.addCourse(course2);
console.log(department1);
export {};
