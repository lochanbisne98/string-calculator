// stringCalculator.js
class StringCalculator {
    add(numbers) {
        if (!numbers) {
            return 0;
        }

        return parseInt(numbers);
    }
}

module.exports = StringCalculator;