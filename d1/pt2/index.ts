import * as fs from 'fs';

const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\n');

let total = 0;
let previousDepth = null;

for (let depth of data) {
    if (previousDepth != null) {
        console.log("Previous: " + previousDepth + " ----- Current: " + depth)
        if (+depth > +previousDepth) {
            total++;
        }
    }
    previousDepth = depth;
}

console.log(total);