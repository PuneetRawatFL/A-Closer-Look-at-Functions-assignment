console.log("A Closer Look at Functions");

//1
function greet(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`);
}

//2
// greet("Puneet"); //without second argument
// greet("Puneet", "Namaste"); //with second argument

//3
function greet(name, day, greeting = "Hello", quote = "Have a nice day") {
    console.log(`${greeting} ${name}, Today is ${day}. ${quote}`);
}
// greet("Puneet", "Monday", "Hi", "See you");
// greet("John", "Tuesday");

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

//4
function modifyPrimitive(num) {
    num += 5;
}

//5
function modifyObject(obj) {
    obj.name = "John";
}

//6
var n = 5;
var obj = {
    name: "Puneet",
    age: 23,
};
console.log("Before: ", n, obj);
modifyPrimitive(n);
modifyObject(obj);
console.log("After: ", n, obj); //only object gets modified

//7 - first class function
function volume() {
    return function area(a, b) {
        return a * b;
    };
}
var vol = volume();
console.log(vol(4, 5));

//8
function properties(a, b, c, callback) {
    console.log("Area: ", a * b);
    callback(a, b, c);
}
function pass(x, y, z) {
    console.log("Volume is: ", x * y * z);
}
properties(2, 3, 4, pass); //passing function to another function

//9
//function assigned to a variable
const add = function (x, y) {
    return console.log(x + y);
};
//function accepting function as argument
function action(callback, a, b) {
    callback(a, b);
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
console.log(sq(5));

//10
const numbers = [1, 2, 3, 4, 5];
function processArray(arr, process) {
    // const result = [];
    for (let i = 0; i < arr.length; i++) {
        process(arr[i]);
    }
}
function disp(a) {
    console.log("Current element: ", a);
}
processArray(numbers, disp);

//11
function processArrayAgain(arr, db, ev, od, sq) {
    const result1 = [];
    const result2 = [];
    const result3 = [];
    const result4 = [];
    for (let i = 0; i < arr.length; i++) {
        result1.push(db(arr[i]));
        result2.push(ev(arr[i]));
        result3.push(od(arr[i]));
        result4.push(sq(arr[i]));
    }
    console.log("Double elements: ", result1);
    console.log("Even elements: ", result2);
    console.log("Odd elements: ", result3);
    console.log("Sqaure of elements: ", result4);
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

//12
//calling function and passing functions as arguments
processArrayAgain(numbers, double, even, odd, square);

//13
//defining outer function
function outer(out) {
    //inner function returning multiplication
    return function inner(inn) {
        return out * inn;
    };
}

//14
var ot = outer(5); //assings value to 'out'
var output = ot(4); //assings value to 'inn'
console.log("Output is:", output);

//15
//using operation argument to filter out operation
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

//16
const person = {
    firstName: "Puneet",
    lastName: "Rawat",
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

//17
const person1 = {
    firstName: "John",
    lastName: "Doe",
};
person.fullName.call(person1);

//18
function abc(day, month, year) {
    console.log(`${day}-${month}-${year}`);
}
abc.apply(null, ["25", "November", "2024"]); //we pass null as first argument as call, apply and bind methods accept first argument as the object we point to

//19
//the difference between call and apply is how they accept arguments
//call method accpets individual arguments
abc.call(null, 25, "November", 2024);
//apply method accepts arguments in form of an array
abc.apply(null, ["25", "nov", "2024"]);

//20
const user = {
    name: "Puneet",
    age: 23,
    city: "Jaipur",
    zip: 302020,
    getDetails: function () {
        console.log(
            `${this.name} is ${this.age} years and is from ${this.city}, ${this.zip}`
        );
    },
};

//21
const user2 = {
    name: "Tom",
    age: 25,
    city: "Udaipur",
    zip: 402020,
};
var newDetails = user.getDetails.bind(user2);
newDetails();

//22
function printFullDetails(hometown, state) {
    console.log(hometown, state);
}
//pre-defining hometown
const onlyState = printFullDetails.bind(null, "Jaipur");
onlyState("Rajasthan");
onlyState("UP");

//23
//basic iife function
(function () {
    console.log("This is a basic iife function");
})();

//24
//iife to calculate average
(function (a, b, c) {
    let sum = a + b + c;
    let avg = sum / 3;
    console.log("Average is:", avg);
})(10, 20, 30);

//25
//with IIFE, we can define variables and functions that are only accessible within the scope of the IIFE, preventing any accidental interference or conflicts with other code in the global scope.
