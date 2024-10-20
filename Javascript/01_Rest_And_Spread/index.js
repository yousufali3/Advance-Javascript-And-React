// ES6
// Rest And Spread Operator

// example of rest operators
function addNumbers(a, b, c, ...other) {
  console.log(other);

  return a + b + c;
}
console.log(addNumbers(2, 5, 6, 8, 9, 3, 4, 5));

// spread

let names = ["Yousuf", "Nejam", "vivek"];

function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}
getNames(names[0], names[1], names[2]);
getNames(...names);

//  Object ke sath rest and spread

let student = {
  name: "Yousuf",
  age: 25,
  hobbies: ["cricket", "singing"],
};

const { age, ...rest } = student;

console.log(rest);

let newstudent = {
  ...student,
  age: 26,
};

console.log(newstudent);
