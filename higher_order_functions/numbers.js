const scores = [1,2,3,4,5,6,7,8,9,10];

const maxScore = scores.filter(score => score === Math.max(...scores));
// ... is a spread operator to make code more preceise. it is copying an array 
// - it copies each individual value as it takes each value as single array elements.

//below is how Jordan did it. loops that checks if next value is greater than accumulator value. 
scores.reduce((accumulator, next) => {
    if (accumulator > next) return accumulator;
    else return next;
});

// can be shortened
scores.reduce((accumulator, next) => Math.max(accumulator, next));

const minScore = scores.filter(score => score === Math.min(...scores));
// Jordans solution
scores.reduce((accumulator, next) => Math.min(accumulator, next));

// even numbers
const evenScore = scores.filter(score => 
    score % 2 === 0); 

// odd numbers
const oddScore = scores.filter(score => 
        score % 2 !== 0); 
// find the sum
// const scores = [1,2,3,4,5,6,7,8,9,10];

// declaring the sum and looping standard way
// let sum = o;
// for (let n of numbers)
// sum += n;

// console.log(sum);

// using reduce with 2 parameters - accumalator and current value - arrow function
// accumalator is the same as sum function above. eac hcall takes current value and adds to accumalator
// so we return sum of accumalaor + currentvalue. internally reduce method will take each result and store it in accumalator
// declared inital value in accumalator - so second argument to reduce method we pass zero
// first arguement is a call back function scores.reduce((accumaltor, currentValue) => { return accumaltor + currentValue;
// second argument is initial value of accumalator

const sumOfScores = scores.reduce(
    (accumaltor, currentValue) => {
    return accumaltor + currentValue;
},0);
console.log(sumOfScores);

// to make above shorter - can get rid of initialisation of accumalator 0 and this will set it to first element value. 
// can also omit return as it is returning a single line and a single value. 

const sumOfScores = scores.reduce(
    (accumaltor, currentValue) => accumaltor + currentValue
);
console.log(sumOfScores);
// jordans answer
scores.reduce((acc, next) => acc + next);


// square every number on the list then remove the even numbers and then find the min value
// square every number
const squareOfScores = scores.map(scores => Math.pow(scores, 2));

// remove even numbers
const oddSquareOfScores = scores.map(score => Math.pow(score, 2))
.filter(score => score % 2 !== 0);

// then find the min value
const minOddSquareOfScores = scores.map(score => Math.pow(score, 2))
.filter(score => score % 2 !== 0)
.filter(score => score === Math.min(...scores));

// jordan answer
scores.map(score => Math.pow(score, 2))
.filter(score => score % 2 !== 0)
.reduce((accumulator, next) => Math.min(accumulator, next));