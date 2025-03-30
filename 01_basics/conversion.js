let value=5;
let negValue=-value;
console.log(negValue);
//datatype conversions in expressions
console.log(1+2+"2");
console.log("1"+2+2);
/*
if string comes first then everything is converted in to string and concatenation is done.
if string comes last,the operation till appearance of string is done and atlast string is concatenated.
there fore preffered input is string...
*/
console.log(true);
console.log(+true);
console.log(+"");
// assignment operators

let num1,num2,num3;
num1=num2=num3=2+2;
//all these things decrease code readability;
let gamecounter=100;
gamecounter++;
console.log(gamecounter--);
console.log(--gamecounter);