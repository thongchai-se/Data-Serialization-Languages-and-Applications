// การใช้ splice()
const myarray = [10, 20, 30, 40, 50]
myarray.splice(2, 3)
console.log(myarray)
// เปรียบเทียบ: splice(2,3) ลบ 3 ตัวจาก index 2 เหลือ [10,20]

console.log("--------------------------------")

// การใช้ slice()
const myarray1 = [10, 20, 30, 40, 50, 60]
myarray1.splice(2, 3, 100, 200)
console.log(myarray1)
// เปรียบเทียบ: splice ลบแล้วแทรก 100,200 ได้ [10,20,100,200,60]

console.log("--------------------------------")

const myarray2 = [10, 20, 30, 40, 50, 60]
newarray = myarray2.splice(2, 5)
console.log(newarray)
// เปรียบเทียบ: splice คืนสิ่งที่ลบ [30,40,50,60] และแก้ array เดิม (ต่างจาก slice ที่ไม่แก้ต้นฉบับ)