

function compare() {
const array1 = [
  { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
  { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } },
];

const array2 = [
  { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
  { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } },
];

  return JSON.stringify(array1) === JSON.stringify(array2);
}

// Example usage
console.log(compare());
