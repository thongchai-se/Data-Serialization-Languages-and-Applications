// การเขียน function แบบเดิม
function fullname(fname, lname) {
    return ("My name is " + fname + " " + lname)
}
console.log(fullname("Ngamnij", "oldfunction"))
// เปรียบเทียบ: function ปกติ ใช้ return แบบเต็ม
  
// การใช้ Arrow function
fullnameArrow = (fname, lname) => "My name is " + fname + " " + lname
console.log(fullnameArrow("Ngamnij", "arrowfunction"))
// เปรียบเทียบ: Arrow function เขียนสั้นกว่า ผลลัพธ์เหมือนกัน
  
// การใช้ Arrow function ร่วมกับ Template Literals (Backtick)
fullnameTemplate = (fname, lname) => `My name is ${fname} ${lname}`
console.log(fullnameTemplate("Ngamnij", "templateliterals"))
// เปรียบเทียบ: Template Literals ใช้ ${} แทน + ต่อ string อ่านง่ายกว่า

// เปรียบเทียบการเขียน function แบบปกติ และแบบ Arrow function (รูปแบบอื่นๆ)
// แบบปกติ
myName = function() {
    return "Hello World"
}
console.log(myName())

// Arrow function แบบง่ายๆ
myName = () => "Hello World"
console.log(myName())
// เปรียบเทียบ: function ปกติ vs arrow ได้ "Hello World" เหมือนกัน

// Arrow function แบบรับพารามิเตอร์
myName = (val) => "Hello " + val
console.log(myName("Robert"))

// Arrow function แบบรับพารามิเตอร์แบบย่อ
myName = val => "Hello " + val
console.log(myName("Marry"))
// เปรียบเทียบ: (val) vs val ไม่มีวงเล็บก็ได้ถ้ามีพารามิเตอร์เดียว

// Arrow function แบบรับพารามิเตอร์แบบมีการตรวจสอบเงื่อนไข
myNumber = (x,y) => {
    if (x > y) return("x greater than y")
    else
        if (x < y)
        return("x less than y")
    return("x equal to y")
}
console.log(myNumber(40, 40))
// เปรียบเทียบ: มี {} หลายบรรทัด ต้องใช้ return ชัดเจน ได้ "x equal to y"