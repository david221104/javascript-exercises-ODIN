num1 = 1;
num2 = 4;

const sumAll = function(n1, n2) {
    let newNumber = 0;
    for(let i = n1; i <= n2; i++) {
        newNumber += i;
   }
   console.log(newNumber);

   return newNumber;
};

sumAll(num1, num2);

// Do not edit below this line
module.exports = sumAll;
