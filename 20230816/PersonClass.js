class Person {

    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;

        console.log(this.saludar());
    }

    saludar() {
        return `Hola ${this.name}`
    }
}

const persona = new Person("Yeison", 28, "Programador");

console.log(persona);