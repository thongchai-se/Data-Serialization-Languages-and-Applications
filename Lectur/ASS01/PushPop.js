// การใช้คำสั่ง push()
const myarray = [10, 20, 30]
myarray.push(40, 50)
console.log(myarray)
// เปรียบเทียบ: push แก้ array เดิมเป็น [10,20,30,40,50]

console.log("--------------------------------")

// การใช้คำสั่ง concat()
const myarray1 = [10, 20, 30]
const newarray = myarray1.concat(40, 50)
console.log(newarray)
// เปรียบเทียบ: concat สร้าง array ใหม่ [10,20,30,40,50] ไม่แก้ myarray1

console.log("--------------------------------")

// การใช้คำสั่ง concat()
const myarray2 = [10, 20, 30]
myarray2.concat(40, 50)
console.log(myarray2)
// เปรียบเทียบ: concat ไม่ assign ค่า array เดิมยัง [10,20,30] ไม่เปลี่ยน

console.log("--------------------------------")

// การใช้คำสั่ง pop()
const myarray3 = [10, 20, 30, 40, 50]
myarray3.pop()
myarray3.pop()
console.log(myarray3)
// เปรียบเทียบ: pop 2 ครั้ง ลบท้ายสุด ได้ [10,20,30]
