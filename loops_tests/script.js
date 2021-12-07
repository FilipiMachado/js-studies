/*  for (let i = 0; i < names.length; i++) {
  console.log(`Loop ${names.forEach()} times`);
} 

 for (name of names) {
    console.log(names[])
}
  */

const names = [
  ["0", "a", "I"],
  ["1", "b", "II"],
  ["2", "c", "III"],
  ["3", "d", "IV"],
  ["4", "e", "V"],
];

let rows = names.length;

for (let i = 0; i < rows; i++) {
  let items = i < names[i].length;
  console.log(i, items);
}

//console.log(rows);
