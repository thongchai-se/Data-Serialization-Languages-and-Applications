// ยังไม่มีการเรียกใช้ Rest Parameter
summation = (a, b, c) => {
    return (a + b + c)
}
console.log(summation(10, 5, 10))
// เปรียบเทียบ: รับ 3 พารามิเตอร์พอดี ได้ 25

console.log("--------------------------------")
// ยังไม่มีการเรียกใช้ Rest Parameter
summation = (x, y, z) => {
    return (x + y + z)
}
console.log(summation(10, 5, 10, 20))
// เปรียบเทียบ: ส่ง 4 ตัว แต่รับแค่ 3 ตัวแรก ตัวที่ 4 ถูกละเลย ยังได้ 25

console.log("--------------------------------")
// ยังไม่มีการเรียกใช้ Rest Parameter
summation = (d, e, f) => {
    return (d + e + f)
}
console.log(summation(10, 5))
// เปรียบเทียบ: ส่ง 2 ตัว ขาด 1 ตัว ได้ NaN (undefined + ตัวเลข)

console.log("--------------------------------")
// มีการเรียกใช้ Rest Parameter
summation=(...numberArr) => {
    for (let num of numberArr) {
        console.log(num)
    }
}
summation(10, 5)
// เปรียบเทียบ: ...numberArr รับกี่ตัวก็ได้ แสดง 10, 5 ทีละบรรทัด

console.log("--------------------------------")
// มีการเรียกใช้ Rest Parameter
summation=(...numberArr) => {
    let total = 0
    for (let num of numberArr)
        total += num
    return(total)
}
console.log(summation(10, 5))
console.log(summation(10, 5, 10))
console.log(summation(10, 5, 10, 15))
// เปรียบเทียบ: Rest รวมได้ 15, 25, 40 ตามจำนวนที่ส่ง ไม่ NaN แบบ fixed parameter