---
path: "/using-revealing-names"
date: "2017-07-12T17:12:33.962Z"
title: "Using Revealing Names"
featuredImage: "https://via.placeholder.com/175x175"
---

Names are essential in software. We name our variables, functions, arguments, and so on. We should be naming them like we would name our children and not just carelessly type them up. Here are some suggestions for writing better names.

#### Use Intention-Revealing Names

Names should reveal **intent**.

*Take this for example:*

```
var a; // Holds the answer to a problem
```

The ```a``` doesn't tell the user anything. It doesn't reveal the reason why that variable was created, and ultimately leaves the users that encounter this code confused.

*Try using:*

```
var answer;
var problemAnswer;
```

Using intention-revealing names will make it much easier for everyone to understand code.

*Lets try a more complicated example:*

```
var a = 0;
var b = [];

function c() {
  b.push(a + 1);
  a += 1;
}
```

Most of you can probably understand what this code does even if the names are confusing. ```var a``` holds the number 0 while ```var b``` holds an empty array. When ```function c()``` gets invoked it will add the number of ```var c``` and 1, and will be pushed to the array of ```var b```. ```var a``` will then be incremented by 1, so if the function gets invoked again, the number outcome will be higher than the previous by 1.

The problem here isn't the simplicity, but rather the ***implicity***. Your code should answer the questions that need to be answered if anyone looks at it. In this case:

* Why does ```var a``` hold a value of 0?
* Why is ```var b``` an empty array?
* Why is the value of ```var a``` incremented and pushed to the array?
* Why is the value of ```var a``` being incremented?

*intention-revealing names in practice:*

```
var currentNum = 0;
var numArray = [];

function addNumber() {
  numArray.push(currentNum + 1);
  currentNum += 1;
}
```

The simplicity of this code remains the same, but the *implicity* has been greatly improved. We can now understand the point and purpose of every piece of our code.

* ```var currentNum``` holds our current number.
* The intention of ```var numArray``` is to hold an array of numbers.
* When ```function addNumber()``` gets invoked, ```var currentNum``` gets incremented by 1 and pushed to the array to increase the number sequence.



*Stay hungry, Stay foolish.*

