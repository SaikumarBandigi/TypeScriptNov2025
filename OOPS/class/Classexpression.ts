const Person = class {
    constructor(public x: number, public y: number) {

    }

    multiply() {
        return x * y;
    }
}

const obj = new Person(5, 5);
console.log(obj.multiply());
