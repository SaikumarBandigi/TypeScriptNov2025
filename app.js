"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    // Properties (like fields in Java)
    rollNo;
    name;
    // Constructor
    constructor(rollNo, name) {
        this.rollNo = rollNo;
        this.name = name;
    }
    // Method
    display() {
        console.log(`Roll No: ${this.rollNo}, Name: ${this.name}`);
    }
}
// Create object
const student1 = new Student(101, "Sonu");
student1.display();
//# sourceMappingURL=app.js.map