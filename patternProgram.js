// * * * * *
// * * * *
// * * *
// * * 
// *


let str = '';
for(let i = 0; i < 5 ; i++){
    for(let j = i; j < 5; j++){
        str += ' *';
    }
    str += "\n";
}
console.log(str);

//    *
//    * *
//    * * *
//    * * * *
//    * * * * *

let str2 = "";
for(let i = 0; i < 5; i++){         // i=0;0<5
    for(let j = 0; j <= i; j++){    // j=0; 0<=5 -- j++;1<= 0; X
        str2 += " *"                // *
    }
    str2 += "\n"
}
console.log(str2)
