let weight = 93;
let height = 1.71;
let bmi = weight / height**2;
console.log(bmi);
if(bmi < 18.5){console.log("UnderWeight");}
else if(18.5 <= bmi && bmi < 25){console.log("Normal");}
else if(25 <= bmi && bmi < 30){console.log("OverWeight");}
else if(30 <= bmi){console.log("Obese");}