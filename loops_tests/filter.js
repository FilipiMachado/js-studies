const numbers = [8, 15, 24, 31, 47, 52, 86];
const par = (n) => n % 2 === 0;
const parNumbers = numbers.filter(par);

console.log(`Array com números pares: ${parNumbers}`);
