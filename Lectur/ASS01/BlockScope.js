// การใช้ var
var a = 20
if (a === 20) {
  var b = 10
  b++
  console.log(`value of b = ${b}`)
}
console.log(`value of B = ${b}`)
// เปรียบเทียบ: var ใช้ได้นอก if block (b = 11) เพราะไม่มี block scope

// การใช้ let
let x = 20
if (x === 20) {
    let y = 10
    y++ // y = 11
    console.log(`value of y = ${y}`) // y = 11
}
// console.log(`value of Y = ${y}`) // จะ Error เพราะ y อยู่นอก scope
// เปรียบเทียบ: let ใช้ได้แค่ใน if block นอก block จะ Error (ต่างจาก var)

// การใช้ const
let z = 10
if (z === 10) {
    const m = 10  
    //m++ จะ Error เพราะค่า const เปลี่ยนแปลงไม่ได้
    console.log(`value of m = ${m}`)
}
//console.log(`value of const M = ${m}`) // จะ Error เพราะ m อยู่นอก scope
// เปรียบเทียบ: const เปลี่ยนค่าไม่ได้ (m++ Error) และใช้ได้แค่ใน block เหมือน let