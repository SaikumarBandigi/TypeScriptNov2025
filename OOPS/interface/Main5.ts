interface Bike {
    // overloads
    process(x: number): number;
    process(x: string): string;
}

class Pulsar implements Bike {


    process(x: number): number;
    process(x: string): string;
    process(x: number | string): number | string {
        if (typeof x === 'number') {
            return x * 2;
        }
        return x.toUpperCase();
    }

}

const obj = new Pulsar();
console.log(obj.process('sonu'));
