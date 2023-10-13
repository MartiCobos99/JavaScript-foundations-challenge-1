# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is a widely utilized programming language in web development, playing a key role in enhancing interactivity and dynamism on web pages.
```

## About values

### What is a primitive value?

```
A primitive value in programming denotes a fundamental data type lacking object-like properties and methods.
```

### Which are primitive values? Explain them with at least one example for primitive.

```
Primitive values are essential data types in programming, embodying straightforward data and devoid of object-like characteristics.

Number: Signifies numerical values, like 42 or 3.14.
String: Denotes sequences of characters, for example, "Hello, world".
Boolean: Represents true or false values, such as true.
Null: Stands for the absence of a value, like null.
Undefined: Refers to variables lacking assigned values, similar to undefined.
Symbol: Represents unique and unchangeable values, like const symbol = Symbol("description").
```

## About variables

### What is a variable in JS?

```
In JavaScript, a variable serves as a receptacle for holding data.
Example: const age = 30;
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
In JavaScript, you have three distinct keywords for defining variables: var, let, and const.

var: Initially the standard method for declaring variables in JavaScript. Variables declared with var possess function-level scope, extending beyond the block in which they're defined.

let: Introduced in ECMAScript 6 (ES6), let enables variable declaration with block-level scope.

const: Also introduced in ES6, const is employed to define constants with block-level scope. Variables declared using const cannot be altered after their initialization.
```

### Which are the most used var naming conventions in JS?

```
In JavaScript, various naming conventions exist for variables, and their adoption can vary based on the coding style or guidelines adhered to by a developer or team.

Camel Case: This convention is extensively employed in JavaScript, particularly for variable names.

Snake Case: Another naming convention, snake case, involves separating words with underscores, and all letters are usually in lowercase.
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
In JavaScript, comparison operators are used to compare values and return a Boolean result (true or false) based on the comparison.

5 == "5"; // true (because the string "5" is converted to a number for comparison)
5 != 10; // true
5 === 5; // true
5 === "5"; // false (because the types are different)
5 !== 10; // true
5 !== "5"; // true (because the types are different)
10 > 5; // true
5 < 10; // true
10 >= 10; // true
5 <= 10; // true
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
true && true; // Evaluates to true

true || true; // Evaluates to true

!true; // Evaluates to false
```
