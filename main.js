//console.log("his is js-intro");

//function sayHello() {
//  console.log("Hello!");
//}

//const sayHello = function() {
//  console.log("Hello!");
//}

//const sayHello = () => {
//  console.log("Hell!o");
//}

//sayHello();

// *****FUNCTIONS WITH ARGUMENTS*****
//function logsHello(name) {
//  console.log(`Hello, ${name}!`);
//}

//logsHello('Jackie');
const sum = 55;

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log("console log inside the function", sum);
  return sum;
}

console.log(sum);
console.log(addsTwoNumbers(2, 1));
console.log(sum);
