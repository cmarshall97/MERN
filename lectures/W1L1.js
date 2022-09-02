//variables hold data


//data types
//strings
//numbers or integers
//boolean values
var myVar = "This is a string 3355nngn439734"
var myNum = 10
var myBoo = true

//data structures
//arrays and objects
//*arrays are different because they are accessed using indexes*

//this is an array
var myArr = [10,"string",false,10,39]

//built-in array methods
.push() //adds a value to the end of array
.pop()
.shift()
.unshift()

myArr.push(95)
console.log(myArr[1])

//this is an object
//holds key-value pairs

var myObj = {
    firstName:'Cool',
    lastName:'Dude',
    email:'cooldude@gmail.com'
}

console.log(myObj.firstName)
console.log(myObj['lastName']) //also works but dot notation is better

//ES5 Syntax
//var

//ES6 Syntax
//const & let

let myNum = 20 //more flexibile can change
myNum = 50
console.log(myNum)
//allows the variable to change to 50

const myNum2 = 30 //immutable - unchangeable

myNum2 = 50
console.log(myNum2)
//gives a type error as const already was assigned a variable

//objects can change const
const myObj2 = {
    firstName: "Cool",
    lastName: "Dude"
}
myObj2.firstName = 'Not Cool'
console.log(myObj2.firstName) //this will change the value


//ES5 function definition
function myFunct(param1,param2){
    //your code here
}
myFunct(2,5)

//ES6 Arrow Functions

const myArrowFunction = (param1, param2) => param1 *param2 //implicit return for one line of code

const myArrowFunction2 = (param1, param2) =>{
    console.log(param1,param2)
    return param1 * param2
}

//destructure and object
var myObj = {
    firstName:'Cool',
    lastName:'Dude',
    email:'cooldude@gmail.com'
}

const{firstName, email} = myObj
//we have an object called myObj and we are pulling those values out and assigning them the variables on the left

//destructure array
var myArr = [10,"string",false,10,39]

const [var1, var2, var3] = myArr
console.log(var1,var2,var3)

//spread operator

var myObj = {
    firstName:'Cool',
    lastName:'Dude',
    email:'cooldude@gmail.com'
}

const copy = {...myObj}

console.log(copy)