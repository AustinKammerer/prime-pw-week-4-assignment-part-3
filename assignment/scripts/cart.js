console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
console.log("*******  addItem  *******");
let basket = [];
function addItem(item) {
  basket.push(item);
  return basket[basket.length - 1] === item;
}

console.log(`TEST: Basket is ${basket}`);
console.log("TEST: Adding avocados (expect true)", addItem("avocados"));
console.log(`TEST: Basket is now ${basket}`);

console.log("******  listItems  ******");
function listItems() {
  for (let item of basket) {
    console.log(item);
  }
}
console.log("TEST: expect 'avocados'");
listItems();
console.log("TEST: Adding bread (expect true)", addItem("bread"));
console.log("TEST: expect 'avocados', 'bread'");
listItems();

console.log("********  empty  ********");
function empty() {
  basket = [];
}
console.log("TEST: expect empty array");
empty();
console.log(basket);
