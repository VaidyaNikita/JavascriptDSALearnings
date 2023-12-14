
function sum(n){
    let sum = 0;
    for(let i = 0; i<=n; i++){
        sum += i;
    }
    return sum;
}
console.log(sum(4)) // ---------1+2+3+4 = 10

//sum of digits in number

function sumOfDigits(num){
    let sum = 0;
    while(num > 0){
        sum += num%10;
        num = Math.floor(num/10)
    }
    return sum
}
console.log(sumOfDigits(1876)) //---------1+8+7+6 = 22


//reverse string 

let str = "practice makes you perfect";
let revStr = str.split(' ').map(word=>{
   return word.split('').reverse().join('')
})
console.log(revStr.join(' '));


//check number is an integer

let num = 12.6;
// if(num % 1 === 0){
//     console.log(`${num} is an integer`)
// }
// else {
//     console.log(`${num} is not an integer`)
// }

// ------or------
//ternary

num % 1 === 0? console.log(`${num} is an integer`) : console.log(`${num} is not an integer`) ;

//duplicate an array 

function duplicate(arr){
   return arr.concat(arr)
}
let arr = [1,2,3,4]
console.log(duplicate(arr))