abstract class Vehicle {
    constructor(public brand: string) { }

    abstract start(): void;   // no body

    stop() {
        console.log("Vehicle stopped");
    }
}

class Car extends Vehicle {
    start(): void {
        console.log(`${this.brand} car started`);
    }
}

const c = new Car("Honda");
c.start();
c.stop();
