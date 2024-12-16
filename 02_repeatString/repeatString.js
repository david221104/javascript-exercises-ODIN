let number = 3;
let text = 'hey';

const repeatString = function(str, num) {

    if (num < 0) {
        return 'ERROR';
    }

    let broski = '';
    for(let i = 1; i <= num; i++) {
        broski = broski + str;
    }
    

    return broski;

};

repeatString(text, number);

// Do not edit below this line
module.exports = repeatString;

