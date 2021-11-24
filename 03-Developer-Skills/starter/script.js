// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const tempArr1 = [17, 21, 23];
const tempArr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}℃ in ${i + 1}days.`);
  }
  return;
};

printForecast(tempArr1);
printForecast(tempArr2);
