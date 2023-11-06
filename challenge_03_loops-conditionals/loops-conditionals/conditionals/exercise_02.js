/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/

/* RESPONSE */

const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3 && age < 13) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13 && age < 18) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}

/* 
The bug is due to the order and overlapping conditions. 
The "age >= 3" condition covers all ages 3 and above, so the subsequent conditions are never reached. 
Reorder the conditions from most specific to most general to fix the issue.
To fix this and get the desired output, you should use if-else if-else structure instead of multiple independent if statements.
*/
