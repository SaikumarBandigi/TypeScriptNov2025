interface Person {
    name: string;
    age: number;

    greet?(): void;   // optional method
}

class Student implements Person {

    constructor(public name: string, public age: number) {

    }

    // optional greet method implemented
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}
