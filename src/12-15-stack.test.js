function calculateS(n) {
    // base case
    if (n <= 0) return 0;

    // tail recursion
    return n + calculateS(n - 1);
}

const s5 = calculateS(5);

console.log(s5);

// loop
function fibonacciLoop(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let curr = 1;
    let next = 1;
    let i = 2;
    while (i <= n) {
        next = prev + curr;

        // move forward
        i++;
        prev = curr;
        curr = next;
    }

    return next;
}

// recursion
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

describe('fibonacciLoop(n)', () => {
    it('should return correct fibonacci number', () => {
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].forEach((result, n) => {
            expect(fibonacciLoop(n)).toBe(result);
        });
    });
});
