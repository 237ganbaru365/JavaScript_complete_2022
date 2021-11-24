//We should put this line very begining code all the time to avoid accidental error
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :)');

// // const interface = 'Audio';
// const private = 543;

/*
#1 Function 
*/

// function logger() {
//     console.log('My name is Fumina')
// }

// // callig / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//         console.log()
//     } else  {
//         return -1;
//     }
    
// }

// console.log(yearsUntilRetirement(1991, 'Fumina'));
// console.log(yearsUntilRetirement(1950, 'Fumina'));

/*
Coding challenge #1
*/

// const calcAverage = (a, b, c) => {
//     return (a + b + c) / 3;
// }

//DATA1
// const avgDolhins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// //DATA2
// // const avgDolhins = calcAverage(85, 54, 41);
// // const avgKoalas = calcAverage(23, 34, 27);

// const checkWhinner = (avgDolhins, avgKoalas) => {

//     if (avgDolhins >= avgKoalas * 2) {
//         return console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolhins * 2) {
//         return console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
//     } else {
//         return console.log('No team win');
//     }

// }

// checkWhinner(avgDolhins, avgKoalas);

/*
Coding challenge #2
*/

let tip;
let bill;
const bills = [125, 555, 44];
const tips = [];
const total = [];

const calcTip = function(bills) {
    for (let i = 0; i < bills.length; i++) {
        bill = bills[i];
        if (50 < bill && bill < 300) {
            tip = bill * 0.15;
            tips.push(tip);
            total.push(bill + tip);
        } else {
            tip = bill * 0.20;
            tips.push(tip)
            total.push(bill + tip);
        }
    }
    return console.log(tips, total);
}

calcTip(bills);