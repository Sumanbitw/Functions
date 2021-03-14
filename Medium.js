// 1. Given an array, your function should return the length of the array.

const arrayLength = ( arr => {
    let result = arr.length;
    console.log(arr);
    return result;
})

console.log(arrayLength([1,5,3,7,8]))

// 2. Given an array and an item, your function should return the index at which the item is present.

const indexOf = (( arr,item) => {
   return arr.filter((num,index) => {if(num===item) return index})
   
})

console.log(indexOf([1,6,5,3,8,9],8))

function indexOf(arr,item) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]===item) return i
    }
}

// 3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.

function replace(arr,currentNum,newNum){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===currentNum){
            arr[i] = newNum;
        }
    }
    return arr;
}


const replace = ((arr,currentNum,newNum) => {
   return arr.map((num) => {return num === currentNum ? newNum : num})
})
console.log(replace([1,6,3,5,8,9],5,10))

// 4. Given two arrays, your function should return single merged array.

function mergedArray(arr1,arr2){
    return arr1.concat(arr2)
}

const mergedArray = ((arr1,arr2) => {
    return arr1.concat(arr2)
})
console.log(mergedArray([1,3,5],[2,4,6]))

// 5. Given a string and an index, your function should return the character present at that index in the string.

function charAt(str , s) {
    return str.charAt(s)
}

const charAt = ((str , s) => {return str.charAt(s)})
console.log(charAt("neoGcamp",4))

// 6. Given two dates, your function should return which one comes before the other.

function minDate(dateOne,dateTwo){
    let res = ""
    let yearZero = dateOne.substring(6,10)
    let yearOne = dateTwo.substring(6,10)
    if(yearZero===yearOne){
        let monthZero = dateOne.substring(3,5)
        let monthOne = dateTwo.substring(3,5)

        if(monthZero===monthOne){
            let dayZero = dateOne.substring(0,2)
            let dayOne = dateTwo.substring(0,2)

            if(dayZero===dayOne){
                return "Both are equal"
            }else{
                res = dayZero > dayOne ? dateTwo : dateOne
            }
        }else{
            res = monthZero > monthOne ? dateTwo : dateOne
        }

    }else{
        res = yearZero > yearOne ? dateTwo : dateOne
    }
    
    return res
}

// function minDate(dateOne,dateTwo){
//     let d1 = new Date(dateOne)
//     let d2 = new Date(dateTwo)
//     if(d1.getDate(dateOne)>d2.getDate(dateTwo)){
//         return dateOne
//     }else{
//         return dateTwo
//     }
// }
//  console.log(minDate("12/01/2021","24/01/2021"))

