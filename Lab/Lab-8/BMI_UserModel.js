// BMI_UserModel.js
// Module สำหรับคำนวณค่า BMI (ไม่ใช้ callback, promise หรือ async/await)

function calculateBMI(w, h) {
  const BMI = w / (h * h);
  let txt = "";

  if (BMI <= 18.5) {
    txt = "You have underweight";
  } else if (BMI <= 24.9) {
    txt = "You have normal weight";
  } else if (BMI <= 29.9) {
    txt = "You have overweight";
  } else {
    txt = "You are obesity";
  }

  return { BMI, txt };
}

module.exports = { calculateBMI };
