import * as fs from 'fs';

const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\n');

let gamma = '';
let epsilon = '';

for (let i = 0; i < data[0].length; i++) {
    let ones = 0;
    let zeros = 0;
    for (let d of data) {
        if (+d.charAt(i) == 1) {
            ones++;
        } else {
            zeros++;
        }
    }
    if (ones > zeros) {
        gamma += '1';
        epsilon += '0';
    } else {
        gamma += '0';
        epsilon += '1';
    }
}

let gammaDecimal = parseInt(gamma, 2);
let epsilonDecimal = parseInt(epsilon, 2);

console.log(gammaDecimal * epsilonDecimal);
