const data = [23, 19, 34, 45];

/// Destructuring an array
const [x, y, z] = data;
console.log(x, y, z); // 23 19 34

/// Destructuring an object
const person = {
  name: 'Alice',
  age: 30,
  city: 'Wonderland'
};

const { name, age } = person;
console.log(name, age); // Alice 30

/// Nested destructuring
const nestedData = {
  title: 'Book',
  author: {
    firstName: 'John',
    lastName: 'Doe'
  },
  year: [2020, 2021]
};

const { title, author: { firstName } } = nestedData;
console.log(title, firstName); // Book John
const { year: [firstYear] } = nestedData;
console.log(firstYear); // 2020

/// Default values
const [a = 1, b = 2, c = 3] = [10];
console.log(a, b, c); // 10 2 3

const { d = 4, e = 5 } = { d: 10 };
console.log(d, e); // 10 5

/// Renaming variables
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // Alice 30

const [first, second] = data;
console.log(first, second); // 23 19

/// Skipping elements
const [firstElement, , thirdElement] = data;
console.log(firstElement, thirdElement); // 23 34

/// Rest pattern
const [head, ...tail] = data;
console.log(head); // 23
console.log(tail); // [19, 34, 45]

const { city, ...rest } = person;
console.log(city); // Wonderland
console.log(rest); // { name: 'Alice', age: 30 }

/// Function parameter destructuring
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(person); // Name: Alice, Age: 30

function sum([a, b, c]) {
  return a + b + c;
}

console.log(sum(data)); // 76
