class Person {

    act(someValue: number = 10) {
        return someValue;
    }

}


const obj = new Person();
console.log(obj.act());
