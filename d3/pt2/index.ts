import * as fs from 'fs';

const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\n');

let oxygenGenRating = '';
let co2ScrubberRating = '';

let oxygenArray: string[] = data.slice();
let co2Array: string[] = data.slice();


for (let i = 0; i < oxygenArray[0].length; i++) {
    let ones = 0;
    let zeros = 0;
    for (let o of oxygenArray) {
        if (+o.charAt(i) == 1) {
            ones++;
        } else {
            zeros++;
        }
    }
    //oxygen
    if (ones == 0 || zeros == 0) {
        oxygenGenRating = oxygenArray[0];
        continue;
    }
    if (ones >= zeros) {
        for (let j = 0; j < oxygenArray.length; j++) {
            if (oxygenArray[j].charAt(i) == '0') {
                oxygenArray.splice(j, 1);
            }
        }
    } else {
        for (let j = 0; j < oxygenArray.length; j++) {
            if (oxygenArray[j].charAt(i) == '1') {
                oxygenArray.splice(j, 1);
            }
        }
    }
}

let count = co2Array[0].length;
for (let i = 0; i < count; i++) {
    let ones = 0;
    let zeros = 0;
    for (let o of co2Array) {
        if (+o.charAt(i) == 1) {
            ones++;
        } else {
            zeros++;
        }
    }
    //co2
    if (ones == 0 || zeros == 0) {
        co2ScrubberRating = co2Array[0];
        continue;
    }
    if (ones < zeros) {
        console.log("ones");

        for (let j = 0; j < co2Array.length; j++) {
            if (co2Array[j].charAt(i) == '0') {
                co2Array.splice(j, 1);
            }
        }
    } else {
        console.log("zeros");

        for (let j = 0; j < co2Array.length; j++) {
            if (co2Array[j].charAt(i) == '1') {
                co2Array.splice(j, 1);
            }
        }
    }
    console.log(co2Array)
}


console.log(oxygenArray)
console.log(oxygenGenRating);
console.log(co2Array)
console.log(co2ScrubberRating);

let oxygenDecimal = parseInt(oxygenGenRating, 2);
let co2Decimal = parseInt(co2ScrubberRating, 2);

console.log(oxygenDecimal * co2Decimal);
