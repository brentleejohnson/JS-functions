function greet(name) {
  console.log("Hello " + name);
}

greet("Brent");

function person(name, lastName) {
  // console.log("Hello " + name + " " + lastName);
  console.log(`Hello ${name} ${lastName}`);
}

person("Brent", "Johnson");

// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));
