//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: (str) => {
      let arr = str.split('')
      let reverseStr = arr.reverse().join('')
      return reverseStr
  },


  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: (arr) => {
    let filteredArr = arr.filter((item, index, arr) => {
      return (arr.indexOf(item) === index)
    })
    return filteredArr
  },
  // removeDups: (arr) => {
  //   let filteredArr = []
  //   for(let i = 0; i < arr.length; i++){
  //     if(!filteredArr.includes(arr[i])){
  //       filteredArr.push(arr[i])
  //     }
  //   }
  //   return filteredArr
  // },



  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: (str) => {
    let arr = str.split(' ')
    for(let i = 0; i < arr.length; i++){
      arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
    }
    return arr.join(' ')
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: (str) => {
    let vowelCount = 0
    let arr = str.toLowerCase().split('')
    for(let i = 0; i < arr.length; i++){
      let letter = arr[i]
      if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        vowelCount += 1
      }
    }
    return vowelCount
  },


  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: (num) => {
    let prime = true
    if(typeof(num) !== 'number' || num < 0){
      prime = false
    }
    for(let i = 2; i < num; i++){
      if(num % i === 0 && num !== 2){
        prime = false
      }
    }
    return prime
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
}
