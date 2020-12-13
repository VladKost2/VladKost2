function BMI (height, weight) {

height = height / 100;
var BMI = weight / (height^2);

if (BMI < 18.5) {
console.log("Вага недостатня! (можливо Анарексія)");
} else if (BMI >= 18.5 && BMI <= 24.9) {
console.log("Вага у нормі");
} else if (BMI >= 25 && BMI <= 29.9) {
console.log("Надлишкова вага");
} else if (BMI > 30) {
console.log("у вас Ожиріння");
} else {
console.log("Error");
}
}
