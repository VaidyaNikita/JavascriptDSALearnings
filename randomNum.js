// let a = Math.random();
//Math.floor() --- makes a floating point number into round number
// (decrasing value to the nearest integer value)
//
let a = Math.floor(Math.random()*(10-1) + 1);

let b = Math.floor(Math.random()*(10-1))
console.log(b)
// console.log(a)

// to check number positive, negative or zero

function checkNumber(n){
    if(n > 0){
        console.log(`The number ${n} is positive` )
    }
    else if(n === 0){
        console.log("The number is zero")
    }
    else if(n < 0){
        console.log(`The number ${n} is negative`)
    }
}
checkNumber(3);

//to check number is odd or even

function checkOddEven(n){
    if(n >= 0 && n % 2 === 0){
        console.log(`The number ${n} is Even`)
    }
    else {
        console.log(`The number ${n} is Odd`)
    }
}
checkOddEven(23)