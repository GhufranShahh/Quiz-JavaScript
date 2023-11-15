//Q15
// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}


// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

//Q12
function rightNow(){
    var now = new Date();
    console.log(now)
}
rightNow();

//Q14
function noSuqares(num1) {
    document.write(`The square of ${num1} is ${num1*num1}`);
}
noSuqares(4); 
document.write('<br>')

//Q5
function factorial(number){
    if(number < 0){
        document.write('Error! Fac(torial for negative number does not exist');
    }else if(number === 0){
        document.write(`The factorial of ${number} is 1`);
    }
    else{
        let fact = 1;
        for(i =1 ;i<= number; i++){
            fact *= i
        }
        document.write(`The factorial of ${number} is ${fact}`)
    }
}     
var number = parseInt(+prompt('Enter the positive number?'));
factorial();
document.write('<br>')

//Q5
function factorial(number){
    var fact =1;
for(var i=2; i<=number; i++){
    fact *= i;
}
return fact;
 }
var enterNumber = +prompt('Enter the number to find its factorial');
var result1 = factorial(enterNumber);
document.write(`Factorial of ${enterNumber} is ${result1}`);

//Q8
var i = 1
for ( i = 1; i < 11; i++) {
    console.log(i)
}

//Q10
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
//Q13
// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
//Q13
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));

//Q11
function validate(age){
    var ans="not eigible";
    if(age>=18){
        ans="eligible";
    }
    return(ans);
}
var age=parseInt(prompt("Enter age"));
var status=validate(age);
document.write("You are <b>"+status+"</b> for Vote");

//Q
// constructor function
class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age,;    
    
    }
}

// create an object
const person1 = new Person('John', 23, 'male');
const person2 = new Person('Sam', 25, 'male');


const person = {
    goodname : "Ghufran",
    age: 21,
  };
  
  function displayPersonInfo(obj) {
    console.log(Object.entries(obj));
  }
  displayPersonInfo(person);

  //Q7
  function person(name,age){
    this.name = name;
    this.age = age;
  }
  
  const p1 = new Person('Ghufran Shah',20);
  const p2 = new Person('Rohaan Shah',18);
  console.log(p1);
  console.log(p2);
  

  //Q2
  let students = [
    { name: "Ghufran", score: 100 },
    { name: "Kashan", score: 120 },
    { name: "faizan", score: 90 },
  ];
  
  function findTopStudent(arrOFStudents) {
    let firstObj = arrOFStudents[0];
    let secondObj = arrOFStudents[1];
    let thirdObj = arrOFStudents[2];
    if (firstObj.score > secondObj.score && firstObj.score > thirdObj.score) {
      return firstObj;
    } else if (
      secondObj.score > firstObj.score &&
      secondObj.score > thirdObj.score
    ) {
      return secondObj;
    } else {
      return thirdObj;
    }
  }
  findTopStudent(students)

  //Q3
  function calculateAverage(arrOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrOfNumbers.length; i++) {
      sum += arrOfNumbers[i];
    }
    return sum / arrOfNumbers.length;
  }
  
  let arr = [100, 100, 100, 100];
  calculateAverage(arr);

  //Q4
  let fruits = ["Orange", "Mango", "Apple", "Strawberry", "Watermelon"];
console.log(fruits.sort());

//Q6
let myFunction = function(string) {
    let value = '';
    for (let i = string.length - 1; i >= 0; --i) {
      const element = string[i];
      value += element;
    }
    return value;
  }
  myFunction("HelloWorld");

//Q9
function sumArrayElements(arrOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrOfNumbers.length; i++) {
      sum += arrOfNumbers[i];
    }
    return sum;
  }
  let numbers = [10,20,30,40,50,60];
  sumArrayElements(numbers);

  //Q16
  var button = document.querySelector(".btn")
button.addEventListener("click", function(){
  this.textContent = "Hey, you clicked me!"
})
// in html 
//<button class="btn">Hey, click me!</button>



























  





































