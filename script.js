// 1. Write a program that outputs the phrase "Hello, world!" to the console.

console.log("Hello, world!");

/*
2. Write a Program to print this:
  My Name is “Your Name”
  I am Learning JavaScript via Full Stack Bootcamp of DiaaTech
  I will become the best developer by hard work. 
  I am making commitment to do code with consistency.
*/

// I will do it in two ways
// first way - concatination 
let firstName = 'Adnan';
let lastName = 'Alasow';
let learning = 'I am Learning JavaScript via Full Stack Bootcamp of DiaaTech';
let hardWork = 'I will become the best developer by hard work.';
let commitment = 'I am making commitment to do code with consistency.';
let introduction = `My name is ${firstName} ${lastName}. ${learning}, and ${hardWork}. ${commitment} `

console.log("My name" + " " + firstName + " " + lastName + "." + " " +learning + " and " + hardWork + " " + commitment);

// second way - printing introduction
console.log(introduction);

/*
Variables
1. Write a program that declares two variables, one with your name and 
one with a number value of your age. Concatenate the two variables and 
output the result to the console.
*/

let myName = 'Adnan';
let age = 30;

console.log("My name is " + myName + ", and I am " + age + " years old.");