
class Person{
    constructor(name='anonymous') {
        this.name = name;
    }
    getGreeting() {
        return `hi, i am ${this.name} thanks`
    }
}

const tunik = new Person('Nwoga kingsley');
console.log(tunik.getGreeting());

const nido = new Person();
console.log(nido.getGreeting());

class Person2{
    constructor(name='anonymous', age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `hi, i am ${this.name} thanks`
    }
    getDescription() {
        return `i am, ${this.name} and i am ${this.age} years old`;
    }
}

class Traveler extends Person2{
    constructor(name, age, homelocation) {
        super(name, age);
        this.homelocation = homelocation;
    }
    getGreeting() {
        let greet = super.getGreeting();
        if(this.homelocation) {
            greet += `and i live in  ${this.homelocation}`
        }

        return greet;
    }
}

const test1 = new Traveler('Nwoga chinemerem', 20, 'lagos, Nigeria');
console.log(test1.getGreeting());

const test2 = new Person2()
console.log(test2.getGreeting());