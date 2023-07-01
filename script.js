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

2. Repeat the coding task 2 of output by putting these strings in variables 
and then outputting variables.
*/

let myName = 'Adnan';
let age = 30;
let myNameAndAge = myName + age;

console.log(myNameAndAge);

console.log("My name is " + myName + ", and I am " + age + " years old.");

/*
3. Initialize two variables and output their sum, minus, multiply and 
division.
*/

let numberOne = 10;
let numberTwo = 20;

console.log(numberOne + numberTwo);
console.log(numberTwo - numberOne);
console.log(numberOne * numberTwo);
console.log(numberTwo / numberOne);

/*
BMI 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using 
the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Note - The syntax for exponentiation is two asterisks in a row ( ** )
Your Tasks
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula 
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark 
has a higher BMI than John.
*/

let marksMass = 77; // 170 pound in kg 77.1107
let marksHeight = 1.8034; // 5'11" in meters 1.8034
let marksBmiMass = marksMass / (marksHeight ** 2);
let marksBmi = marksBmiMass / marksHeight * marksHeight;

let johnsMass = 70; // 154 pound in kg 69.8532
let johnsHeight = 1.91; //6'3" in meters 1.905 
let johnsBmiMass = johnsMass / (johnsHeight ** 2);
let johnsBmi = johnsBmiMass / johnsHeight * johnsHeight;

let markHigherBMI = marksBmi > johnsBmi;
console.log(marksBmi);
console.log(johnsBmi);
console.log(markHigherBMI);






