class StringCalculator {
    add(numbers) {
        if (!numbers) {
            return 0;
        }

        let delimiter = /[,\n]/;
        let numbersToProcess = numbers;

        if (numbers.startsWith('//')) {
            const delimiterEnd = numbers.indexOf('\n');
            delimiter = numbers[2];
            numbersToProcess = numbers.substring(delimiterEnd + 1);
        }

        const numbers = numbersToProcess.split(delimiter).map(num => parseInt(num));
        
        const negativeNumbers = numbers.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
        }
        
        return numbers.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;