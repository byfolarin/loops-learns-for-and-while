// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("The sum of the numbers is:", sum);

let fruits = ["apple", "banana", "orange", "kiwi"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) { // initialize i to 0
        console.log(arr[i]);
    }
    return undefined; // explicitly return undefined
}

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
console.log(listArrayItems(colors)); 


function letterFinder(words,match){
    for (let i = 0; i < words.length; i++){
        if (words[i] === match){
            console.log('Found the', match, 'at', i);
        }

        else {
            console.log('---No match found at', i);
        }
    }
}

console.log(letterFinder("test", "t"));


var number = [0,1,2,3,4,5,6,7,8,9]

for (let i = 0; i < number.length; i++){
    console.log(number[i]);
}


for (let i = 1; i <= 20; i++) {
   
    if (i % 2 === 0) {
        console.log(i); 
    }
}



let sum = 0;

for (let i = 1; i <= 100 ; i++ ){
    sum += i
    
}
console.log("The sum of numbers from 1 to 100 is:", sum); 


// Write a program that prints the multiplication table of a given number (up to 10).

// 1 Multiplication table of 1-10
// mulitplication is a number time 1*2
// so it'll be a number that loops 10 times 

// let num1 = 0
// let num2 = 0

// for (let i = 0; i <=10; i++)(
//     if (i == num1){
//         console.log (i** num2);
//     }
// )

// let num1 = 0;
// let num2 = 0;

// for (let i = 0; i <= 10; i++) {
//     if (i == num1) {
//         console.log(i * num2);
//     }
// }

function printMultiplicationTable(number) {
    // Loop from 1 to 10
    for (let i = 1; i <= 10; i++) {
        // Calculate the product and print
        let product = number * i;
        console.log(number + " x " + i + " = " + product);
    }
}

// Call the function with the desired number
printMultiplicationTable(600); // Example: Print multiplication table for 5

