let age = "15"; // this works fine in js but not in ts, in ts age variable will have a string type and we cannot assign a number to a string type in ts. but in js age is just a variable it can have any type.
age = Number(age) + 5;
console.log(age);
