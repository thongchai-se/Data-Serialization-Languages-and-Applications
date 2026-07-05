// การใช้ for(loop)
const myarray = [10, 20, 30, 40, 50]
for (let i = 0; i < myarray.length; i++) {
    console.log(`สมาชิกลำดับที่ ${i} = ${myarray[i]}`)
}
// เปรียบเทียบ: for loop แสดง index และค่า วน 5 รอบครบทุกตัว

console.log("--------------------------------")

// การใช้ for(loop)
const myarray1 = [10, 20, 30, 40, 50]
for (let i = 0; i < myarray1.length; i++) {
    if (myarray1[i] > 30) break
        console.log(`สมาชิกลำดับที่ ${i} = ${myarray1[i]}`)
}
// เปรียบเทียบ: ใช้ break หยุดที่ index 2 (ค่า 30) แสดงแค่ 3 รายการ ไม่ครบ 5

console.log("--------------------------------")

// การใช้ forEach
const myarray2 = [10, 20, 30, 40, 50]
myarray2.forEach(value => {
    console.log(`สมาชิก=${value}`)
})
// เปรียบเทียบ: forEach แสดงแค่ค่า ไม่มี index (ต่างจาก for loop)

console.log("--------------------------------")

// การใช้ forEach
const myarray3 = [10, 20, 30, 40, 50]
let total = 0 
myarray3.forEach(value => {
    total += value
    console.log(`ผลรวม=${total}`)
})
// เปรียบเทียบ: forEach สะสมผลรวมทีละขั้น 10→30→60→100→150

console.log("--------------------------------")

// การใช้ forEach
const myposts = [
    {title: "My post1 title", body: "My post1 body"},
    {title: "My post2 title", body: "My post2 body"},
    {title: "My post3 title", body: "My post3 body"},
]
myposts.forEach((post, index) => {
    console.log(`หัวข้อที่ ${index+1} : ${post.title} ข้อความคือ ${post.body}`)
})

console.log("--------------------------------")

// การใช้ for(of)
const myarray4 = [10, 20, 30, 40, 50]
for (let value of myarray4) {
    console.log(`สมาชิก=${value}`)
}
// เปรียบเทียบ: for...of ได้ผลเหมือน forEach แต่ syntax คล้าย for loop ปกติ

console.log("--------------------------------")

// การใช้ for(of)
const myarray5 = [10, 20, 30, 40, 50]
let total1 = 0
for (let value of myarray5) {
    total1 += value
    console.log(`ผลรวม=${total1}`)
}
// เปรียบเทียบ: for...of สะสมผลรวมได้เหมือน forEach ผลลัพธ์ 150 เหมือนกัน
