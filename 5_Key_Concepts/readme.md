# Introduction

- Understand data types in JavaScript.
- Explain functions as first class citizens.
- Explain the role of closure scope in state management.
- Describe the prototypal nature of all JavaScript-based inheritance.

# Data Types

Javascript has 7 Primitive types

- Null: `null`
- Undefined: `undefined`

## Notes
OBS: the `null` primitive is used to describe absence of an object, and `undefined` is the absense of a defined value.
Any variable initialized without a value will be undefined:

Read this: ./null_and_undefined.js

- Number: `1, 1.5, -1e4, NaN`
- BigInt: `1n, 9007199254740993n`

## Notes

The Number type is double-precision floating-point format. 
It allows both integers and decimals but has an integer range of -253-1 to 253-1. The BigInt type has no upper/lower limit on integers.

## Extra
Number is an object that represents a number of any kind. 
All JavaScript numbers are 64-bit floating-point numbers

PS:

The term "safe" refers to the fact that any number greater than 
the one mentioned above cannot be assumed to be accurately and appropriately represented. 
This restriction is imposed by the doubleprecision 64-bit number format used by Javascript rather than Typescript.
It is essential to use the MAX SAFE INTEGER and MIN SAFE INTEGER because any integer 
higher than these two is not assured to be represented accurately and correctly.


Read `./number.js`

Sources: 

https://www.tutorialspoint.com/what-is-javascript-s-highest-integer-value-that-a-number-can-go-to-without-losing-precision

https://en.wikipedia.org/wiki/Double-precision_floating-point_format

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER

https://en.wikipedia.org/wiki/IEEE_754


## Extra
What does 1e-4 stand for?

1e-4 in decimal form is equal 0.0001

Source:

https://calculator.name/scientific-notation-to-decimal/1e-4



- String: `'str', "str",` `´str ${var}´`
- Boolean: `true, false`
- Symbol: `Symbol('description'), Symbol.for('namespace')`

# Symbols

You can find some assertion in Symbols.js and understand 

# Functions

Functions are first class citizens in JavaScript. 
A function is an object, and therefore a value that can be used like any other value.

I Highlight 2 interest topic here

## Call method
Functions have a call method that can be used to set their this context

Examples in functions.js

## Bind method
Functions have a bind method that can be used to create a reference of function setting a context

Examples in functions.js


# Prototypal Inheritance (Functional)

There are many approaches and variations to creating a prototype chain in JavaScript but we will explore three common approaches: 


The functional approach to creating prototype chains is to use Object.create

functional
Examples in: prototypal_inheritance_functional.js

constructor functions
Examples in: prototypal_inheritance_constructor_functions.js

# Extra

### I Need this note for future

In JavaScript runtimes that support EcmaScript 5+ the Object.create function could be used to the same effect:

```javascript
function Dog (name) {
  Wolf.call(this, name + ' the dog')
}

Dog.prototype = Object.create(Wolf.prototype)

Dog.prototype.woof = function () {
  console.log(this.name + ': woof')
}
```

Node.js has a utility function: util.inherits that is often used in code bases using constructor functions:

```javascript
const util = require('util')

function Dog (name) {
  Wolf.call(this, name + ' the dog')
}

Dog.prototype.woof = function () {
  console.log(this.name + ': woof')
}

util.inherits(Dog, Wolf)
```

In contemporary Node.js, util.inherits uses the EcmaScript 2015 (ES6) method Object.setPrototypeOf under the hood. It's essentially executing the following:

Object.setPrototypeOf(Dog.prototype, Wolf.prototype)

This explicitly sets the prototype of Dog.prototype to Wolf.prototype, discarding whatever previous prototype it had.


class-syntax constructors
Examples in: prototypal_inheritance_class_syntax_constructors.js

# Closures

When a function is created, an invisible object is also created, this is known as the closure scope. Parameters and variables created in the function are stored on this invisible object.

examples in closures.js

## Extra

This note is very important

The advantage of using closure scope to compose objects is it eliminates the complexity of prototypes, context (this) and the need to call a function with new – which when omitted can have unintended consequences. The downside is that where a prototype method is shared between multiple instances, an approach using closure scope requires that internal functions are created per instance. However, JavaScript engines use increasingly sophisticated optimization techniques internally, it's only important to be fast enough for any given use case and ergonomics and maintainability should take precedence over every changing performance characteristics in JavaScript engines. Therefore it's recommended to use function composition over prototypal inheritance and optimize at a later point if required


In JavaScript, there are two common ways to achieve code reuse and modularity: function composition and prototypal inheritance.

Function composition involves combining small, independent functions to create larger, more complex functions. This allows you to build functionality step-by-step, and the resulting code is often more modular and easier to test and debug.

Prototypal inheritance, on the other hand, involves creating objects that inherit properties and methods from a parent object. This can be useful for creating complex objects with shared functionality, but can also make code harder to understand and modify, particularly when inheritance chains become long and complicated.

The statement "it's recommended to use function composition over prototypal inheritance and optimize at a later point if required" suggests that, when building a new system, it is generally better to start with function composition and avoid prototypal inheritance unless it is absolutely necessary. Function composition tends to lead to more modular, maintainable code, which is easier to reason about and less prone to unexpected bugs.

However, if performance becomes a concern or if there are specific use cases where prototypal inheritance would be particularly useful, it can be optimized or added later in the development process. This allows you to balance the benefits of modularity and ease of maintenance with the need for speed and complexity.



