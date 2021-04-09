// // 1. Write a program to input 2 numbers and display the sum of the numbers to the console.
// function add(numOne,numTwo){
//     return numOne + numTwo
// }

// console.log(add(20,40))

// // 2. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest.

// function simpleInterest(principle,rate,time){
//     return (principle * rate * time) / 100
// }

// console.log(simpleInterest(100,6,2))

// // 3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
//  function kineticEnergy(mass,volume){
//      return (0.5*mass*volume*volume)
//  }

//  kineticEnergy(2,4)

//  // 4. Write a program to convert Fahrenheit to Celsius. For Celsius to Fahrenheit conversion use: T = 9*T/5 + 32 'T' is the temperature on the Celsius scale.
// function fahreinheitToCelsius(temperature){
//     return (9*temperature)/5 + 32
// }
// console.log(fahreinheitToCelsius(56))

// // 5. Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// function areaPerimeter(a){
//     return Area = a*a
//     // return Perimeter = 4 * a
//     // return SurfaceArea = 6 * a * a
//     // return volume = a * a * a
// }

// console.log(areaPerimeter(5))

// // 6. Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.
//  function profitOrLoss(cP,sP){
//      if(cP - sP < 0 ) return  sP - cP 
//      if(cP - sP > 0 ) return cP - sP
//  }

//  console.log(profitOrLoss(1500,2000))
//  console.log(profitOrLoss(3125,1125))

//  // 7. Write a program to calculate sum of N natural digits, as input by the users?
//  function naturalDigits(n){
//      return n * (n + 1) * 0.5
//  }
//  console.log(naturalDigits(100))

 // 8. Write a Program to Print N Odd Number in Descending Order.

//  function oddNumbers (num) {
//      let a;
//      for(let i=num-1; i>=0; i--){
//         a = 1 + i * 2
//         return a
//     }
// }
//  console.log(oddNumbers(4))

// 9. Write a JavaScript program to compute the sum of all digits that occur in a given string.
//  function sumOfDigits(num){
//      let result = 0;
//      for(let i=0;i<num;i++){
//          let rem = num % 10
//          result += rem
//         num = (num / 10)
//      }
//      return Math.ceil(result)
//  }

//  console.log(sumOfDigits(1234))

// 10. Write a JavaScript program that reverses a number.

// function reverseNumber(num){
//     let result = 0 
//     while(num > 0){
//         let rem = num % 10
//         result = result * 10 + rem
//         num = parseInt(num / 10)
//     }
//     return result 
// }
//  console.log(reverseNumber(32243))

// 11. Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.
