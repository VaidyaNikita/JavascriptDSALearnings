//1 => sum of passed number as argument
function sum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sum(4)); // ---------1+2+3+4 = 10

//2 => sum of digits in number

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10; //1876%10 =>6, 187%10=>7, 18%10=>8, 1%10=> 1
    num = Math.floor(num / 10); // 1876/10 =>187, 187/10=> 18, 18/10=>1, 1/10 =>0
  }
  return sum;
}
console.log(sumOfDigits(1876)); //---------1+8+7+6 = 22

//3 => reverse string

let str = "practice makes you perfect";
let revStr = str.split(" ").map((word) => {
  return word.split("").reverse().join("");
});
console.log(revStr.join(" "));

//4 => check number is an integer

let num = 12.6;
// if(num % 1 === 0){
//     console.log(`${num} is an integer`)
// }
// else {
//     console.log(`${num} is not an integer`)
// }

// ------or------
//ternary

num % 1 === 0
  ? console.log(`${num} is an integer`)
  : console.log(`${num} is not an integer`);

//5 => duplicate an array

function duplicate(arr) {
  return arr.concat(arr);
}
let arr = [1, 2, 3, 4];
console.log(duplicate(arr));

//6 => given an array of numbers and a target is sum of two array element,
//create a funtion that will return index postion of sum of taget elements
//ex- 4+5 = 9 => return [1,2]

let numbers = [3, 4, 5, 6];

const sumOfNums = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log(sumOfNums(numbers, 10));

//7 => create a function that reverses given number
// ex.--- 1234 => 4321

const reverseNumber = (num) =>{
    let rev = 0;
    while(num !== 0){
        rem = (num%10);
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(reverseNumber(1234))

// ------OR short way
const revNum = (nums) =>{
    let numsArray = nums.toString()
    let rev = Number(numsArray.split('').reverse().join(''))
    return(rev)
}
console.log(revNum(4567));


// 8 => write a function that checks passed string is palimdrome or not

const checkStrPalim = (str) =>{
  let revStr = str.split('').reverse().join('');
  if(str === revStr){
    console.log(`${str} is a palimdrom`)
  }else{
    console.log(`${str} is not a palimdrom`)
  }
}
checkStrPalim('121');

//9 => write a function that returns a string in alphaba\etical order

const stringAlphabate = (str) =>{
  return str.split('').sort();
}
console.log(stringAlphabate("nikita"))