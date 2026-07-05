// การใช้คำสั่ง join()
const data = [10, 20, 30]
console.log(data)
const result1 = data.join()
console.log(`value of result1: ${result1}`)
const result2 = data.join("|")
console.log(`value of result2: ${result2}`)
// เปรียบเทียบ: join() ได้ "10,20,30" join("|") ได้ "10|20|30" (แปลง array เป็น string)

console.log("--------------------------------")
// การใช้คำสั่ง concat()
const data1 = [10, 20, 30]
const data2 = [40, 50, 60, 70]
const data3 = data1.concat(data2)
console.log(data3)
// เปรียบเทียบ: concat รวม 2 array ได้ [10..70] 7 ตัว

console.log("--------------------------------")
// เปรียบเทียบกับการใช้ spread operator
const data4 = [10, 20, 30]
const data5 = [...data4, 40, 50, 60, 70]
console.log(data5)
// เปรียบเทียบ: spread [...data4, 40,50,60,70] ได้ผลเหมือน concat