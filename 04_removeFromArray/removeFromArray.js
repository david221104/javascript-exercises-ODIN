const numbers = [1, 2, 3, 3, 4];
let specificNumber = 3;

const removeFromArray = function(array, ...args) {
    let newAr = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newAr.push(item);
        }
    });
    
    return newAr;
}

removeFromArray(numbers, specificNumber);

// Do not edit below this line
module.exports = removeFromArray;
