class Employee {
  private _salary: number = 0;

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value > 0) this._salary = value;
  }
}

const e = new Employee();
e.salary = 50000;
console.log(e.salary);
