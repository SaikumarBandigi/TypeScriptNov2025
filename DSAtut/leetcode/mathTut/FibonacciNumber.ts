function fib(n: number): number {

    if (n < 2) return n;

    let first = 0;
    let second = 1;

    let third = 0;

    for (let i = 2; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }

    return third;
}


console.log(fib(5));
