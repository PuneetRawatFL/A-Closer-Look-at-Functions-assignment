console.log("A Closer Look at Functions");

//1 - Write a function `greet` that takes two parameters: `name` and `greeting`, where `greeting` has a default value of `"Hello"`. The function should log a greeting message.
function greet1(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`);
}

//2 - Call the function with and without the second argument to observe the effect of default parameters.
greet1("Puneet"); //without second argument
greet1("Puneet", "Namaste"); //with second argument

//3 - Modify the function to include multiple default parameters and test various combinations of provided and default values.
function greet2(name, day, greeting = "Hello", quote = "Have a nice day") {
    console.log(`${greeting} ${name}, Today is ${day}. ${quote}`);
}
greet2("Puneet", "Monday", "Hi", "See you");
greet2("John", "Tuesday");

//if we want to skip passing values to a middle parameter
//we use destructing
function greet({
    name,
    greeting = "Hello",
    day,
    quote = "Have a nice day",
} = {}) {
    console.log(`${greeting} ${name}, Today is ${day}. ${quote}`);
}
// greet({ name: "Puneet", day: "Monday" });

//4 - Create a function `modifyPrimitive` that takes a primitive value (e.g., a number) as an argument and attempts to change its value.
function modifyPrimitive(num) {
    num += 5;
}

//5 - Create another function `modifyObject` that takes an object as an argument and modifies one of its properties.
function modifyObject(obj) {
    obj.name = "John";
}

//6 - Call both functions with variables and log the results before and after the function calls to understand the difference between value and reference passing.
//defining varialbe and object
var n = 5;
var obj = {
    name: "Puneet",
    age: 23,
};
// logging before calling functions
console.log("Before: ", n, obj);
//calling functions
modifyPrimitive(n);
modifyObject(obj);
//logging after calling functions
console.log("After: ", n, obj); //only object gets modified

//7 - Write a function `firstClass` that returns another function.
function firstClass() {
    return function area(a, b) {
        return a * b;
    };
}
var prop = firstClass(); //change name - done
console.log(prop(4, 5));

//8 - Write a function `higherOrder` that takes a function as an argument and calls it.
function higherOrder(a, b, c, callback) {
    console.log("Area: ", a * b);
    callback(a, b, c); //calling argument function
}
//creating function to pass as argument
function pass(x, y, z) {
    console.log("Volume is: ", x * y * z);
}
higherOrder(2, 3, 4, pass); //passing function to high order function

//9 - Create an example where a function is assigned to a variable, passed as an argument to another function, and returned from a function to demonstrate first-class and higher-order functions in action.

//function assigned to a variable
const add = function (x, y) {
    return console.log(x + y);
};
//function accepting function as argument
function action(callback, a, b) {
    callback(a, b); //calling argument function
}
//function returning function
function getSquare(a) {
    return function square(a) {
        return a * a;
    };
}
//function passed as argument
action(add, 2, 3);
var sq = getSquare();
console.log(sq(5)); //logging return value

//10 - Create an array of numbers and write a function `processArray` that takes an array and a callback function as arguments. The callback function should define how each element of the array is processed.

//creating array
const numbers = [1, 2, 3, 4, 5];
//creating processArray
function processArray(arr, process) {
    for (let i = 0; i < arr.length; i++) {
        process(arr[i]); //calling argument function
    }
}
//display function
function disp(a) {
    console.log("Current element: ", a);
}
//passing array and function to processArray
processArray(numbers, disp);

//11 - Implement `processArray` with different callback functions (e.g., to double the numbers, filter even numbers, etc.)
function processArrayAgain(arr, db, ev, od, sq) {
    //creating result array for each callback function
    const result1 = [];
    const result2 = [];
    const result3 = [];
    const result4 = [];
    for (let i = 0; i < arr.length; i++) {
        result1.push(db(arr[i]));
        result2.push(sq(arr[i]));
        //add condition to filter even/odd - done
        var e = ev(arr[i]);
        if (typeof e == "number") {
            result3.push(e);
        }
        var o = od(arr[i]);
        if (typeof o == "number") {
            result4.push(o);
        }
    }
    console.log("Double elements: ", result1);
    console.log("Sqaure of elements: ", result2);
    console.log("Even elements: ", result3);
    console.log("Odd elements: ", result4);
}
//function to double element
function double(a) {
    return a * 2;
}
//function to filter even element
function even(a) {
    if (a % 2 == 0) {
        return a;
    }
    return "";
}
//function to filter odd element
function odd(a) {
    if (a % 2 != 0) {
        return a;
    }
    return "";
}
//function to square element
function square(a) {
    return a * a;
}

//12 - Demonstrate the flexibility of callback functions by passing different functions to `processArray`.

//calling function and passing different functions as arguments
processArrayAgain(numbers, double, even, odd, square);

//13 - Write a function `outer` that takes one argument and returns another function `inner` that also takes one argument. The `inner` function should use both arguments to perform a calculation (e.g., addition, multiplication).

//defining outer function
function outer(out) {
    //inner function returning multiplication
    return function inner(inn) {
        return out * inn;
    };
}

//14 - Call `outer` and store the returned function in a variable. Then, call this variable as a function and log the result.

var ot = outer(5); //assings value to 'out'
var output = ot(4); //assings value to 'inn'
console.log("Output is:", output);

//15 - Experiment with different types of functions returned by `outer` (e.g., mathematical operations, string manipulations).

//using operation parameter to filter out different operations
function outerAgain(operation) {
    //add function
    if (operation == "add") {
        return function (a, b) {
            return a + b;
        };
    }
    //multiplication function
    if (operation == "mul") {
        return function (a, b) {
            return a * b;
        };
    }
    //convert to uppercase
    if (operation == "uppercase") {
        return function (str) {
            return str.toUpperCase();
        };
    }
    //convert to lowercase
    if (operation == "lowercase") {
        return function (str) {
            return str.toLowerCase();
        };
    }
    //concat strings
    if (operation == "concate") {
        return function (str1, str2) {
            return str1 + str2;
        };
    }
}
//passing and calling function for addition
var addition = outerAgain("add");
console.log("Sum:", addition(10, 20));

//passing and calling function for multiplication
var multi = outerAgain("mul");
console.log("Multiplication:", multi(10, 20));

//passing and calling function for string manipulation - uppercase
var upperCase = outerAgain("uppercase");
console.log("Uppercase:", upperCase("this is written in lower case"));

//passing and calling function for string manipulation - lowercase
var lowerCase = outerAgain("lowercase");
console.log("Lowercase:", lowerCase("THIS IS WRITTEN IN UPPERCASE"));

//passing and calling function for string manipulation - concat two strings
var concat = outerAgain("concate");
console.log(
    "Conacatenate:",
    concat("String1 says hello. ", "String2 says bye")
);

//16 - Create an object `person` with properties `firstName` and `lastName`, and a method `fullName` that logs the full name.

const person = {
    firstName: "Puneet",
    lastName: "Rawat",
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

//17 - Use the `call` method to invoke `fullName` on another object with similar properties.

//creating another object 'person1'
const person1 = {
    firstName: "John",
    lastName: "Doe",
};
//using call method on another object
person.fullName.call(person1);

//18 - Create a function that accepts multiple arguments and use the `apply` method to pass an array of arguments to the function.

function abc(day, month, year) {
    console.log(`${day}-${month}-${year}`);
}
//creating array
var arr1 = ["25", "November", "2024"];
//passing array with 'apply'
abc.apply(null, arr1);
//passing array expression
abc.apply(null, ["25", "November", "2024"]);

//we pass null as first argument as call, apply and bind methods accept first argument as the object we point to

//19 - Compare the use cases of `call` and `apply` in different scenarios.

//the difference between call and apply is how they accept arguments -
//call method accpets individual arguments
abc.call(null, 25, "November", 2024);

//apply method accepts arguments in form of an array
abc.apply(null, ["25", "nov", "2024"]);

//20 - Create an object `user` with a method `getDetails` that logs some details about the user.

//creating object user
const user = {
    name: "Puneet",
    age: 23,
    city: "Jaipur",
    zip: 302020,
    //function to log details
    getDetails: function () {
        console.log(
            `${this.name} is ${this.age} years and is from ${this.city}, ${this.zip}`
        );
    },
};

//21 - Use the `bind` method to create a new function with `this` bound to `user`.

//creating another user
const user2 = {
    name: "Tom",
    age: 25,
    city: "Udaipur",
    zip: 402020,
};
//using bind to create new function 'newDetails'
var newDetails = user.getDetails.bind(user2);
newDetails();

//22 - Demonstrate how `bind` can be used to create partially applied functions by pre-filling some arguments

//creating function with multiple parameters
function printFullDetails(hometown, state) {
    console.log(hometown, state);
}
//pre-defining hometown parameter
const onlyState = printFullDetails.bind(null, "Jaipur");

//passing value only for state parameter
onlyState("Rajasthan");
onlyState("UP");

//23 - Write a basic IIFE that logs a message to the console.

//basic iife function
(function () {
    console.log("This is a basic iife function");
})();

//24 - Create a more complex IIFE that accepts parameters, performs some operations, and logs the result.

//iife to calculate average
(function (a, b, c) {
    let sum = a + b + c;
    let avg = sum / 3;
    console.log("Average is:", avg);
})(10, 20, 30);

// var sum = 50;
// (function (a, b, c) {
//     sum = a + b + c;
//     let avg = sum / 3;
//     console.log("Average is:", avg);
// })(10, 20, 30);
// console.log(sum);

//25
//with IIFE, we can define variables and functions that are only accessible within the scope of the IIFE, preventing any accidental interference or conflicts with other code in the global scope.
