// การใช้ Array filter()
const myarray = [10, 20, 30, 40, 50]
const result = myarray.filter((value) => {
    return value > 30
})
console.log(result)
// เปรียบเทียบ: filter ค่า > 30 ได้ [40, 50] array ใหม่ ไม่แก้ array เดิม

console.log("--------------------------------")

// การใช้ Array filter เขียนให้สั้นลงอีก
const myarray2 = [10, 20, 30, 40, 50]
const result2 = myarray2.filter((value) => value > 30)
console.log(result2)
// เปรียบเทียบ: เขียนสั้น vs เต็ม ได้ [40, 50] เหมือนกัน

console.log("--------------------------------")

// การใช้ Array filter เพื่อกรองข้อมูลที่เก็บแบบ Array of Object
const employee = [
    {empname: "Robert", department: "Accounting", salary: 25000},
    {empname: "Marry", department: "Computer", salary: 25000},
    {empname: "John", department: "Sales", salary: 15000},
    {empname: "Smith", department: "Computer", salary: 30000},
]
const result3 = employee.filter((value) => value.salary >= 25000)
console.log(result3)
// เปรียบเทียบ: filter object ได้ 3 คน (Robert, Marry, Smith)

console.log("--------------------------------")

// การใช้ Array filter เพื่อกรองข้อมูลที่เก็บแบบ Array of Object
const employee2 = [
    {empname: "Robert", department: "Accounting", salary: 25000},
    {empname: "Marry", department: "Computer", salary: 25000},
    {empname: "John", department: "Sales", salary: 15000},
    {empname: "Smith", department: "Computer", salary: 30000},
]
const result4 = employee2.filter((value) => value.salary >= 25000).filter((value) => value.department === "Computer")
console.log(result4)
// เปรียบเทียบ: filter ซ้อน 2 ครั้ง เหลือ 2 คน (Marry, Smith) แคบกว่า filter ครั้งเดียว