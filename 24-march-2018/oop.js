class Person {
    // _name -> private
    //  name -> public
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
         console.log('Name: ', this.name);
         console.log('Age: ', this.age);
    }

    static staticMethod() {
        console.log("It is static method")
    }
}

const person = new Person('John Doe', 21);
// console.log(person);
// person.print();
// Person.staticMethod();

class Calc {
    constructor() {
        this.answer = 0;
    }

    add(num1, num2) {
        this.answer = num2 ? num1 + num2 : num1 + this.answer;

        return this;
    }

    mul(num1, num2) {
        this.answer = num2 ? num1 + num2 : num1 + this.answer;

        return this;
    }

    print() {
        console.log(this.answer);
    }
}

const calc = new Calc();
// calc.add(1, 2).print();
// calc.mul(2, 2).print();

class Student extends Person {
    constructor(name, age, university) {
        super(name, age);
        this.university = university;
    }

    study() {
        console.log(this.name + ' is studying');
    }

    print() {
        super.print();
        console.log("University: ", this.university);
    }
}

class Worker extends Person {
    constructor(name, age, work_place) {
        super(name, age);
        this.work_place = work_place;
    }

    work() {
        console.log(this.name + ' is working');
    }

    print() {
        super.print();
        console.log("WorkPlace: ", this.work_place);
    }
}

const student = new Student('Ali', 20, "placeStudent");
const worker = new Worker('Vali', 20, "placeWorker");
// student.study();
// worker.work();
// student.print();
// worker.print();



