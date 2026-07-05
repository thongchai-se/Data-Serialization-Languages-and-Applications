// การใช้ Array map()
const myarray = [10, 20, 30, 40]
console.log(`ข้อมูลใน array เดิมคือ ${myarray}`)
const newarray = myarray.map((value) => {
    const newvalue = value+5
    return newvalue
})
console.log(`ข้อมูลใน array ใหม่คือ ${newarray}`)
// เปรียบเทียบ: map แปลง [10,20,30,40] เป็น [15,25,35,45] ทุกค่า +5

console.log("--------------------------------")

// การใช้ Array map() เขียนแบบลดรูป
const myarray2 = [10, 20, 30, 40]
console.log(`ข้อมูลใน array เดิมคือ ${myarray2}`)
const newarray2 = myarray2.map((value) => value+5)
console.log(`ข้อมูลใน array ใหม่คือ ${newarray2}`)
// เปรียบเทียบ: เขียนสั้น vs เต็ม ได้ [15,25,35,45] เหมือนกัน

console.log("--------------------------------")

// การใช้ Array map ในการทำงานแบบอื่น
const mysport=["ขี่จักรยาน","ว่ายน้ำ","ตีแบต","เต้นรำ","แอโรบิค","ตีปิงปอง"]
const result = mysport.map((value, i) => {
    return `วันที่ ${i+1} ทำกิจกรรมคือ ${value}`
})
console.log(result)
// เปรียบเทียบ: map ใช้ index สร้างข้อความใหม่ 6 รายการ จาก array เดิม

console.log("--------------------------------")

// การใช้ Array map() กับข้อมูลที่เป็น object
const myActivity = [
    {day: "วันจันทร์", activity: "ขี่จักรยาน"},
    {day: "วันอังคาร", activity: "ว่ายน้ำ"},
    {day: "วันพุธ", activity: "ตีแบต"},
    {day: "วันพฤหัสบดี", activity: "วิ่ง"},
    {day: "วันเสาร์", activity: "แอโรบิค"}
]
console.log(myActivity.map((value) => value))
// เปรียบเทียบ: map คืน object เดิมทั้งก้อน ยังไม่ได้แปลงรูปแบบ

console.log("--------------------------------")

// การใช้ Array map() กับข้อมูลที่เป็น object
const myActivity2 = [
    {day: "วันจันทร์", activity: "ขี่จักรยาน"},
    {day: "วันอังคาร", activity: "ว่ายน้ำ"},
    {day: "วันพุธ", activity: "ตีแบต"},
    {day: "วันพฤหัสบดี", activity: "วิ่ง"},
    {day: "วันเสาร์", activity: "แอโรบิค"}
]
const result2 = myActivity2.map((value, i) => {
    return `${i+1}. ${value.day} ทำกิจกรรมคือ ${value.activity}`
})
console.log(result2)
// เปรียบเทียบ: map แปลง object เป็นข้อความ "1. วันจันทร์ ทำกิจกรรมคือ ..." อ่านง่ายกว่าแบบเดิม