/* JS4 Coding Assignment
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        * Do not use numbers to reference the last element, find it programmatically.
        * ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.
*/
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("Ages array:", ages)

let lastAge = ages[ages.length - 1];
console.log("Last age in array: ", lastAge)

let minusAge = lastAge - ages[0];
console.log("Q1.a: First element minus last element = ", minusAge)

ages.push(75);
console.log("New array with added age: ", ages);

let newLastAge = ages[ages.length - 1];
console.log("New last age in array: ", newLastAge)

let minusNewAge = newLastAge - ages[0];
console.log("Q1.b: First element minus new last element = ", minusNewAge);

let sumOfAges = 0;

for(let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i];
    console.log("Index: ",i, "Sum of ages: ", sumOfAges);
}
console.log("Total Sum: ", sumOfAges);
let averageAge = sumOfAges / ages.length;
console.log("Q1.c: Average age of ages array: ", averageAge);

/*
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;

for(let i = 0; i < names.length; i++) {
    totalChars += names[i].length;
    console.log("Index: ", i, "Name: ", names[i], "Total Chars: ", totalChars);
}
let averageNameChars = totalChars / names.length;
console.log("Q2.a: Average number of letters per name: ", averageNameChars);

console.log("Q2.b Concatenate all the names together with spaces");
let concatNames = "";
for(let i = 0; i < names.length; i++) {
    concatNames = concatNames.concat(names[i] + " ");
    console.log("Index: ", i, "Concatenated Names: ", concatNames);
}

/*
3. How do you access the last element of any array?
*/
//Arrays are zero indexed meaning the last element is always the length of the array minus 1.
console.log("Q3: To get the last element of an array, use arrayName[arrayName.length - 1].")
console.log("Last element of ages array = ", ages[ages.length - 1])
console.log("Last element of names array = ", names[names.length - 1])

/*
4. How do you access the first element of any array?
*/
//Arrays are zero indexed meaning the first element is always at the 0 index.
console.log("Q3: To get the last element of an array, use arrayName[0].")
console.log("First element of ages array = ", ages[0])
console.log("First element of names array = ", names[0])

/*
5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    For example:
    let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    let nameLengths = [5, 3, 4];             // create a new array
*/
console.log("Q5: Create a new array with the name lengths of the names array.")
let nameLengths = [];
for(let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    console.log("Name lengths array:", nameLengths)
}

/*
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/
console.log("Q6: Calculate sum of all elements in nameLengths array.");
let nameLengthsSum = 0;
for(let i = 0; i < nameLengths.length; i++) {
    nameLengthsSum += nameLengths[i]
    console.log("Index:", i, "Total sum of nameLengths array:", nameLengthsSum);
}

/*
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
*/
console.log("Q7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.")
function concatWord(word, n) {
    let concat = word.repeat(n);
    console.log("Concatenated word:", concat);    
}
concatWord("Hello", 3);

/*
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
*/
console.log("Q8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.")
function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log("Full name:", fullName);
}
fullName("Rebecca", "McGirr");

/*
9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/
console.log("Q9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.")
let number1 = [100, 200, 300, 400];
let number2 = [1, 2, 3, 4];

function sumOfArray(array) {
    let total = 0;
    
    for(let i = 0; i < array.length; i++) {;
        total += array[i]
        console.log("Index:", i, "Total:", total)
    }
    if (total > 100) {
        console.log("Total:", total, "greater than 100:", true);
        return true;
    } else {
        console.log("Total:", total, "greater than 100:", false);
        return false;
    }
}
sumOfArray(number1);
sumOfArray(number2);

/*
10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/
console.log("Q10: Write a function that takes an array of numbers and returns the average of all the elements in the array.");
function averageOfArray(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i]
        console.log("Index:", i, "Total of array:", total);
    }
    let average = total / array.length;
    console.log("Average of array:", average);
    return average;
}
averageOfArray(number1)
averageOfArray(number2)

/*
11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
*/
console.log("Q11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");
let number3 = [10, 10, 10];
let number4 = [5, 5, 5];

function twoAverages(array1, array2) {
    let total1 = 0;
    let total2 = 0;
    for(let i = 0; i < array1.length; i++) {
        total1 += array1[i];
        console.log("Current index array1:", i, "Total1:", total1);
    }
    for(const number of array2) {
        total2 += number;
        console.log("Current number array2:", number, "Total2:", total2);
    }

    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;
    console.log("Average array1:", average1, "Average array2:", average2)

    if (average1 > average2) {
        console.log("Array1 is greater than Array2?", true);
        return true;
    } else {
        console.log("Array1 is greater than Array2?", false);
        return false;
    }
}
twoAverages(number3, number4);

/*
12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/
console.log("Q12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");
function willBuyDrink(isHotOutside, moneyInPocket) {
    console.log("Is it hot outside?", isHotOutside, "How much money?", moneyInPocket)
    if (isHotOutside === true && moneyInPocket > 10.5) {
        console.log("Buy a drink?", true);
        return true;
    } else {
        console.log("Buy a drink?", false);
        return false;
    }
}
willBuyDrink(true, 15);

/*
13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
*/