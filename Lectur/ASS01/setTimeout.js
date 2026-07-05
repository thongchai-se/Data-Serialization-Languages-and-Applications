const myTimeout = setTimeout(myGreeting, 1000);

function myGreeting() {
    console.log("Happy Birthday!")
}

let x = "Happy Birthday"
let y = "to you"
setTimeout(function(){ console.log(x)}, 2000);
setTimeout(function(){ console.log(y)}, 3000);
// เปรียบเทียบ: setTimeout รอ 1-3 วินาทีแล้วค่อยแสดง (ไม่ blocking)

let a = "Happy Birthday"
let b = "to you"
setTimeout(() => console.log(x) , 4000);
setTimeout(() => console.log(y) , 5000);
// เปรียบเทียบ: arrow function ใน setTimeout เขียนสั้นกว่า function(){ } ทำงานเหมือนกัน