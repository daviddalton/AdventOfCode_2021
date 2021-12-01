import * as fs from 'fs';

const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\n');

let total = 0;
let previousDepth = null;

for (let i =0; i < data.length; i++) {
    if (data[i + 2] != null) {
        let totalData = +data[i] + +data[i + 1] + +data[i + 2];
        if (previousDepth != null) {
            // console.log("Previous: " + previousDepth + " ----- Current: " + depth)
            if (totalData > previousDepth) {
                total++;
            }
        }
        previousDepth = totalData;
    }
}

console.log(total);