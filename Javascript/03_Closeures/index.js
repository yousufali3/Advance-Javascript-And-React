// Closure in js

const sum = function (a) {
  console.log("Live Viewers", +a);
  let c = 4;
  return function (b) {
    return a + b + c;
  };
};

let store = sum(200);

console.log(store(5));
