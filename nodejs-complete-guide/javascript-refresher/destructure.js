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
  }
};

const { title, author: { firstName } } = nestedData;
console.log(title, firstName); // Book John
