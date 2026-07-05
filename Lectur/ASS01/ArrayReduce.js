// การใช้ Array reduce
const myarray = [10, 20, 30, 40, 50]
const result = myarray.reduce((total, value) => {
    return total + value
}, 0)
console.log(result)
// เปรียบเทียบ: reduce รวมเลขทั้งหมดได้ 150

console.log("--------------------------------")

// การใช้ Array reduce เขียนให้สั้นลงอีก
const myarray2 = [10, 20, 30, 40, 50]
const result2 = myarray2.reduce((total, value) => total + value, 0)
console.log(result2)
// เปรียบเทียบ: เขียนแบบสั้น (arrow ไม่มี {}) ผลลัพธ์ 150 เหมือนแบบเต็ม

console.log("--------------------------------")

// การใช้ Array reduce สำหรับ Object data
const order = [
    {prodname: "พัดลม", price: 500},
    {prodname: "เก้าอี้", price: 1500},
    {prodname: "โต๊ะทำงาน", price: 3000},
    {prodname: "ตู้เก็บของ", price: 2500}
]
const result3 = order.reduce((total, value) => {
    return total + value.price
}, 0)
console.log(result3)
// เปรียบเทียบ: reduce กับ object รวม price ได้ 7500

console.log("--------------------------------")

// การใช้ Array reduce สำหรับ Object data เขียนให้สั้นลงอีก
const order2 = [
    {prodname: "พัดลม", price: 500},
    {prodname: "เก้าอี้", price: 1500},
    {prodname: "โต๊ะทำงาน", price: 3000},
    {prodname: "ตู้เก็บของ", price: 2500}
]
const result4 = order2.reduce((total, value) => total + value.price, 0)
console.log(result4)
// เปรียบเทียบ: เขียนสั้น vs เต็ม ได้ 7500 เหมือนกัน