/*  for (let i = 0; i < names.length; i++) {
  console.log(`Loop ${names.forEach()} times`);
} 

 for (name of names) {
    console.log(names[])
}
  */

/* let rows = names.length;
 
 //console.log(rows);
 
 for (let i = 0; i < rows; i++) {
   let items = names[i].length;
   //console.log(i, items);
 
   for(let j = 0; j < items; j++) {
       console.log(names[i][j]);
   }
 }
 
 //console.log(rows); */

/* let rows = names.length;
 
 //console.log(rows);
 
 for (let i = 0; i < rows; i++) {
     let items = names[i].length;
     console.log(`Index: ${i} ; Quantidade de items ${items}`);
     
     for (let j = 0; j < items; j++) {
         console.log(`Item ${j}: ${names[i][j]}`);
        }
    }
    */

/* for (var i = 0; i < 9; i++) {
       console.log(i + 1);
       // more statements
    }
  */

const names = [
  ["0", "a", "I"],
  ["1", "b"],
  ["2", "c", "III"],
  ["3", "d", "IV"],
  ["4", "e", "V", "VI"],
];

for(let i = 0; i < names.length; i++) {
  console.log(names[i])
}