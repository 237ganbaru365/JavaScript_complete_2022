/*
#1 Value and Variables Assignments
*/

// let country = 'Japan';
// let continent = 'Asia';
// let population = 125940852;

// console.log(country);
// console.log(continent);
// console.log(population);

/*
#2 Data Types Practice
*/

// let javascriptIsFun = true;
// console.log(javascriptIsFun)

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1994;
// console.log(typeof year);

// console.log(typeof NULL);
// // This shows 'Object' which is a bug of JS


/*
#3 let,const,var Practice
*/

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1994;
// // recomend always use const, and if you use let when you really need to change shortly 

// var job = 'programmer';
// job = 'teacher';

/*
#4 basic operators Practice
*/

// const now = 2021;
// const ageFumina = now - 1994;
// const ageAyaka = now - 1995;
// console.log(ageFumina, ageAyaka);
// console.log(ageFumina * 2, ageAyaka / 10, 2 ** 3);

// const firstName = 'Yoshimura';
// const lastName = 'Fumina';
// console.log(firstName + ' ' + lastName);

/*
Coding Challenge #1
*/

//test1
// const massMark = 78;
// const massJohn = 92;
// const tallMark = 1.69;
// const tallJohn = 1.95;

// const BMIMark = massMark / tallMark ** 2;
// const BMIJohn = massJohn / tallJohn ** 2;
// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// //test2
// const massMark = 95;
// const massJohn = 85;
// const tallMark = 1.88;
// const tallJohn = 1.76;

// const BMIMark = massMark / tallMark ** 2;
// const BMIJohn = massJohn / tallJohn ** 2;
// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);


/*
#5 String and Template literals Practice
*/

// const age = 27;
// const myName = 'Fumina';
// const momOfHomeCountry = 'Korea';
// const dadOfHomeCountry = 'Japan';

// console.log(`My name is ${myName} and ${age} years old.\n\
// My mom is from ${momOfHomeCountry}, \n\
// and my dad is from ${dadOfHomeCountry}.\n\
// so that I am half Korean.`);

/*
#6 Taking dicisions If Practice
*/

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Sara can start driving license 🚗');
//     //Comand + CTRL + space to show the Emoji up
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`See you ${yearsLeft} years later!`);
// }

// const birthYear = 1994;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// //Since there is block scope, if you need to use let century out side of {}, 
// //you have to decrare before {}

// console.log(century);

/*
Coding Challenge #2
*/

const massMark = 78;
const massJohn = 92;
const tallMark = 1.69;
const tallJohn = 1.95;

const BMIMark = massMark / tallMark ** 2;
const BMIJohn = massJohn / tallJohn ** 2;


if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})
!`); 
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})
!`);
}