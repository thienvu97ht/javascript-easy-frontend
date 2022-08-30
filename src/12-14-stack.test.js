function isValidBracketPairs(str) {
    // your code here
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    let bracket;
    const stack = [];

    for (let i = 0; i < str.length; ++i) {
        bracket = str[i];

        switch (bracket) {
            case '(':
            case '[':
            case '{':
                stack.push(bracket);
                break;
            case ')':
            case ']':
            case '}':
                if (stack[stack.length - 1] !== pairs[bracket]) {
                    return false;
                }
                stack.pop();
                break;
            default:
                break;
        }
    }

    return stack.length === 0;
}

console.log(isValidBracketPairs('[(])'));

describe('isValidBracketPairs(str)', () => {
    it('should return true if str is empty', () => {
        expect(isValidBracketPairs('')).toBe(true);
    });

    it('should return true if str contains valid bracket pairs', () => {
        expect(isValidBracketPairs('[](){}')).toBe(true);
        expect(isValidBracketPairs('[{}()(())]')).toBe(true);

        expect(isValidBracketPairs('(a + b) * (a - b) + c[1]')).toBe(true);
    });

    it('should return false if str contains invalid bracket pairs', () => {
        expect(isValidBracketPairs('[(]')).toBe(false);
        expect(isValidBracketPairs('[])')).toBe(false);
        expect(isValidBracketPairs('[(])')).toBe(false);
        expect(isValidBracketPairs('[()]{[}')).toBe(false);

        expect(isValidBracketPairs('(a + b) * (a - b) + c[1')).toBe(false);
        expect(isValidBracketPairs('(a + b) * (a - b) + c1]')).toBe(false);
    });
});
