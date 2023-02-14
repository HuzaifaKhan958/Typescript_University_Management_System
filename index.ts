
class Person {
    name:string;
    age:number;

    constructor (name:string,age:number){
        this.name=name;
        this.age=age;
    }

    getNmae(){
        return this.name;
    }
}

///////////////////////////////////////////////////////////////////

class Student extends Person{
    rollNumber:string;
    courses:Course[]=[];

    constructor (name:string,age:number,rollNumber:string){
        super(name,age);
        this.rollNumber=rollNumber;
    }

    registerForCourses(course:Course){
        this.courses.push(course);
    }
}

//////////////////////////////////////////////////////////////////

const student1 = new Student("Huzaifa",20,"PIAIC_1");
const student2 = new Student("Khan",10,"PIAIC_2");
//console.log(student1);
//console.log(student2);

/////////////////////////////////////////////////////////////////

class Instructor extends Person{
    salary:number;
    courses:Course[]=[];

    constructor(name:string,age:number,salary:number){
        super(name,age);
        this.salary=salary;
    }

    assignCourse(course:Course){
        this.courses.push(course);
    }
}

//////////////////////////////////////////////////////////////////////

const instructor1 = new Instructor("Andrew Ng",74,25000);
//instructor1.assignCourse("machine learning");
//console.log(instructor1.courses);

const instructor2 = new Instructor("Jackie Chan",18,35000);
//instructor2.assignCourse("kungfu");
//console.log(instructor2.courses);

////////////////////////////////////////////////////////////////////////

class Course {
    id:string;
    name:string;
    students:Student[]=[];//multiple students
    instructor!:Instructor;//single instructor

    constructor (id:string,name:string){
        this.id=id;
        this.name=name;
    }

    addStudent(student:Student){
        this.students.push(student);
        student.registerForCourses(this);
    }

    setInstructor(instructor:Instructor){
        this.instructor=instructor;
        instructor.assignCourse(this)
    }
}

/////////////////////////////////////////////////////////

const course1 = new Course("AI","Artificial Intelligience");
const course2 = new Course("ML","Machine Learning");

course1.addStudent(student1);
course1.addStudent(student2);

//console.log(course1.students);
//console.log(student1.courses);
//Sconsole.log(student2.courses);

course1.setInstructor(instructor1);
//console.log(course1);

///////////////////////////////////////////////////////////

class Department{
    name:string;
    courses: Course[]=[];

    constructor(name:string){
        this.name=name;
    }

    addCourse(course:Course){
        this.courses.push(course);
    }
}

////////////////////////////////////////////////////////////////

const department1 = new Department("Electronics");
department1.addCourse(course1);
department1.addCourse(course2);
console.log(department1);





