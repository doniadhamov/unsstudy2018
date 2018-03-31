class Person {
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

module.exports.person = Person;