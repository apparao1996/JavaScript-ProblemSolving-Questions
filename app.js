// 1.1 Given an array of integers, find the largest product yielded from three of the integers

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

 function computeProduct(a){
     let n=a.length;
     let b=a.sort();
     return Math.max(b[0]*b[1]*b[n-1],b[n-3]*b[n-2]*b[n-1]);

 }

console.log(computeProduct(unsortedArray));
 
 //  1.2 Being told that an unsorted array contains (n - 1) of n consecutive numbers 
 //(where the bounds are defined), find the missing number in O(n) time
 var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

const arithematicSum= (upperBound*(upperBound+1))/2;

var sum = arrayOfIntegers.reduce(function(a, b){
    return a + b;
}, 0);

console.log(arithematicSum-sum);


// 1.3   1.3 Removing duplicates of an array and returning an array of only unique elements

var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

const set=new Set(array);
console.log([...set]);


// 1.4 Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];

function findLargestDifference(arr){
    let maxDiff = -1;
    let n=arr.length;

    let maxRight = arr[n-1];

    for (let i = n-2; i >= 0; i--) 
    { 
        if (arr[i] > maxRight) 
            maxRight = arr[i]; 
        else
        { 
            let diff = maxRight - arr[i]; 
            if (diff > maxDiff) 
            { 
                maxDiff = diff; 
            } 
        } 
    } 
    return maxDiff; 

}

console.log(findLargestDifference(array));


// 1.5  Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array other than itself. (Solve this in O(n) without division)

var firstArray = [2, 2, 4, 1];
var secondArray = [0, 0, 0, 2];
var thirdArray = [-2, -2, -3, 2];

var product = firstArray.reduce(function(a, b){
    return a * b;
}, 1);

firstArray.forEach(x => console.log(product *Math.pow(x,-1)));

// 1.6 Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

const first =new Set(firstArray);
const result =new Set();

secondArray.forEach(x=> {
    if(first.has(x))
    result.add(x);
}
);
console.log([...result]);


// 2.1 Given a string, reverse each word in the sentence "Welcome to this Javascript Guide!" should be become "emocleW ot siht tpircsavaJ !ediuG"

var string = "Welcome to this Javascript Guide!";

function ReverseString(str) { 
    return str.split('').reverse().join('') 
 } 
  
 console.log(ReverseString(string));


 // 2.2 Given two strings, return true if they are anagrams of one another "Mary" is an anagram of "Army"

 var firstWord = "Mary";
 var secondWord = "Army";
if(JSON.stringify(firstWord.sort)==JSON.stringify(secondWord.sort))
console.log("Given strings are anagrams of one each other");
else
console.log("Given Strings are not anagrams of not each other");


// 2.3 Check if a given string is a palindrome "racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("race Car")); // true

function isPalindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }

  // 2.4 Check if a given string is a isomorphic
  isIsomorphic("egg", 'add'); // true
  isIsomorphic("paper", 'title'); // true
  isIsomorphic("kick", 'side'); // false


  function isIsomorphic(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var map = {};
    for(var i = 0; i < str1.length; i++) {
        var a = str1[i]; 
        var b = str2[i];
        if (typeof map[a] === "undefined") {
            map[a] = b;

        // check for error in first tuple ("ABB", "XYZ")
        } else if (map[a] !== b) {
            console.log("Not Isomorphic");
            return false;
        }

        // check for error in second tuple ("ABC", "XYY")
        for (var key in map) {
            if (key !== a && b === map[key]) {
                console.log("Not Isomorphic");
                return false;
            }
        }
    }
    console.log("Given strings are Isomorphic");
    return true;
}


  







  
      
    
      
  
    


