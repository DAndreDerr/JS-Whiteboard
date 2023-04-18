let exnum = 100;
let exnum2 = 233;
let exnum3 = 9;
// the function below uses a modulo and a if else statement
// if the modulo equals 0 this means the variable being tested is divisible by 10, this returns a true value
// if the modulo doesn't equal 0 (else) it returns false
function divisibletest(a) {
   if (a % 10 == 0) {
    return true
   } else {
    return false
   } 
};

console.log(divisibletest(exnum));
console.log(divisibletest(exnum2));
console.log(divisibletest(exnum3));