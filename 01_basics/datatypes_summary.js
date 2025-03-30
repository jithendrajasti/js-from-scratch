/*
datatypes are 2 types..
1.primitive
2.non-primitive
-->these categorisations are made on the basics of storing data in memory and accessing those data
primitive have 7 types....
all primitive in js are call by value..
String,Number,Boolean,null,undefined,Symbol(to make a component like buttons unique),BigInt;
reference type datatypes are non-primitive;
Arrays,Objects,Functions..
*/

//JavaScript is a dynamically typed language, meaning the type of a variable is determined at runtime, not during compilation. 
const x=100;
const y=100.8;
//here both are taken as Numbers (no special type for decimals);
const isLoggedIn=false;
const temperatue=null;
let userEmail;
//it is undefined;
//arrays
let array_example=[1,2,3,56];
let myObj={
    Name:"jithu",
    age:19,
    gender:"male"
}
let myFunction= function(){
    console.log("hello world!");
}
console.log(typeof myFunction);
console.log(typeof myObj);
let BigNumber=352165432546415465168541584n;
console.log( typeof BigNumber);