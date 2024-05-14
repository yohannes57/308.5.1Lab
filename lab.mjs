console.log("**********__part--1___*********");
/*
Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
Take a number, n, and print every number between 1 and n without using loops. Use recursion.
*/
//-1.1
function sum(arrNum) {
  let sumof = 0;
  for (let value of arrNum) {
    sumof = sumof + value;
  }
  return sumof;
}
let nums = [3, 8];
console.log(`sum of array of numbers is= ${sum(nums)}`);
//1.2
// let ave=sum/no element
console.log(`average of numbers is ${sum(nums) / nums.length}`);
//1.3
function logestString(str) {
  let logestStr = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] > logestStr) {
      logestStr = str[i];
    }
  }
  return logestStr;
}
let strArray = ["yohannes", "john", "getayio", "fikr", "jerry"];
logestString(strArray);
console.log(
  `The logest string among the given strings is : ${logestString(strArray)}`
);
//1.4
function stringsLongerThan(strArr, num) {
  let logerStrs = [];
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > num) {
      logerStrs[count] = strArr[i];
      count++;
    }
  }
  return logerStrs;
}
let values = ["say", "hello", "in", "the", "morning"];
let n = 3;
console.log(`the loger strings : ${stringsLongerThan(values, n)}`);
//1.5
//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
let count = 0;
let numbers = [];
let x = 2;
function printBetween(num) {
  if (++x < num) {
    numbers[count] = ++x;
    count += 1;

    printBetween(num);
  } else return numbers;
}
let num = 9;
console.log(`Numbers between 1 and ${num} is ${printBetween(num)}`);

//
//
console.log("**********__part--2___*********");
/*
given data:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]
*/

// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.
// Filter the array to remove entries with an age greater than 50.
// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

// solutions
//2.1
let giveArrayObj = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
// console.log(giveArrayObj)
giveArrayObj.sort((a, b) => {
  return a.age - b.age;
});
console.log(giveArrayObj); //updated object
//2.2
giveArrayObj.filter((item) => item.age > 50);
console.log(giveArrayObj);

console.log("**********__part--3___*********");

console.log("**********__part--4___*********");
console.log("**********__part--5___*********");
console.log("**********__part--6___*********");
