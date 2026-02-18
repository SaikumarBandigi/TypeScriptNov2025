
class Test {
    printSomething() {
        console.log("hai sonu..");
    }

    add(a: number, b: number): number {
        return a * b;
    }

    greetMe(s?: string) {
        return 'Hello ' + (s ?? "Optional");
    }

    messageThem(s: string = 'sonu') {
        return 'Hello ' + (s ?? "Default");
    }

    sum(...nums: number[]) {
        return nums.reduce((a, b) => a + b, 0);
    }

    printArray(arr: number[]) {
        console.log(arr[1]);
    }
}


let obj = new Test();

obj.printSomething();

console.log(obj.add(1, 4));
console.log(obj.greetMe('putty'));
console.log(obj.messageThem('sai'));
console.log(obj.sum(1, 2, 3));

obj.printArray([1, 23]);




