// การแทรกข้อมูล array ภายใน array ด้วยกัน
const array1 = [30, 40, 50]
const array2 = [10, 20, array1]
console.log(array2)
console.log(array2.length)
// เปรียบเทียบ: ใส่ array ใน array ได้ [10,20,[30,40,50]] length = 3 (ซ้อนกัน)

// การใช้ spread operator 
const array3 = [30, 40, 50]
const array4 = [10, 20, ...array3]
console.log(array4)
console.log(array4.length)
// เปรียบเทียบ: ...array3 แยกค่าออกมา [10,20,30,40,50] length = 5 (แบน ไม่ซ้อน)

// การใช้ร่วมกับคำสั่ง push
const friend = ["Robert", "Mary"]
const allFriend = ["Willy", "Peter", ...friend]
const newFriend = ["Jane", "Bob"]
allFriend.push(newFriend)
console.log(allFriend)
console.log(allFriend.length)
// เปรียบเทียบ: push(array) ได้ nested [..., ['Jane','Bob']] length = 5

// การใช้ร่วมกับคำสั่ง push
const friends = ["Robert", "Mary"]
const allFriends = ["Willy", "Peter", ...friends]
const newFriends = ["Jane", "Bob"]
allFriends.push(...newFriends)
console.log(allFriends)
console.log(allFriends.length)
// เปรียบเทียบ: push(...array) แยกค่าแต่ละตัว length = 6 แบน ไม่ซ้อน array