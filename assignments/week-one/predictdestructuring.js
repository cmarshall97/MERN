//.......................//
//PROBLEM 1 - 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)//PREDICTION - "Tesla"
console.log(otherRandomCar)//PREDICTION - "Mercedes"

//......................//
//PROBLEM 2 - 
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); //PREDICTION =Reference Error because name is not defined
console.log(otherName);

//.........................//
//PROBLEM 3 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //PREDICTION- 12345
console.log(hashedPassword); //PREDICTION - undefined

//.........................//
//PROBLEM 4 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);//PREDICTION = false
console.log(first == third);//PREDICTION =true

//.......................//
//PROBLEM 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);//PREDICTION -'value'
console.log(secondKey);//PREDICTION -[1,5,1,8,3,3]
console.log(secondKey[0]);//PREDICTION - 1
console.log(willThisWork); //PREDICTION-5
