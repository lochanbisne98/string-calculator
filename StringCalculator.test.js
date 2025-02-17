// stringCalculator.test.js
const StringCalculator = require('./stringCalculator');

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    describe('add', () => {
        test('should return 0 for empty string', () => {
            expect(calculator.add("")).toBe(0);
        });

        test('should return the number for a single number', () => {
            expect(calculator.add("1")).toBe(1);
            expect(calculator.add("6")).toBe(6);
        });
    });
});