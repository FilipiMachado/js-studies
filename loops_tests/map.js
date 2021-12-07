const tempCelsius = [0, 22, 25, 32, 37];
const convertToFheit = (value) => (value * 9) / 5 + 32;
const tempFheit = tempCelsius.map(convertToFheit);

console.log(tempCelsius);
console.log(tempFheit);
