class Person {

    // accessible anywhere
    public name: string;

    // accessible only inside this class
    private age: number;

    // accessible inside this class AND subclass
    protected city: string;

    // can be assigned only once (constructor)
    readonly aadharNumber: string;

    constructor(name: string, age: number, city: string, aadharNumber: string) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.aadharNumber = aadharNumber; // readonly can be set only here
    }

    public displayInfo() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);          // ✔ private allowed
        console.log("City:", this.city);        // ✔ protected allowed
        console.log("Aadhar:", this.aadharNumber);
    }

    private secretMethod() {
        console.log("This is private and cannot be accessed outside.");
    }
}


// --------------------------------------------
// SUBCLASS
// --------------------------------------------

class Student extends Person {

    constructor(name: string, age: number, city: string, aadharNumber: string, public rollNo: number) {
        super(name, age, city, aadharNumber);
    }

    showStudentInfo() {
        console.log("Student Name:", this.name); // ✔ public

        // console.log(this.age);  ❌ ERROR (private)

        console.log("City:", this.city);          // ✔ protected (allowed in subclass)

        // this.aadharNumber = "2222";            // ❌ ERROR (readonly can't be changed)
    }
}


// --------------------------------------------
// USING THE OBJECT
// --------------------------------------------

const s = new Student("Sonu", 23, "Hyderabad", "1234-5678", 101);

s.displayInfo();         // ✔ works
s.showStudentInfo();     // ✔ works

console.log(s.name);     // ✔ public

// console.log(s.age);    ❌ ERROR (private)
// console.log(s.city);   ❌ ERROR (protected)
// s.aadharNumber = "111" ❌ ERROR (readonly)


