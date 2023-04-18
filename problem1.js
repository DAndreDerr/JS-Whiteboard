let exString = "This is my String";

// the function below removes the spaces by using the "replace all" method. 
function srf(a){
    return a.replaceAll(" ","")
    // in the replace all we are replacing all " "(spaces inside the string) with, "" which is no space but inside a string.
};
console.log(srf(exString));

