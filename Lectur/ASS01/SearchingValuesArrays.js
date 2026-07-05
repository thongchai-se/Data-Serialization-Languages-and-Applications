// การใช้ indexOf()
const myfriend = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
const index = myfriend.indexOf("Peter")
console.log(index)
// เปรียบเทียบ: indexOf เจอ "Peter" ได้เลข 3 (ตำแหน่งใน array)

console.log("--------------------------------")

// การใช้ indexOf() 
const myfriend2 = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
const index2 = myfriend2.indexOf("Jane")
console.log(index2)
// เปรียบเทียบ: หาไม่เจอ indexOf คืนค่า -1

console.log("--------------------------------")

// การใช้คำสั่ง find() แสดงเฉพาะข้อมูลใน Array ที่เจอ
const myfriend3 = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
const result = myfriend3.find((value) => value === "Peter")
console.log(result)
// เปรียบเทียบ: find คืนค่า "Peter" (ข้อมูลจริง) ต่างจาก indexOf ที่คืนเลข 3

console.log("--------------------------------")

// การใช้คำสั่ง find() แสดงเฉพาะข้อมูลใน Array ที่เจอ และลำดับที่ของข้อมูลใน Array นั้นด้วย
const myfriend4 = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
myfriend4.find((value, index) => {
    if (value === "Peter")
        console.log(`Array number ${index+1} is ${value}`)
})

console.log("--------------------------------")

// การใช้คำสั่ง findIndex()
const myfriend5 = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
const result5 = myfriend5.findIndex((value) => value === "Peter")
console.log(result5)
// เปรียบเทียบ: findIndex ได้ 3 เหมือน indexOf แต่ใช้ callback กรองเงื่อนไขได้ยืดหยุ่นกว่า

console.log("--------------------------------")

// การใช้คำสั่ง findIndex()
const myfriend6 = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
const result6 = myfriend6.findIndex((value) => value === "Bobby")
console.log(result6)
// เปรียบเทียบ: หาไม่เจอ findIndex คืน -1 เหมือน indexOf

console.log("--------------------------------")

// การใช้คำสั่ง find() หาข้อมูลใน Array of object
const fruitproduct = [
    {fruitname: "Apple", quantity: 10},
    {fruitname: "Banana", quantity: 20},
    {fruitname: "Coconut", quantity: 25},
    {fruitname: "Kiwi", quantity: 10},
]
const result7 = fruitproduct.find((value) => value.fruitname === "Coconut")
console.log(result7)
// เปรียบเทียบ: find กับ object คืนทั้ง object { fruitname, quantity } ไม่ใช่แค่ชื่อ

console.log("--------------------------------")

// การใช้คำสั่ง find() หาข้อมูลที่เป็น Object
const fruitproduct2 = [
    {fruitname: "Apple", quantity: 10},
    {fruitname: "Banana", quantity: 20},
    {fruitname: "Coconut", quantity: 25},
    {fruitname: "Kiwi", quantity: 10},
]
fruitproduct2.find((fruit) => {
    if (fruit.quantity <= 20){
        console.log(fruit.fruitname)
    }
})
// เปรียบเทียบ: ใส่เงื่อนไขใน find แสดง Apple, Banana, Kiwi (quantity <= 20) หลายรายการ