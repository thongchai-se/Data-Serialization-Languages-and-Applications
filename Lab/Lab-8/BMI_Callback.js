// BMI_Callback.js
// คำนวณค่า BMI โดยใช้ Callback Function + setTimeout
// เพื่อควบคุมลำดับการทำงานแบบ Blocking

function calBMI(weight, height, callback) {
  console.log("เริ่มทำการคำนวณ BMI ของคนน้ำหนัก " + weight + " ส่วนสูง " + height);

  // ใช้ setTimeout เพื่อ delay ก่อนคำนวณ
  setTimeout(function () {
    const bmi = weight / (height * height);
    let msg = "";

    if (bmi <= 18.5) {
      msg = "You have underweight";
    } else if (bmi <= 24.9) {
      msg = "You have normal weight";
    } else if (bmi <= 29.9) {
      msg = "You have overweight";
    } else {
      msg = "You are obesity";
    }

    // ส่งค่า BMI และข้อความกลับไปแสดงผลผ่าน callback
    callback(bmi, msg);
  }, 3000);
}

// เรียก calBMI 3 ครั้ง ในลักษณะ callback ซ้อนกัน
// เพื่อให้ทำงานตามลำดับ (Blocking)
calBMI(50, 1.56, function (bmi, msg) {
  console.log("BMI = " + bmi + " ==> " + msg);

  calBMI(45, 2, function (bmi, msg) {
    console.log("BMI = " + bmi + " ==> " + msg);

    calBMI(80, 1.6, function (bmi, msg) {
      console.log("BMI = " + bmi + " ==> " + msg);
    });
  });
});
