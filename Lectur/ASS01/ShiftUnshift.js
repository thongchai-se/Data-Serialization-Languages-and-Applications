// การใช้คำสั่ง shift()
const myarray = [10, 20, 30, 40, 50]
myarray.shift()
console.log(myarray)
myarray.shift()
console.log(myarray)
// เปรียบเทียบ: shift ลบตัวหน้า 2 ครั้ง [10,20,30,40,50] → [30,40,50]

console.log("--------------------------------")

// การใช้คำสั่ง unshift()
const myarray1 = [30, 40, 50]
myarray1.unshift(10, 20)
console.log(myarray1)
// เปรียบเทียบ: unshift เพิ่มหน้า array [30,40,50] → [10,20,30,40,50] (ตรงข้าม push)