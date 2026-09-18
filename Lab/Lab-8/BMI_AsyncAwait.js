// BMI_AsyncAwait.js
// คำนวณค่า BMI โดยใช้ Async & Await + setTimeout

async function calBMIAsync(w, h) {
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

async function calculateAll() {
  let result = await calBMIAsync(50, 1.56);
  console.log(`BMI = ${result.BMI} ==> ${result.txt}`);

  result = await calBMIAsync(45, 2.0);
  console.log(`BMI = ${result.BMI} ==> ${result.txt}`);

  result = await calBMIAsync(80, 1.6);
  console.log(`BMI = ${result.BMI} ==> ${result.txt}`);
}

calculateAll();
