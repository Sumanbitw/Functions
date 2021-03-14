// 1. Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places.
function encodeString(str,num){
    let result = ""
    let charNum = 0
    for(let i=0;i<str.length;i++){
        charNum = str[i].charCodeAt() + num
        console.log(charNum)
        result = result + String.fromCharCode(charNum)
    }
    return result
}

console.log(encodeString("neogcamp",2))

// 2. Given a sentence, return a sentence with first letter of all words as capital.

function toSentenceCase(str){
    const words = str.split(" ")
    // console.log(words)
    for(let i=0;i<words.length;i++){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }
    return words.join(" ")
    // return words
}

console.log(toSentenceCase("we are neoGrammers"))

// 3. Given an array of numbers, your function should return an array in the ascending order.

function sortArray(arr){
    arr.sort(function(a,b){
        return a-b
    })
    return arr
}
console.log(sortArray([100,83,32,9,45,61]))

console.log("suman")

// 4. Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.

function reverseCharactersOfWords(str){
    const words = str.split(" ")
   
    for(let i=0;i<words.length;i++){
        // console.log(words[i])
        let newString = "" 
        for(let j=words[i].length-1;j>=0;j--){
            newString += words[i][j]
        }
        words[i] = newString
    }
    return words.join(" ")
}
console.log(reverseCharactersOfWords('we are neoGrammers'))