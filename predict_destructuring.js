
//This is an object
// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     createdAt: 1543945177623
// };

// //This is an array
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// // Assume we want email from person and the first animal as standalone variables. Before ES6 that might look like this:
// // BEFORE ES6
// var email = person.email;
// var firstAnimal = animals[0];

// // Let's do that again, but with destructuring assignment:
// // AFTER ES6
// const { email } = person;
// const [firstAnimal] = animals;
// console.log(email);
// // => bob@marley.com
// console.log(firstAnimal);
// // => horse


//--------Practice Assignment------------
//--------Predict Destructuring----------
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)
//I think it will first console log the array "cars" by creating a variable called randomCar and passing in "cars"
//Next I believe it will console log the same array of "cars" as well as the array cars again
//I got it so wrong... The first console log is basically the zero index and the second console log is the zero index 
//as well as the first index so basically instead of saying "at a certain index[0]" its just giving it a variable...


// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // console.log(name);
// console.log(otherName);

//I believe that the first console log will come out as undefined because "name" doesn't exist in the second const "employee"
//I think that the second console log will say otherName
//I was wrong line 51 broke the whole entire code and did not run it at all.
//In the second const all its basically doing is trying to pull information from the original const "employee" and its trying pull otherName


// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

//First it will console log the password because of the console log (password)
//Then it will console log undefined because hashed password does not exist in the password object
//I was right!

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

//First I believe it will be false becasue it is comparing 2 to 5
//The second is comparing 2 to 2 and it will be true 


// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);
//The first console log will print the string "value"
//The second console log will print the string "value"
//The third console log will print the number "1"
//The last console log will print the number "5"
//I was wrong the second console log is just pulling the secondKey from the object lastTest which will end up pulling the array secondKey








