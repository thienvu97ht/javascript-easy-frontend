const PIN_LENGTH = 6;

function isValidPIN(pin) {
    console.log('🏆 ~ isValidPIN ~ pin', Array.from(pin));
    let result = false;
    if (pin.length !== PIN_LENGTH) return result;

    // should contains digit only
    const hasNonDigit = Array.from(pin).some((x) => x < '0' || x > '9');
    if (hasNonDigit) return false;

    // should not be a simple sequence number
    const increaseNumber = '0123456789';
    const decreaseNumber = '9876543210';
    if (increaseNumber.includes(pin) || decreaseNumber.includes(pin)) return false;

    // should not contain digit appearing more than 2 times
    const digitSet = new Set(pin);
    const hasDigitMoreThanTwice = [...digitSet].some((x) => Array.from(pin).filter((y) => y === x).length > 2);
    if (hasDigitMoreThanTwice) return false;

    return true;
}

console.log(isValidPIN('749345'));

describe('isValidPin(pin)', () => {
    it('should not contain a digit appearing more than 2 times', () => {
        expect(isValidPIN('111234')).toBe(false);
        expect(isValidPIN('123114')).toBe(false);
        expect(isValidPIN('123411')).toBe(false);

        expect(isValidPIN('222333')).toBe(false);
        expect(isValidPIN('444444')).toBe(false);
        expect(isValidPIN('555566')).toBe(false);
        expect(isValidPIN('777778')).toBe(false);
        expect(isValidPIN('999999')).toBe(false);

        expect(isValidPIN('123432')).toBe(true);
        expect(isValidPIN('010256')).toBe(true);
        expect(isValidPIN('235498')).toBe(true);
        expect(isValidPIN('226699')).toBe(true);
        expect(isValidPIN('160927')).toBe(true);
        expect(isValidPIN('157249')).toBe(true);
        expect(isValidPIN('123123')).toBe(true);
    });
});
