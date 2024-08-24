// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      "numb": 1,
      "question": "What does Node.js use to handle asynchronous operations?",
      "answer": "Event loop",
      "options": [
        "Promises",
        "Event loop",
        "Callbacks",
        "Async/Await"
      ]
    },
    {
      "numb": 2,
      "question": "Which of the following is a valid TypeScript type?",
      "answer": "enum",
      "options": [
        "char",
        "enum",
        "float",
        "double"
      ]
    },
    {
      "numb": 3,
      "question": "Which method is used to parse JSON in JavaScript?",
      "answer": "JSON.parse()",
      "options": [
        "JSON.stringify()",
        "JSON.parse()",
        "parseJSON()",
        "parse()"
      ]
    },
    {
      "numb": 4,
      "question": "In Node.js, which core module is used for handling file paths?",
      "answer": "path",
      "options": [
        "fs",
        "http",
        "url",
        "path"
      ]
    },
    {
      "numb": 5,
      "question": "What is the purpose of 'use strict' in JavaScript?",
      "answer": "Enforces strict mode, which catches common coding errors",
      "options": [
        "Enforces strict mode, which catches common coding errors",
        "Converts code to ES6",
        "Compiles code",
        "Allows the use of undeclared variables"
      ]
    },
    {
      "numb": 6,
      "question": "Which keyword is used to define a variable in TypeScript that cannot be reassigned?",
      "answer": "const",
      "options": [
        "let",
        "var",
        "const",
        "static"
      ]
    },
    {
      "numb": 7,
      "question": "What is a callback function in JavaScript?",
      "answer": "A function passed as an argument to another function",
      "options": [
        "A function that calls itself",
        "A function that is called when an event occurs",
        "A function passed as an argument to another function",
        "A function that returns a promise"
      ]
    },
    {
      "numb": 8,
      "question": "Which of the following is a built-in module in Node.js?",
      "answer": "http",
      "options": [
        "express",
        "http",
        "axios",
        "nodemon"
      ]
    },
    {
      "numb": 9,
      "question": "In TypeScript, which feature allows you to define the shape of an object?",
      "answer": "Interface",
      "options": [
        "Module",
        "Interface",
        "Namespace",
        "Enum"
      ]
    },
    {
      "numb": 10,
      "question": "What does the 'this' keyword refer to in JavaScript?",
      "answer": "The object from which it was called",
      "options": [
        "The global object",
        "The object from which it was called",
        "The function itself",
        "The prototype of the function"
      ]
    },
    {
      "numb": 11,
      "question": "Which command is used to initialize a new Node.js project?",
      "answer": "npm init",
      "options": [
        "node init",
        "npm init",
        "npm start",
        "node start"
      ]
    },
    {
      "numb": 12,
      "question": "Which of the following is a TypeScript feature not found in JavaScript?",
      "answer": "Static types",
      "options": [
        "Promises",
        "Async/Await",
        "Static types",
        "Closures"
      ]
    },
    {
      "numb": 13,
      "question": "Which method is used to create an instance of a class in TypeScript?",
      "answer": "new",
      "options": [
        "create",
        "new",
        "instantiate",
        "make"
      ]
    },
    {
      "numb": 14,
      "question": "What is the purpose of the 'package.json' file in a Node.js project?",
      "answer": "To define project dependencies and scripts",
      "options": [
        "To define project dependencies and scripts",
        "To store environment variables",
        "To configure the server",
        "To list available routes"
      ]
    },
    {
      "numb": 15,
      "question": "Which of the following methods is used to add properties to an object in JavaScript?",
      "answer": "Object.assign()",
      "options": [
        "Object.add()",
        "Object.create()",
        "Object.assign()",
        "Object.append()"
      ]
    },
    {
      "numb": 16,
      "question": "In TypeScript, what does the 'never' type represent?",
      "answer": "A type that represents values that never occur",
      "options": [
        "A type that represents values that never occur",
        "A type that represents null or undefined",
        "A type that represents any value",
        "A type that represents an unknown value"
      ]
    },
    {
      "numb": 17,
      "question": "Which HTTP method is typically used to retrieve data from a server?",
      "answer": "GET",
      "options": [
        "POST",
        "PUT",
        "DELETE",
        "GET"
      ]
    },
    {
      "numb": 18,
      "question": "What does 'npm' stand for?",
      "answer": "Node Package Manager",
      "options": [
        "Node Program Manager",
        "Node Package Manager",
        "Node Project Manager",
        "Node Programming Module"
      ]
    },
    {
      "numb": 19,
      "question": "In JavaScript, what does the '===' operator do?",
      "answer": "Compares both value and type",
      "options": [
        "Assigns a value to a variable",
        "Compares both value and type",
        "Compares value only",
        "Concatenates strings"
      ]
    },
    {
      "numb": 20,
      "question": "Which keyword in TypeScript is used to define a class?",
      "answer": "class",
      "options": [
        "class",
        "interface",
        "object",
        "constructor"
      ]
    },
    {
      "numb": 21,
      "question": "What is a promise in JavaScript?",
      "answer": "An object that represents the eventual completion (or failure) of an asynchronous operation",
      "options": [
        "An object that represents the eventual completion (or failure) of an asynchronous operation",
        "A function that is called when an event occurs",
        "A method to handle exceptions",
        "A way to write synchronous code"
      ]
    },
    {
      "numb": 22,
      "question": "Which of the following is used to handle events in Node.js?",
      "answer": "EventEmitter",
      "options": [
        "EventEmitter",
        "EventListener",
        "EventManager",
        "EventHandler"
      ]
    },
    {
      "numb": 23,
      "question": "In TypeScript, which of the following is true about interfaces?",
      "answer": "They can define contracts for classes and objects",
      "options": [
        "They are only used for type checking",
        "They are used to initialize classes",
        "They can define contracts for classes and objects",
        "They are used to create enums"
      ]
    },
    {
      "numb": 24,
      "question": "What is the output of 'typeof null' in JavaScript?",
      "answer": "object",
      "options": [
        "null",
        "undefined",
        "object",
        "string"
      ]
    },
    {
      "numb": 25,
      "question": "Which Node.js module is used to create a web server?",
      "answer": "http",
      "options": [
        "url",
        "fs",
        "http",
        "net"
      ]
    },
    {
      "numb": 26,
      "question": "Which of the following TypeScript features allows you to create a new type based on another?",
      "answer": "Type Aliases",
      "options": [
        "Type Aliases",
        "Type Inheritance",
        "Type Casting",
        "Type Augmentation"
      ]
    },
    {
      "numb": 27,
      "question": "In JavaScript, what does the 'bind()' method do?",
      "answer": "Creates a new function that, when called, has its 'this' keyword set to the provided value",
      "options": [
        "Binds two variables together",
        "Creates a new function that, when called, has its 'this' keyword set to the provided value",
        "Executes a function immediately",
        "Binds an event to a function"
      ]
    },
    {
      "numb": 28,
      "question": "What does the 'exports' object do in Node.js?",
      "answer": "It is used to export functions, objects, or primitives from a given file or module",
      "options": [
        "It is used to import functions from another module",
        "It is used to export functions, objects, or primitives from a given file or module",
        "It is used to define routes in an Express application",
        "It is used to handle HTTP requests"
      ]
    },
    {
      "numb": 29,
      "question": "Which TypeScript feature allows for creating generic functions and classes?",
      "answer": "Generics",
      "options": [
        "Interfaces",
        "Generics",
        "Enums",
        "Type Guards"
      ]
    },
    {
      "numb": 30,
      "question": "Which of the following is a higher-order function in JavaScript?",
      "answer": "map()",
      "options": [
        "map()",
        "push()",
        "split()",
        "toString()"
      ]
    },
    {
      "numb": 31,
      "question": "Which command is used to install a package in a Node.js project?",
      "answer": "npm install",
      "options": [
        "npm get",
        "npm add",
        "npm install",
        "npm update"
      ]
    },
    {
      "numb": 32,
      "question": "What is the 'any' type in TypeScript?",
      "answer": "A type that allows any type of value to be assigned",
      "options": [
        "A type that is the parent of all other types",
        "A type that allows any type of value to be assigned",
        "A type that is only used for string values",
        "A type that is used for numeric values"
      ]
    },
    {
      "numb": 33,
      "question": "In JavaScript, what does the 'map()' function return?",
      "answer": "A new array with the results of calling a function for every array element",
      "options": [
        "The first element that matches a condition",
        "A new array with the results of calling a function for every array element",
        "The last element in the array",
        "The sum of all elements in the array"
      ]
    },
    {
      "numb": 34,
      "question": "Which built-in method can be used to convert an object to a JSON string in JavaScript?",
      "answer": "JSON.stringify()",
      "options": [
        "JSON.stringify()",
        "Object.toString()",
        "Object.toJSON()",
        "JSON.convert()"
      ]
    },
    {
      "numb": 35,
      "question": "In Node.js, which method is used to read the content of a file asynchronously?",
      "answer": "fs.readFile()",
      "options": [
        "fs.read()",
        "fs.readFile()",
        "fs.getFile()",
        "fs.readSync()"
      ]
    },
    {
      "numb": 36,
      "question": "Which of the following is a way to enforce strict null checks in TypeScript?",
      "answer": "Enable 'strictNullChecks' in tsconfig.json",
      "options": [
        "Use 'non-null assertion' operator",
        "Enable 'strictNullChecks' in tsconfig.json",
        "Avoid 'undefined' in code",
        "Use 'strict mode' in JavaScript"
      ]
    },
    {
      "numb": 37,
      "question": "What is the purpose of a 'constructor' function in a TypeScript class?",
      "answer": "To initialize the properties of the class",
      "options": [
        "To create new methods for the class",
        "To initialize the properties of the class",
        "To define the class type",
        "To handle exceptions"
      ]
    },
    {
      "numb": 38,
      "question": "What is the output of 'typeof NaN' in JavaScript?",
      "answer": "number",
      "options": [
        "NaN",
        "undefined",
        "number",
        "object"
      ]
    },
    {
      "numb": 39,
      "question": "Which of the following is a core module in Node.js?",
      "answer": "fs",
      "options": [
        "express",
        "lodash",
        "axios",
        "fs"
      ]
    },
    {
      "numb": 40,
      "question": "What is TypeScript?",
      "answer": "A typed superset of JavaScript that compiles to plain JavaScript",
      "options": [
        "A typed superset of JavaScript that compiles to plain JavaScript",
        "A framework for building server-side applications",
        "A library for managing state in React",
        "A tool for bundling JavaScript files"
      ]
    },
    {
      "numb": 41,
      "question": "Which of the following is NOT a JavaScript data type?",
      "answer": "Character",
      "options": [
        "Undefined",
        "Boolean",
        "Object",
        "Character"
      ]
    },
    {
      "numb": 42,
      "question": "In Node.js, what is the purpose of 'process.env'?",
      "answer": "To access environment variables",
      "options": [
        "To manage file streams",
        "To create child processes",
        "To access environment variables",
        "To handle HTTP requests"
      ]
    },
    {
      "numb": 43,
      "question": "Which TypeScript utility type creates a type by picking properties from another type?",
      "answer": "Pick",
      "options": [
        "Omit",
        "Pick",
        "Exclude",
        "Extract"
      ]
    },
    {
      "numb": 44,
      "question": "What is the purpose of 'async' and 'await' in JavaScript?",
      "answer": "To work with promises in a synchronous-like manner",
      "options": [
        "To make code run faster",
        "To handle errors in JavaScript",
        "To work with promises in a synchronous-like manner",
        "To create event listeners"
      ]
    },
    {
      "numb": 45,
      "question": "Which method can be used to append an element to the end of an array in JavaScript?",
      "answer": "push()",
      "options": [
        "append()",
        "concat()",
        "push()",
        "add()"
      ]
    },
    {
      "numb": 46,
      "question": "In Node.js, what does 'require()' do?",
      "answer": "Imports a module",
      "options": [
        "Creates a new module",
        "Imports a module",
        "Exports a module",
        "Removes a module"
      ]
    },
    {
      "numb": 47,
      "question": "Which TypeScript feature allows for defining default values for parameters?",
      "answer": "Default parameters",
      "options": [
        "Default parameters",
        "Optional parameters",
        "Rest parameters",
        "Constructor parameters"
      ]
    },
    {
      "numb": 48,
      "question": "Which of the following is NOT a valid way to declare a variable in JavaScript?",
      "answer": "let const x = 10;",
      "options": [
        "let x = 10;",
        "var x = 10;",
        "const x = 10;",
        "let const x = 10;"
      ]
    },
    {
      "numb": 49,
      "question": "What is the output of 'null === undefined' in JavaScript?",
      "answer": "false",
      "options": [
        "true",
        "false",
        "null",
        "undefined"
      ]
    },
    {
      "numb": 50,
      "question": "Which command is used to compile TypeScript files?",
      "answer": "tsc",
      "options": [
        "node",
        "tsc",
        "npm",
        "tsrun"
      ]
    }
  ]
  