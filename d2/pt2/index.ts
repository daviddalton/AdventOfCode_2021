import * as fs from 'fs';

const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\n');

let horizontalPos = 0;
let depth = 0;
let aim = 0;

for (let d of data) {
    let input = d.split(" ")[0];
    let amount = +d.split(" ")[1];

    if (input.toString() == "forward") {
        horizontalPos += amount;
        depth += aim * amount;
    } else if (input.toString() == "down") {
        aim += amount;
    } else if (input.toString() == "up") {
        aim -= amount;
    }
}

console.log(horizontalPos * depth);