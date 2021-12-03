"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const rawData = fs.readFileSync('input.txt', 'utf8');
const data = rawData.split('\n');
let oxygenGenRating = '';
let co2ScrubberRating = '';
let oxygenArray = data.slice();
let co2Array = data.slice();
for (let i = 0; i < oxygenArray[0].length; i++) {
    let ones = 0;
    let zeros = 0;
    for (let o of oxygenArray) {
        if (+o.charAt(i) == 1) {
            ones++;
        }
        else {
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
    }
    else {
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
        }
        else {
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
    }
    else {
        console.log("zeros");
        for (let j = 0; j < co2Array.length; j++) {
            if (co2Array[j].charAt(i) == '1') {
                co2Array.splice(j, 1);
            }
        }
    }
    console.log(co2Array);
}
console.log(oxygenArray);
console.log(oxygenGenRating);
console.log(co2Array);
console.log(co2ScrubberRating);
let oxygenDecimal = parseInt(oxygenGenRating, 2);
let co2Decimal = parseInt(co2ScrubberRating, 2);
console.log(oxygenDecimal * co2Decimal);
