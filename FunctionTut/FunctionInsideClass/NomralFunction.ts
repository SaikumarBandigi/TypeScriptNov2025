// 1️⃣ Abstract class with abstract method
abstract class Shape {
    abstract area(): number; // abstract method
}

// 2️⃣ Class extending abstract class (contains all other method types)
class Example extends Shape {
    // Property for getter/setter
    private _name: string = "Sonu";

    // ✔ Normal method
    greet() {
        console.log("Hello");
    }

    // ✔ Parameterized method
    add(a: number, b: number) {
        return a + b;
    }

    // ✔ Optional parameter method
    greetUser(name?: string) {
        console.log("Hello " + (name ?? "Guest"));
    }

    // ✔ Default parameter method
    message(msg: string = "Welcome") {
        console.log(msg);
    }

    // ✔ Rest parameters method
    sum(...nums: number[]) {
        return nums.reduce((a, b) => a + b, 0);
    }

    // ✔ Arrow function method
    arrowMethod = () => {
        console.log("I am arrow method");
    };

    // ✔ Private method
    private secret() {
        return "secret data";
    }

    // ✔ Protected method
    protected showProtected() {
        console.log("Protected method");
    }

    // ✔ Static method
    static helper() {
        console.log("I am a static helper method");
    }

    // ✔ Async method
    async getData() {
        return "Data loaded";
    }

    info(s: string): void;
    info(s: number): void;
    info(v: any) {
        console.log("Overloaded info:", v);
    }

    // ✔ Getter
    get name() {
        return this._name;
    }

    // ✔ Setter
    set name(value: string) {
        this._name = value;
    }

    // ✔ Abstract method implementation
    area(): number {
        return 100; // dummy
    }
}

// Usage
const obj = new Example();

obj.greet();

console.log(obj.add(10, 20));

obj.greetUser();

obj.message();

console.log(obj.sum(1, 2, 3));

obj.arrowMethod();

Example.helper();

console.log(obj.name);

obj.name = "Bhavani";

obj.info("TS");

obj.info(100);
