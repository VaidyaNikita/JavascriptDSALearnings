//  There are several ways to remove duplicate elements from array..

//1st - using Set

let chars = ["A","B","C","D","B","A"]
let uniqueChars = [... new Set(chars)]
console.log(uniqueChars);

//2nd using filter + indexOf()
//indexOf() method return 1st match index char only
let alphabates = ["F","E","D","G","F","H","D"]
let uniChars = alphabates.filter((a,index)=>{
    return alphabates.indexOf(a) === index;
    
})
console.log(uniChars);

//3rd using forEach() + includes()

let fruits = ["Apple","Mango","Banana","Kiwi","Apple","Banana"]
let uniqueFruits = [];
fruits.forEach(fruit=>{
   if(uniqueFruits.includes(fruit) === false){;
    uniqueFruits.push(fruit)
   }
})
console.log(uniqueFruits);

//4th using reduce() + includes() method

let marvels = ["Ironman","Captain","Spiderman","Thor","Captain","Ironman"];
const findDuplicate = (arr) =>{
let uniques = arr.reduce((acc,curr)=>{
    if(acc.includes(curr) === false)
        acc.push(curr)
        return acc;
},[])
return uniques;
}
console.log(findDuplicate(marvels))

