//Sorting numbers using array sort() method

let nums = [5,3,6,1,8,9,2];
let sorted = nums.sort((a,b)=> b-a);  //---- decending order
// let sorted = nums.sort((a,b)=> a-b); // ---- assending order
console.log(sorted);

// find largest number among three

const findLargest = (a,b,c) =>{
    if(a >= b && a>= c){
        console.log(`${a} is largest than ${b} & ${c}`)
    }
    else if(b >= a && b >= c){
        console.log(`${b} is largest than ${a} & ${c}`)
    }
    else{
        console.log(`${c} is largest than ${a} & ${b}`)
    }
}
findLargest(20,22,13)

//Simple calculator

const calculator = (num1, operator, num2) => {
    let result;
    if(operator == "+"){
        result = num1 + num2;
    }
    else if(operator == "-"){
        result = num1 - num2
    }
    else if(operator == "*"){
        result = num1 * num2
    }
    else{
        result = num1 / num2
    }
    return result
}

console.log(calculator(10,'+',5))
console.log(calculator(10,'-',5))
console.log(calculator(10,'*',5))
console.log(calculator(10,'/',5))

//caluclator using switch case

const switchCalculator = (a, op, b) =>{
    let output;
    switch(op){
        case "+":
            output = a + b;
            console.log(`${a} + ${b} = ${output}`);
            break;
        case "-":
            output = a - b;
            console.log(`${a} - ${b} = ${output}`);
            break;
        case "*":
            output = a * b;
            console.log(`${a} * ${b} = ${output}`);
            break;
        case "/":
            output = a / b;
            console.log(`${a} / ${b} = ${output}`);
            break;
        default:
            console.log("Invalid operator")    
    }
}
switchCalculator(20,"+",5);
switchCalculator(20,"-",5);
switchCalculator(20,"*",5);
switchCalculator(20,"/",5);

//finding HCF- highest comon factor between two numbers
//ex -- 12 is comon divisible number for 60 and 72

const findHCF = (number1, number2) =>{
    let hcf;
    for(let i = 1; i< number1 && i < number2; i++){
        if(number1 % i == 0 && number2 % i == 0){
            hcf = i;
        }
    }
    return hcf;  
}
console.log(findHCF(60,72))