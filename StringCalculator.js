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

        return numbersToProcess.split(delimiter)
            .map(num => parseInt(num))
            .reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;