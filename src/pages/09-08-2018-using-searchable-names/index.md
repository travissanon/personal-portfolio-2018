---
path: "/using-searchable-names"
date: "2017-07-12T17:12:33.962Z"
title: "Using Searchable Names"
featuredImage: "https://via.placeholder.com/175x175"
---

Don't use single letters or numbers as names.

It's easy to search up ```listOfNames```, but the letter ```e``` would prove otherwise. Same goes with numbers.

If you use the search feature on your text editor to locate ```listOfNames```, it would be quite simple to locate because its most likely the only name in the file.

On the other hand, if you lookup ```e```, your search would result in numerous targeted letters scattered across the file. It could find letter ```e``` from variable names, function names, local functions with ```e``` as the parameter name, object methods, and so on.

*Take this code for example:*
```
var listOfNames = [Jimmy, Ethan, Justine, Dylan];
var e = [Johnny, Jean, Sam, Eddie];

function joinNames(a, b) {
  for(var i = 0; i < a.length; i++){
    console.log(a[i] + b[i]);
  }
}

joinNames(listOfNames, e);
```

The code here is a bit redundant, but bear with me.

Take a look at the code and try to locate the number of ```listOfNames```. Now try to locate the number of ```e```.

As you can tell, there are much more of the letter ```e```. Not only do we locate the name of the variable we are looking for, we also locate a ton of redundant "names" that we did not intend to look up.

*Stay hungry, stay foolish.*
