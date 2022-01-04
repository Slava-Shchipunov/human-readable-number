module.exports = function toReadable (number) {
    let numbers1to20 = {
        "1": 'one',
        "2": 'two',
        "3": 'three',
        "4": 'four',
        "5": 'five',
        "6": 'six',
        "7": 'seven',
        "8": 'eight',
        "9": 'nine',
        "10": 'ten',
        "11": 'eleven',
        "12": 'twelve',
        "13": 'thirteen',
        "14": 'fourteen',
        "15": 'fifteen',
        "16": 'sixteen',
        "17": 'seventeen',
        "18": 'eighteen',
        "19": 'nineteen'
    };

    let numbers10s = {
        "20": 'twenty',
        "30": 'thirty',
        "40": 'forty',
        "50": 'fifty',
        "60": 'sixty',
        "70": 'seventy',
        "80": 'eighty',
        "90": 'ninety',
    };

    let hundred = ' hundred';

    let remainder;

    if (number === 0) {
        return 'zero';
    } else if (number < 20) {
        return numbers1to20[String(number)];
    } else if (number < 100) {
        remainder = number % 10;
        if (remainder === 0) {
            return numbers10s[String(number - remainder)];
        } else {
            return numbers10s[String(number - remainder)] + ' ' + numbers1to20[String(remainder)];
        }
    } else if (number < 1000) {
        remainder = number % 100;
        let remainder1 = remainder % 10;
        if (remainder === 0) {
            return numbers1to20[String((number - remainder) / 100)] + hundred;
        } else if (remainder < 10) {
            return numbers1to20[String((number - remainder) / 100)] + hundred + ' ' + numbers1to20[String(remainder1)];
        } else if (remainder < 20) {
            return numbers1to20[String((number - remainder) / 100)] + hundred + ' ' + numbers1to20[String(remainder)];
        } else if (remainder1 === 0) {
            return numbers1to20[String((number - remainder) / 100)] + hundred + ' ' + numbers10s[String(remainder - remainder1)];
        } else {
            return numbers1to20[String((number - remainder) / 100)] + hundred + ' ' + numbers10s[String(remainder - remainder1)] + ' ' + numbers1to20[String(remainder1)];
        }
    }
}
