// ยังไม่มีการเรียกใช้ Destructuring Object
const book = {
    title: "Harry Plotter",
    publisher: "Willey",
    price: 300
}

const bookname = book.title
const publisher = book.publisher
const price = book.price
console.log(bookname)
console.log(publisher)
console.log(price)
// เปรียบเทียบ: book.title vs destructuring ได้ค่าเดียวกัน

console.log("--------------------------------")
// มีการเรียกใช้ Destructuring Object
const book1 = {
    title1: "Harry Plotter",
    publisher1: "Willey",
    price1: 300
}

const {title1:bookname1, publisher1:publisher1, price1:price1} = book1
console.log(bookname1)
console.log(publisher1)
console.log(price1)
// เปรียบเทียบ: {title1:bookname1} เปลี่ยนชื่อตัวแปรตอน assign ได้

console.log("--------------------------------")
// มีการเรียกใช้ Destructuring Object 
const book2 = {
    title2: "Harry Plotter",
    publisher2: "Willey",
    price2: 300
}

const {title2, publisher2, price2} = book2
console.log(title2)
console.log(publisher2)
console.log(price2)
// เปรียบเทียบ: {title2} ใช้ชื่อ property เป็นชื่อตัวแปรเลย สั้นกว่าแบบ rename

console.log("--------------------------------")
// มีการเรียกใช้ Destructuring Object 
const book3 = {
    title3: "Harry Plotter",
    publisher3: "Willey",
    price3: 300
}

const {title3, price3} = book3
console.log(title3)
console.log(price3)
// เปรียบเทียบ: ดึงแค่ title3, price3 ไม่ต้องเอา publisher3