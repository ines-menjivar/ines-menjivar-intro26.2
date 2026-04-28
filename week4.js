//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit. Log both the input and output values

// EXAMPLE LOG:
//  console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//  Q1 convertTemp: 0 32

// Call convertTemp with several different celsium temperatures

// PUT YOUR CODE HERE

//created a function that takes one integer parameter
function convertTemp(celsiusTemp) {

    //created a new variable to store my results for the conversion
    let conversion = (celsiusTemp * 9 / 5) + 32

    return conversion;
}

//logging it
console.log("Q1 convertTemp: ", 0, convertTemp(0));





// ---------- QUESTION 2 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString. Use a for loop. Log both the input and output values.

// EXAMPLE LOG:
//  console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//  Q2 reverseString: HelloWorld dlroWolleH

// Call reverseString with several different strings. Make sure it works for an empty string.


// PUT YOUR CODE HERE

//created a function that takes one string parameter
function reverseString(string) {

    //created a variable to use in the loop to store results as it iterates thru string's length
    let reverse = "";

    //created a for loop to loop thru the passed string
    for (let i = 0; i < string.length; i++) {
        reverse += string[(string.length - 1) - i];
    }

    return reverse;
}

//log both input and output values 
console.log("Q2 reverseString: ", "Hello", reverseString("Hello"));
console.log("Q2 reverseString: ", "", reverseString(""));


// ---------- QUESTION 3 ----------
// Let's make a useful math problem - create a tip calculator! Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.  Return the total bill amount

// EXAMPLE LOG:
//  console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// EXAMPLE OUTPUT:
//  Q3 tipCalculator: 50 0.2 60

// PUT YOUR CODE HERE

//created a function that takes 2 integer parameters for the bill total and tip percentage
function tipCalculator(billTotal, tipPercentage) {

    //created a new variable to do my calculations and store results
    let totalBillAmount = (billTotal * tipPercentage) + billTotal

    return totalBillAmount
}

// Don't forget your console.logs!
console.log("Q3 tipCalculator: ", tipCalculator(20, .20));



// ---------- QUESTION 4 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//  console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// EXAMPLE OUTPUT: 
//  Q4 multiplyThese: 10 10 100

// PUT YOUR CODE HERE

//created 2 variables and assigned them integer values
let num1 = 10;
let num2 = 20;

//created a function that takes 2 parameters for each number we want to multiply together
function multiplyThese(param1, param2) {

    //created another variable to store my results
    let product = param1 * param2;
    return product;
}

//logging it
console.log("Q4: ", num1, num2, multiplyThese(num1, num2));


// ---------- QUESTION 5 ----------
// Create a function called 'getAverage' that takes 2 parameters and returns their average. NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result. We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//  console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// EXAMPLE OUTPUT: 
//  Q5 getAverage: 3 6 4.5

// PUT YOUR CODE HERE

//created a function that takes 2 integer parameters
function getAverage(int1, int2) {

    //created a new variable to make the calculations and store the results to then return them
    let average = (int1 + int2) / 2;

    return average;
}

console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));



// ---------- QUESTION 6 ----------
// Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// Hint: To determine if a number is prime, you can check if it's divisible by any number from 2 up to the square root of the number. 0 and 1 are not prime numbers.
// Make sure you test several prime and non prime numbers along with 0 and 1.

// EXAMPLE LOG:
//  console.log("Q6 isPrime: ", number, isPrime(number));
// EXAMPLE OUTPUT: 
//  Q6 isPrime: 12 false

// PUT YOUR CODE HERE

//created a function that takes one integer parameter
function isPrime(num) {

    //created a conditional statement that checks if the passed number is less than or equal to 1 and if so- it's not prime, and it returns false
    if (num <= 1) {
        return false
    }

    //created a for loop to loop for as long as the passed number's sqrt and inside it a conditional statement that checks if we have a remainder of 0. If so, our number is not prime, therefore, it's false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;

        }
    }
    //finally, if our remainder is not 0, then our number is prime and will return true
    return true;

}

//created an array and a for...of loop that loops thru the array and uses the function within it to check if any of the numbers in my array are prime or not
let isItPrime = [0, 1, 2, 3, 4, 5, 6];

for (let number of isItPrime) {
    console.log("Q6 isPrime: ", number, isPrime(number))
}


// ---------- QUESTION 7 ----------
// Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number. 
// Be sure to include several test cases

// EXAMPLE LOG:
//  console.log("Q7 getPrimesUpTo: ", number, isPrime(number));
// EXAMPLE OUTPUT:
//  Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// PUT YOUR CODE HERE

//created a function that takes an integer as parameter
function getPrimesUpTo(number) {
    let getPrimes = [];

    //created a for loop to loop thru the integer passed and using previous function in Q6 in a conditional statement to check it and then pushing the results to the empty array created above
    for (let i = 2; i <= number; i++) {

        if (isPrime(i)) {
            getPrimes.push(i);
        }


    }

    return getPrimes;
}


//logging it
console.log("Q7 getPrimesUpTo: ", 12, isPrime(12));
console.log("Q7 getPrimesUpTo: ", isPrime(13));



// ---------- QUESTION 8 ----------
// Now, we're going to write several functions that calculate a student's grade.  
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// Also, make sure that an empty array or no valid values in the array do not result in an error (hint: make sure you aren't dividing by 0)

// EXAMPLE LOG:
//  console.log("Q8 calculateAverage: ", calculateAverage(scores));
// EXAMPLE OUTPUT:
//  Q8 calculateAverage: 85 // input array let scores = [90, 80, 85];

// PUT YOUR CODE HERE


// ---------- QUESTION 9 ----------
// Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale. Make sure you test with several averages.
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60

// EXAMPLE LOG:
//  console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// EXAMPLE OUTPUT:
//  Q9 getLetterGrade(95): A

// PUT YOUR CODE HERE
function getLetterGrade(average){
    
}


// ---------- QUESTION 10 ----------
// Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise. Make sure you handle a value other than A,B,C,D or F passed in.

// EXAMPLE LOG:
//  console.log("Q10 passed('A'): ", passed('A'));
// EXAMPLE OUTPUT:
//  Q10 passed('A''): true

// PUT YOUR CODE HERE


// ---------- QUESTION 11 ----------
// Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// Print yes is they have passed and no if they did not.

// EXAMPLE LOG:
//  console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));  
// EXAMPLE OUTPUT:
//  Q11: History 101 - Student: Jane Doe, Average: 75.5, Grade: C, Passed: yes

// PUT YOUR CODE HERE


// ---------- QUESTION 12 ----------
// Now, let's see how to use a callback. First, create a function that simulates pushing a button. Name the function buttonPushed and log the message "The button was pushed!" in the function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  buttonPushed();

// EXAMPLE OUTPUT: (we're using this function in the next question as well)
//  Q12, Q13: The button was pushed!

// PUT YOUR CODE HERE


// ---------- QUESTION 13 ----------
// Now, create a function called simulateButtonPush and pass the function created in question 12 to that function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  simulateButtonPush(buttonPushed);

// EXAMPLE OUTPUT: 
//  The button was pushed!

// PUT YOUR CODE HERE