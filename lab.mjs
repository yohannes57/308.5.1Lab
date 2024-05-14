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
  if (x < num) {
    numbers[count] = x++;
    count += 1;
    printBetween(num);
  } else return numbers;
}
let num = 9;
let numx = printBetween(num);
// console.log(numx);
console.log(`Numbers between 1 and ${num} is ${printBetween(num)}`);
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
let ageFilered = giveArrayObj.filter((item) => {
  return item.age < 50;
});
console.log("vlues filtered which age < 50");
console.log(ageFilered);
///2.3;
let mapedObject = giveArrayObj.map((item) => ({
  id: item.id,
  name: item.name,
  job: item.occupation,
  age: parseInt(item.age) + 1,
}));
console.log("maped data: ");
console.log(mapedObject);
/////2.4
let ageSum = 0;
let reducedObj = giveArrayObj.reduce(function (item, obj) {
  return item + parseInt(obj.age);
}, 0);
ageSum = reducedObj;
// console.log(reducedObj);
console.log("sum of age " + reducedObj);
//....2.5
//average age is  calculated sum of age divided by lenght of obje
let averageAge = ageSum / giveArrayObj.length;
console.log("average age of the give object is :" + averageAge);
// ///
console.log("**********__part--3___*********");
/*
For this section, develop functions that accomplish the following:
Take an object and increment its age field.
Take an object, make a copy, and increment the age field of the copy. Return the copy.
For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?
*/
////.....3.1
let newObj = {
  name: "yohannes",
  id: "1",
  age: 25,
  occupation: "software",
  date: new Date(),
};
console.log(newObj);
newObj.age += 1;

console.log(newObj.age);
////....3.2
//using spread ...
// let p1 = {
//     ...person
// };
// // using  Object.assign() method
// let p2 = Object.assign({}, person);
// // using JSON
// let p3 = JSON.parse(JSON.stringify(person));
let copyOfObj = {
  ...newObj,
};
copyOfObj.age = copyOfObj.age + 1;
console.log(newObj); //is not changed cause it reference the same location with the orginal one
////....3.3
let currentTime = newObj.date.getTime();
console.log("current time " + currentTime);
let newTime = new Date();
newTime.setTime(currentTime);
newTime.setHours(12);
newTime.setMinutes(0);
newTime.setSeconds(0);

copyOfObj.date = newTime;
console.log("original date: " + newObj.date);
console.log("copy of orginal: " + copyOfObj.date);
//or
// let orgObj = {
//   name: "yohannes",
//   id: "1",
//   age: 25,
//   occupation: "software",
//   date: new Date(),
// };
// // Create a deep copy of the object
// let copy_Obj = JSON.parse(JSON.stringify(orgObj));
// console.log(copy_Obj);
// // Modify the Date object within the copied object
// let cTime = copy_Obj.date.getTime();
// let nTime = new Date();
// newTime.setTime(cTime);
// newTime.setHours(12);
// newTime.setMinutes(0);
// newTime.setSeconds(0);
// copy_Obj.date = nTime;
// console.log(orgObj.date);
// console.log(copy_Obj.date);

///////////
console.log("**********__part--4___*********");
/*
Practical application of these concepts varies greatly in industry, but the core foundations are the same: functions handle repeated, specialized tasks, and methods are functions attached to specific types of objects.
The Skills-Based Assessment (SBA) for this module will have you work on a real-world example that employs all of the tools you have learned thus far. To prepare for it, revisit your previous work as described below.
*/
console.log("**********__part--5___*********");
/*
Once you have completed the tasks outlined above, take any extra time you may have to revisit your previous JavaScript assignments. 
How many of the scripts could be turned into functions?
What would the parameters look like? What kind of returns should they have?
Could you package your code into even smaller blocks, creating helper functions?
What else could be changed to optimize the code, knowing what you now know?
Explore, experiment, and experience the magic of reusable code!
*/
console.log("**********__end of Lab ___*********");
