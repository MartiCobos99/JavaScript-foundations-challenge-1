/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

/* RESPONSE */

// for even numbers
let number = 10;
while (number <= 40) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}

// for odd numbers
let number1 = 10;
while (number1 <= 40) {
  if (number1 % 2 !== 0) {
    console.log(number1);
  }
  number1++;
}
