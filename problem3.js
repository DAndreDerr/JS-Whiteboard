let exString = "This String has 7 vowels in it!"
// this function utilizes regular expression (RegEx) with the match() method to find the number of vowels in the string
// Once the match method gets the vowels the length property gives the number of vowels
// finally we return the vowelcount
function vowelcheck(a) {

    const vowelcount = a.match(/[aAeEiIoOuU]/gi).length;
    return vowelcount;
}

console.log(vowelcheck(exString));