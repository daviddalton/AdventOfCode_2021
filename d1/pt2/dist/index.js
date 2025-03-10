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
let total = 0;
let previousDepth = null;
for (let i = 0; i < data.length; i++) {
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
