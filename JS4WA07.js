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

//Below accesses the last element of the array using .length - 1.
let lastAge = ages[ages.length - 1];
console.log("Last age in array: ", lastAge)

//Below subtracts the last element from the first element using the index 0 to reference the first element.
let minusAge = lastAge - ages[0];
console.log("Q1.a: First element minus last element = ", minusAge)

//.push is one method to add an element to the end of an array.
ages.push(75);
console.log("New array with added age: ", ages);

let newLastAge = ages[ages.length - 1];
console.log("New last age in array: ", newLastAge)

let minusNewAge = newLastAge - ages[0];
console.log("Q1.b: First element minus new last element = ", minusNewAge);

//Created new variable to store the sum.
let sumOfAges = 0;

//Created for loop to go through each element of the array and add it to the sum each iteration.
for(let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i];
    console.log("Index: ",i, "Sum of ages: ", sumOfAges);
}
console.log("Total Sum: ", sumOfAges);

//Divided total sum by the number of elements in the array using the .length method to get average.
let averageAge = sumOfAges / ages.length;
console.log("Q1.c: Average age of ages array: ", averageAge);

/*
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;
//Below is a loop that counts the letters of each name and adds them together.
for(let i = 0; i < names.length; i++) {
    totalChars += names[i].length;
    console.log("Index: ", i, "Name: ", names[i], "Total Chars: ", totalChars);
}
//Below is a division of the total number of letters from above divided by the number of names to get the average letter per name.
let averageNameChars = totalChars / names.length;
console.log("Q2.a: Average number of letters per name: ", averageNameChars);

//Below is a loop to add each name to the others and the " " at the end puts spaces between each name.
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
//Below creates a new array to hold the length of each name from the above names array.
//The for loop adds the length of each name as it cycles through the list of names.
console.log("Q5: Create a new array with the name lengths of the names array.")
let nameLengths = [];
for(let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    console.log("Name lengths array:", nameLengths)
}

/*
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/
//As with the above sum calculations, this for loop also adds each name length to the accumulated total at that iteration until all lengths have been added to get a total sum of letters.
console.log("Q6: Calculate sum of all elements in nameLengths array.");
let nameLengthsSum = 0;
for(let i = 0; i < nameLengths.length; i++) {
    nameLengthsSum += nameLengths[i]
    console.log("Index:", i, "Total sum of nameLengths array:", nameLengthsSum);
}

/*
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
*/
//Below is a function that takes a word input and a number input (n) to tell it how many times to repeat the word and add together.
//The .repeat method will only take a number in the parentheses after it.
console.log("Q7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.")
function concatWord(word, n) {
    let concat = word.repeat(n);
    console.log("Concatenated word:", concat);    
}
concatWord("Hello", 3);

/*
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
*/
//Below is a function that adds two names together with a space (" ") to create a full name.
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
//Created two numbers arrays to test the function below.
let number1 = [100, 200, 300, 400];
let number2 = [1, 2, 3, 4];

//The function first adds the total of the numbers in an array with a for loop.
//Then the if else statement tests that sum against whether it is > 100. If so, then true, else then false.
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
//Below function first creates the sum of an array of numbers using a for loop.
//Then, creates the average of that sum by dividing it by the length of the array.
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
//Created 2 new numbers arrays to test function.
let number3 = [10, 10, 10];
let number4 = [5, 5, 5];

//Below function compare the averages of two different arrays.
//First it gets the total sum of each array. I used a standard for loop for the first array and then used a for of loop for the second array.
//I wanted to see how each looked compared to the other and how the pieces fit together to arrive at the same result.
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

//Below is where the average is created by dividing the sum from above by the array length.
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;
    console.log("Average array1:", average1, "Average array2:", average2)

//Once the averages are calculated, an if else statement is used to compare them and log whether array 1 is greater than array 2.
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
//The function uses 2 Booleans and an && statement, which requires both values to be true to return true.
//Then an if else statement is used to evaluate the arguments passed through and log whether we will buy a drink.
//If it's hot outside and we have more than $10.50, we will buy a drink.
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
I created a function to determine if a year is a leap year or not. I wanted to work with Boolean logic as it sometimes still twists my mind. The function called isLeapYear takes one number parameter. It then tests it against Booleans. If the year is divisible by 4 it is a leap year, unless it is also divisible by 100, then it it not a leap year, unless it is also divisible by 400, then it is a leap year. (Ex: 2000 is a leap year, but 1900 is not; 2024 is a leap year.)
I used the remainder assignment operator (%) to show that something was (=== 0) or was not (!== 0) divisible by a number. Then I created the && statements to show all the parts that had to be true for it to return true. I started with all 3 Booleans that needed to be true, then took one away at a time to work down. I created a result variable that called the function and passed through the year variable as the argument. The year variable was outside the function so it could be changed and the function could be checked. Then I logged the result.
*/
let year = 1900

function isLeapYear(num) {
  if(num % 4 === 0 && num % 100 === 0 && num % 400 === 0) {
    return num + " is a leap year.";
  } else if (num % 4 === 0 && num % 100 === 0 && num % 400 !== 0) {
  return num + " is not a leap year.";
  } else if (num % 4 === 0 && num % 100 !== 0) {
    return num + " is a leap year.";
  }
}

let result = isLeapYear(year);
console.log(result);
