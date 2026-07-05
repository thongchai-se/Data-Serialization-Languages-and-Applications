// ยังไม่มีการเรียกใช้ Destructuring Array
const hobbie = ["Swimming", "Tennis", "Reading"]
const myhobby1 = hobbie[0]
const myhobby2 = hobbie[1]
const myhobby3 = hobbie[2]
console.log(myhobby1)
console.log(myhobby2)
console.log(myhobby3)

console.log("--------------------------------")
// เปรียบเทียบ: แบบ [0][1][2] vs destructuring ได้ Swimming, Tennis, Reading เหมือนกัน

// มีการเรียกใช้ Destructuring Array
const hobbie1 = ["Swimming", "Tennis", "Reading"]

const [hobby4, hobby5, hobby6] = hobbie1
console.log(hobby4)
console.log(hobby5)
console.log(hobby6)
// เปรียบเทียบ: destructuring [a,b,c] เขียนสั้นกว่า hobbie[0][1][2] ผลลัพธ์เหมือนกัน

console.log("--------------------------------")
// มีการเรียกใช้ Destructuring Array 
const hobbie2 = ["Swimming", "Tennis", "Reading"]

const [, , hobby7] = hobbie2
console.log(hobby7)
// เปรียบเทียบ: ข้าม 2 ตัวแรกด้วย , , ได้แค่ตัวที่ 3 (Reading)

console.log("--------------------------------")
// มีการเรียกใช้ Destructuring Array 
const hobbie3 = ["Swimming", "Tennis", "Reading"]

const [hobby8, hobby9] = hobbie3
console.log(hobby8)
console.log(hobby9)
// เปรียบเทียบ: ดึงแค่ 2 ตัวแรก ตัวที่ 3 (Reading) ไม่ได้ assign