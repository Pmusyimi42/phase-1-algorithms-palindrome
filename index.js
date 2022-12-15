function isPalindrome(word) {
  // Write your algorithm here
  const lengthOfString = word.length;
  for(let i = 0; i < lengthOfString/2 ; i++) {
    if(word[i] === word[lengthOfString-1-i]){
      return true;
    }
    return false;
  }
}

/* 
  Add your pseudocode here
  find the length of a string
  loop through half of the string
  check if first and last characters of a string are the same.
  if the first and  last characters of a string are the same
  return true
  if the first and last characters of a string are not the same
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ear"));
}

module.exports = isPalindrome;
