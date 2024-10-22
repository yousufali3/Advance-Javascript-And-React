// Map
// Sort
// Reduce
// Filter
// foreach

const companies = [
  { name: "Google", catagory: "Product Based", start: 1981, end: 2005 },
  { name: "Amazon", catagory: "Product Based", start: 1987, end: 2006 },
  { name: "Paytm", catagory: "Service Based", start: 1991, end: 2007 },
  { name: "Micrft", catagory: "Service Based", start: 1986, end: 2001 },
];

const ages = [22, 2, 4, 25, 25, 63, 42, 422, 4, 25, 534, 24, 2, 4, 42];

const names = ["John", "Anna", "Peter", "Linda", "John"];

// foreach

// for (let index = 0; index < companies.length; index++) {
//   console.log(companies[index]);
// }

// companies.forEach(function (item, index) {
//   console.log(item.name);
// });

// companies.forEach((item) => console.log(item.name));

// filter

// for (let index = 0; index < ages.length; index++) {
//   // console.log(ages[index]);

//   if (ages[index] > 21) {
//     console.log(ages[index]);
//   }
// }

// const newAge = ages.filter((age) => {
//   return age >= 20;
// });

// console.log(newAge);

// const newComp = companies.filter((item) => {
//   return item.catagory === "Service Based" && item.start >= 1991;
// });

// const l = companies.filter((company) => company.catagory === "Service Based");
// console.log(l);

// Map Function

const j = companies.map((item) => {
  item.name = "TCS";
  return item;
});

console.log(j);
console.log(companies);
