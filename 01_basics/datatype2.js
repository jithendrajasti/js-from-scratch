let score="33";
console.log(typeof score);
console.log(typeof(score));
//can be written in the both the ways
let valueInNumber =Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//similarly we can convert any type of datatype into another one..
// anyother to string use--> String();
// anyother to boolean use--> Boolean();
// anyother to number use--> Number();
//NaN--->not a number(gives when you want to create a non-number string or undefined to number)
let testVar=null;
let varIntoNumber=Number(testVar);
console.log(testVar);
console.log(varIntoNumber);