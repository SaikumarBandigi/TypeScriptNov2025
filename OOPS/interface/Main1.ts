interface Car {
    name: string;
    model: string;
    run(): void;
}

class Tata implements Car {

    constructor(public name: string,public model: string) {
    }

    run() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.model} years old.`);
    }

}

const s1 = new Tata('Tata', 'Sierra');
s1.run();


