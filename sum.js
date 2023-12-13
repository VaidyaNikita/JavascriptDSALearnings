let a = 10;
let b =20;
let x = a+b;
console.log(x)

// replacing variable values

let m = 101;
let n = 99;
let o = m;
m = n;
n = o;
console.log(m) // 99
console.log(n) //101

// concat

let str1 = 'hello ';
let str2 = 'world';
let str = str1.concat( str2);
console.log(str)

//concatenation or coersion

console.log(1+2) //------3
console.log("1"+"2")  //-----12
console.log("1"-"2")  //------1
console.log("a"+"2")  //------a2
console.log("2"+"a"+"2")  //------2a2
console.log("a"-"2")  //------NaN --- not a number, '-' saved for numeric operation in js
