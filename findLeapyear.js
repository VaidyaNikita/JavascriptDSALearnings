const findleapYear = (n) =>{
    if((n % 4 == 0) && (n % 100 != 0) || (n % 400==0)){
        console.log(`${n} Leap Year`) 
    }else{
        console.log(`${n} not leap year`)
    }
}
findleapYear(2000) // leap year
findleapYear(2001) // not leap year