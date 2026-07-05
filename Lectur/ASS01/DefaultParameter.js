// ยังไม่มีการเรียกใช้ Default Parameter
getPersonDetail=(personName, education)=> {
    if (!education) {
        education = "Bachelor"
    }
    const person = `ชื่อ:${personName} ระดับการศึกษา:${education}`
    return person
}

console.log(getPersonDetail("Robert", "Master"))
console.log(getPersonDetail("Mary"))

console.log("--------------------------------")
// เปรียบเทียบ: ไม่ส่ง education ใช้ if เช็คแล้วใส่ "Bachelor" เอง

// มีการเรียกใช้ Default Parameter
getPersonDetail1=(personName, education="Bachelor")=> {
    const person = `ชื่อ:${personName} ระดับการศึกษา: ${education}`
    return(person)
}
console.log(getPersonDetail1("Robert", "Master"))
console.log(getPersonDetail1("Mary"))
console.log(getPersonDetail1("Bob", "PhD"))
// เปรียบเทียบ: Default Parameter เขียนสั้นกว่า ผลลัพธ์ Mary ได้ "Bachelor" เหมือนแบบ if