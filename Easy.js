//1. Given a and b, your function should return the value of a^b
const power = (base,exponent) => {
    let result = 1 ;
    for (let i=0;i<exponent;i++){
        result *= base;
    }
    return result;
}

console.log(power(2,3))

// 2. Given length of a regular hexagon, your function should return area of the hexagon.

const areaOfHexagon = a => {
    let area;
    area = (3*Math.sqrt(3) * a * a) / 2 ;
    return area;
}

console.log(areaOfHexagon(10));

// 3. Given a sentence, your functions should return the number of words in the sentence.

const noOfWords = str => {
    let count = 0 ;
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            count = count+1;
        }
    }
    return count + 1;
}
console.log(noOfWords("We are neoGrammers"));

// 4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.

const findMin = ((...num) =>{ return Math.min(...num)})
 console.log(findMin(3,5))
 console.log(findMin(3,5,9,1))

// 5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

const findMax = ((...num) => {return Math.max(...num)})
console.log(findMax(3,5))
console.log(findMax(3,5,9,1))

// 6. Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all.

// const typeOfTriangle = ((a,b,c) => {
    if(a===b && b===c && c===a) {
        console.log("The triangle is equilateral triangle")
    }else if((a===b && b!==c && c!==a) || (a!==b && b===c && c!==a) || (a!==b && b!==c && c===a)){
        console.log("The triangle is isoceles triangle")
    }else{
        console.log("The triangle is scalene triangle")
    }
})

typeOfTriangle(30,60,90)
typeOfTriangle(60,90,90)
typeOfTriangle(60,60,60)