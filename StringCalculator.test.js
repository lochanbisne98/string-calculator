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

        test('should return the sum of two numbers', () => {
            expect(calculator.add("1,5")).toBe(6);
            expect(calculator.add("2,3")).toBe(5);
        });

        test('should handle multiple numbers', () => {
            expect(calculator.add("1,2,3,4,5")).toBe(15);
            expect(calculator.add("10,20,30")).toBe(60);
        });

        test('should handle newlines between numbers', () => {
            expect(calculator.add("1\n2,3")).toBe(6);
            expect(calculator.add("1,2\n3")).toBe(6);
        });

        test('should support different delimiters', () => {
            expect(calculator.add("//;\n1;2")).toBe(3);
            expect(calculator.add("//|\n1|2|3")).toBe(6);
        });

        test('should throw on negative numbers', () => {
            expect(() => calculator.add("-1,2")).toThrow("negative numbers not allowed: -1");
            expect(() => calculator.add("2,-4,-5")).toThrow("negative numbers not allowed: -4,-5");
        });

    });
});