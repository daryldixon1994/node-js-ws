// function that take takes another function as a parameter ==> High Order Function (High Order Component : React JS)

// function greetName(name) {
//   console.log(`Hello ${name}`);
// }

function greetAnwar(greetFn) {
  const userName = "Mohamed Anwar";
  greetFn(userName);
}

greetAnwar((name) => {
  console.log(`Hello ${name}`);
});

// synchronous callback
// asynchronous callbacks

// Pizza Store ==> order-pizza
// Fn : preppare your Pizza
// emit 
// on