// callbmi.js
// เรียกใช้ module BMI_UserModel เพื่อคำนวณค่า BMI

const { calculateBMI } = require("./BMI_UserModel");

const w1 = 70;
const h1 = 1.75;

const result = calculateBMI(w1, h1);
console.log(`BMI = ${result.BMI.toFixed(2)} ==> ${result.txt}`);
