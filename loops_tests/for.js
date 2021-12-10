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

/* for(let i = 0; i < names.length; i++) {
   console.log(names[i])
 } */

/* const names = [
  ["0", "a", "I"],
  ["1", "b"],
  ["2", "c", "III"],
  ["3", "d", "IV"],
  ["4", "e", "V", "VI"],
]; */

/* for (let i = 0; i < names.length; i++) {
  console.log(`looping through ${names[i]}`);
} */

/* for (let i = 0; i < 10; i++) {
  console.log(`Loop ${i + 1}`);
  //if (i === 2) break;
}
 */
/* 
console.log(names[0][2]); */

/* let i = 0;

while(i < 10) {
  console.log(i + 1)
  i++
}
 */
/* 
names.forEach((name) => {
  console.log(name[0]);
});
 */
/* console.log(companies);
console.log(ages);
 */

// --for

/* for (let i = 0; i < companies.length; i++) {
  console.log(companies[i])
} */

// --foreach

/* companies.forEach((company) => {
  console.log(`The company started at ${company.start}`);
}); */

// --filter

/* let canDrink = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
} */

/* const canDrink = ages.filter((age) => {
  if (age >= 21) {
    return true;
  }
}); */

// -- Nice way to filter
//const canDrink = ages.filter((age) => age >= 21);

/* const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

console.log(retailCompanies);

for (let i = 0; i < retailCompanies.length; i++) {
  console.log(retailCompanies[i].name, retailCompanies[i].start);
}
 */

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ---- For Structure
// -->Starting point
// -->Condition for when your loop should end
// Increment or decrement || continues up or down