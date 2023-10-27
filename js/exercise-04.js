/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/


//RESPONSE:

// This line checks if the expression on the left (true) and the expression on the right (console.log("moo")) are both true. 
// Since both are true, it prints "moo" to the console.
true && console.log("moo");

// Similar to the previous line, it checks if both the left and right expressions are true. 
// Since both are true, it prints "moo" to the console again.
true && console.log("moo");

// This line uses the logical AND (&&) operator. 
// Since the left expression is false, it doesn't evaluate the right expression at all (short-circuiting). 
// Nothing is printed to the console.
false && console.log("moo moo?");

// This line uses the logical OR (||) operator. 
// It checks if the expression on the left (true) is true. 
// Since it is true, it doesn't evaluate the right expression. 
// Therefore, "hello friend" is not printed to the console.
true || console.log("hello friend");

// Here, the left expression is false, so it moves on to the right expression. 
// It evaluates the right expression and prints "bye friend" to the console because the left expression is false, 
// and the OR operator evaluates the right expression in this case.
false || console.log("bye friend");
