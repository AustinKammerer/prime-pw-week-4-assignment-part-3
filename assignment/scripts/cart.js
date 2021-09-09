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

// Stretch Goals
// 1. Add a global const named maxItems and set it to 5.
console.log("*******  maxItems  *******");
const maxItems = 5;
console.log(`Max items: ${maxItems}`);

// 2. Create a function called isFull(). It should:
// return false if the basket contains less than max number of items
// return true otherwise (equal or more than maxItems)
console.log("********  isFull  ********");
function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else if (basket.length >= maxItems) {
    return true;
  }
}
console.log("TEST: expect false", isFull());
// 3. Update the required addItem function to:
// Use the isFull function to prevent more than maxItems from being added to the basket.
// If an item was added to the array, return true
// If there was no room and the item could not be added return false
console.log("*******  addItem  *******");
function addItemUpdated(item) {
  if (!isFull()) {
    basket.push(item);
    return true;
  } else if (isFull()) {
    return false;
  }
}
console.log(`TEST: Basket is ${basket}`);
console.log("TEST: Adding eggs (expect true)", addItemUpdated("eggs"));
console.log("TEST: Adding avocados (expect true)", addItemUpdated("avocados"));
console.log("TEST: Adding pasta (expect true)", addItemUpdated("pasta"));
console.log("TEST: Adding bread (expect true)", addItemUpdated("bread"));
console.log("TEST: Adding chicken (expect true)", addItemUpdated("chicken"));
console.log(`TEST: Basket is now ${basket}`);
console.log("TEST: adding tomatoes (expect false)", addItemUpdated("tomatoes"));
