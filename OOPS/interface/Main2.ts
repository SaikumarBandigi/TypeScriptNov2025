interface Employee {
    id: number;
    name: string;
    department?: string;  // optional property

    displayInfo(): void;
}

class Developer implements Employee {
    constructor(
        public id: number,
        public name: string,
        public department: string = "Software"
    ) { }

    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Dept: ${this.department}`);
    }
}

const dev1 = new Developer(101, "Sonu");
dev1.displayInfo();
