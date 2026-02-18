abstract class Shape {
    abstract area(a: number, b: number): number;          // abstract

    describe() {                      // default method (like Java)
        console.log("This is a shape.");
    }

    static info() {                   // static method
        console.log("Shape Class");
    }

    private helper() {                // private method
        console.log("helper method");
    }
}


class Rectangle extends Shape {
    area(a: number, b: number): number {
        return a * b;
    }
}

const obj=new Rectangle();
console.log(obj.area(2,3));
obj.describe();
Rectangle.info();