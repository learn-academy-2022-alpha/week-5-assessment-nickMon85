// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

//1.function deCode()
//2. converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
//3. returns message
//  ReferenceError: deCode is not defined

//       28 |     const secretCodeWord3 = "Eccentric"
//       29 |     // Expected output: "3cc3ntr1c"
//     > 30 |     expect(deCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//          |     ^
//       31 |     expect(deCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//       32 |     expect(deCode(secretCodeWord3)).toEqual("3cc3ntr1c")
//       33 |   })

//       at Object.<anonymous> (code-challenges.test.js:30:5)

// Test Suites: 1 failed, 1 total
// Tests:
// Failed!!
describe("deCode", () => {

  it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
     const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(deCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(deCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(deCode(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})
//create a function named deCode
//must take in str as parameter str
//declared var newStr and used .replaceAll to convert "a" to  "4"
//declared newStr2; newStr3; newStr4 to replace e,i,o to "3", "1", "0" respectively
//returned newStr4 



const deCode =(str)=>{
    newStr1 =str.replaceAll(/a/gi,"4")
    //converts a =>4
    newStr2 =newStr1.replaceAll(/e/gi,"3")
    //converts e =>3
    newStr3 =newStr2.replaceAll(/i/gi, '1')
    //converts i=>1
    newStr4 =newStr3.replaceAll(/o/gi,"0")
    //converts o=>0 &returns string
    return newStr4
}
//str.replace(/([aeio])/g,'a':'4','e':'3', 'i':'1', 'o':'0')
//str.replace(/a/,'4');

// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.
// ● wordLetter › akes in an array of words and a single letter and returns all the words that contain that particular

//     ReferenceError: wordLetter is not defined

//       74 |     // Expected output: ["Cherry", "Blueberry", "Peach"]
//       75 |
//     > 76 |     expect(wordLetter(rrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
//          |     ^
//       77 |     expect(wordLetter(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//       78 |   })
//       79 | })

//       at Object.<anonymous> (code-challenges.test.js:76:5)

// Test Suites: 1 failed, 1 total
//Failed!
describe("wordLetter", () => {

  it("takes in an array of words and a single letter and returns all the words that contain that particular ", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]

    expect(wordLetter(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(wordLetter(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})
//create a function with params arr & search letter variable
//create a filter that searches array for a variable
//returns corrected case to filter!
//returns case to filter!

//create a function with params arr & search letter variable
const wordLetter= (arr, query)=> {
    //create a filter that searches array for a variable
    //returns corrected case to filter!
  return arr.filter(function(el) {
      //returns case to filter!
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}



// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
//    ReferenceError: findPairs is not defined

//       123 |
//       124 |
//     > 125 |     expect(findPairs(hand1)).toEqual( true)
//           |     ^
//       126 |     expect(findPairs(hand2)).toEqual(false)
//       127 |     expect(findPairs(hand3)).toEqual(false)
//       128 |   })

//       at Object.<anonymous> (code-challenges.test.js:125:5)

// Test Suites: 1 failed, 1 total
describe("findPairs", () => {

  it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false


    expect(findPairs(hand1)).toEqual(true)
    expect(findPairs(hand2)).toEqual(false)
    expect(findPairs(hand3)).toEqual(false)
  })
})
//1. Make a function
//2. Initially I was going to count the amount of pairs, you can have two pairs while and still be false, so im going to use the mode and the amount of pairs. If the mode, which is the most repeated number equals 5, and it still has to pairs, I believe I should still get a full house.
// 3. I'll need an iterator, variable for mode, and a variable for pairs.


const findPairs = (arr)=>{
    let counter = {};
    for(let i =0;i<arr.length;i++){
        counter[arr[i]] = counter[arr[i]]+1 ||0;
    }
    var pairCount = Object.keys(counter).reduce((acc,curr)=>{
      acc += Math.floor(curr/2)
      return acc;
    },0);
    let mode = Object.keys(counter).reduce((a,b)=>counter[a]> counter[b]? a:b);
    if(pairCount == 3 && mode == 5){
      return true;
    }else{
      return false;
    }
}


// b) Create the function that makes the test pass.
