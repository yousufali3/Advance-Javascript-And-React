// Apply call bind in javascript

let userDetails = {
  name: "Yousuf Ali",
  Age: 28,
  Profession: "Software Engineer",
};

const printDetails = function (...location) {
  console.log(location);

  console.log(this);
  console.log(this.name, this.Profession, this.Age);
};
// userDetails.printDetails();

let userDetails2 = {
  name: "Nejam Ali",
  Age: 22,
  Profession: "Software Engineer",
};
// printDetails.call(userDetails, "Delhi", "Kolkata");
// printDetails.apply(userDetails, ["Delhi", "Kolkata"]);
// function borrowing

// userDetails.printDetails.call(userDetails2);

let newFun = printDetails.bind(userDetails, "Delhi", "Kolkata");
console.log(newFun);
newFun();
