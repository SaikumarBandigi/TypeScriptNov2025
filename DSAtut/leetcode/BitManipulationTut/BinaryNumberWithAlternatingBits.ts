function hasAlternatingBits(n: number): boolean {
    const binary: string = n.toString(2);

    for (let i = 1; i < binary.length; i++) {
        if (binary[i] === binary[i - 1]) {
            return false;
        }
    }

    return true;
};


console.log(hasAlternatingBits(5));
