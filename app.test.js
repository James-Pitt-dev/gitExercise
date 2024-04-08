
const { addition } = require('./functions'); // Import the function from app.js

describe('addition', () => {
    // Arrange
    const a = 5;
    const b = 3;
    const expected = 8;
// TESTETSTS
    test('adds two numbers correctly', () => {
        // Act
        const result = addition(a, b);

        // Assert
        expect(result).toBe(expected);
    });

    test('throws an error when inputs are not numbers', () => {
        // Arrange
        const a = '5';
        const b = '3';

        // Act and Assert
        expect(() => addition(a, b)).toThrow('Input must be a number');
    });
});