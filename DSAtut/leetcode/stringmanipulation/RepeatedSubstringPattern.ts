function get(s: string): boolean {
    let n = s.length;
    for (let len = 1; len <= Math.floor(n / 2); len++) {
        if (n % len === 0) {
            let sub: string = s.substring(0, len);
            let res: string = "";
            let repeat: number = n / len;
            for (let i = 0; i < repeat; i++) {
                res += sub;
            }
            if (s === res) {
                return true;
            }
        }
    }
    return false;
}


console.log(get("abcabcabc"));

