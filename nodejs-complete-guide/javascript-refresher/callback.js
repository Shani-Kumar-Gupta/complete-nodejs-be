// Callbacks are used to handle asynchronous operations in JavaScript.
// A callback is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.
setTimeout(() => {
  console.log('Timer is done!');
}, 2000);

const getData = (callback) => {
  setTimeout(() => {
    callback('Here is your data');
  }, 2000);
};

getData((data) => {
  console.log(data); // Here is your data
});