
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