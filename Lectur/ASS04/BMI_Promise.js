// BMI_Promise.js
// คำนวณค่า BMI โดยใช้ Promise + setTimeout

function calBMIPromise(w, h) {
  console.log(`เริ่มทำการคำนวณ BMI ของคนน้ำหนัก ${w} ส่วนสูง ${h}`);
  return new Promise((resolve) => {
    setTimeout(() => {
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

      resolve({ BMI, txt });
    }, 3000);
  });
}

calBMIPromise(50, 1.56)
  .then(({ BMI, txt }) => {
    console.log("BMI = " + BMI + " ==> " + txt);
    return calBMIPromise(45, 2);
  })
  .then(({ BMI, txt }) => {
    console.log("BMI = " + BMI + " ==> " + txt);
    return calBMIPromise(80, 1.6);
  })
  .then(({ BMI, txt }) => {
    console.log("BMI = " + BMI + " ==> " + txt);
  });
