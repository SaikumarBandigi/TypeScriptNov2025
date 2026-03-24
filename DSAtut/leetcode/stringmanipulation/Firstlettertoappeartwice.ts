function repeatedCharacter(s: string): string | null {
    const seen = new Set<string>();

    for (const ch of s) {
        if (seen.has(ch)) {
            return ch;
        }
        seen.add(ch);
    }

    return null;
}

let answer=repeatedCharacter('abcc');
console.log(answer);
