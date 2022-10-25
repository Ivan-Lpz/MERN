
// //added an extra s the beatless so that I can run both functions
// var beatless = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (var index = 0; index < names.length; index++) {
//             var name = names[index];

//             console.log(name + ' was found at index ' + index);
//         }
//         console.log('name and index after loop is ' + name + ':' + index);
//     }
//     actuallyPrintingNames();
// }
// printNames(beatless);


// //Final refactored code should look like this
// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (let index = 0; index < names.length; index++) {
//             const name = names[index];

//             console.log(name + ' was found at index ' + index);
//         }
//     }
//     actuallyPrintingNames();
// }
// printNames(beatles);

//------------------------------//

//-----HOISTING---------

// console.log(magicalUnicorns);
// var magicalUnicorns = "awesome";


//Heres why our above code ran "undefined"
// var magicalUnicorns; // the declaration gets hoisted to the top of the scope by itself
// console.log(magicalUnicorns); // we log it as undefined
// magicalUnicorns = "awesome"; // the assignment stays exactly where it was

// var foo;                  // 'foo' is a declaration, it's global and gets hoisted
// function magic(){         // 'magic()' also gets hoisted to the top
//     var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of it's scope
//     foo = "hello world";  // we assign a value to our function scoped 'foo'
//     console.log(foo);     // we log it as 'hello world'
// }                       
// foo = "bar";              // here, we assign a value to the global 'foo'
// magic();                   // magic is called, the first console.log runs
// console.log(foo);  

// magicalUnicorns();
// var magicalUnicorns = function(){
//     console.log("Will it blend?");
// }
// console.log("Don't breathe this!");


//-------JavaScript Hoisting------------


// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER



//  console.log(hello);                                   
// var hello = 'world';     
// I believe that this will come back as undefined because the variable hello is being declared after the console log


// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }

//I believe that magnet will be logged in the console because it's being reassigned in the function

// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// I think the console will print out super cool becasue in the function it is not defining brenden as a variable


// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// First it will print out chicken because of the first console log. Then it will print out defined because the function eat does not have any parameters
//I was wrong 

// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//First it will console log undefined then it will console log chicken , then it will console log fish, then it will console log undefined again
//I was wrong

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//I believe it will first console log undefined because the first console log is not defined as a function
//Then it will console log the string "rock"
//Then it will console log the string "rock and well as r&b"
//Lastly it will console log undefined again
//I was almost right. The part I got wrong was line 122 was defining the variable genre and it was passing in disco. Therefore on line 130 it will console log disco


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


//First I believe it will console log "san jose" because the variable dojo is being assigned a string that says "san jose"
//Then I believe it will console log "seattle"
//Lastly I believe that it will console log san jose again.
//I was almost right I was missing line 145 which i believe is a reassignment































