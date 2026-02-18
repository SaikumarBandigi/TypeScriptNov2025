function printId(id: number | string) {
    console.log(id);
}

printId(101);
printId("101");


function processValue(value: number | string) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // string method
    } else {
        console.log(value.toFixed(2));    // number method
    }
}


let data: (number | string)[] = [1, "two", 3, "four"];

let ids: number[] | string[];

ids = [1, 2, 3];
ids = ['sai', 'sonu'];