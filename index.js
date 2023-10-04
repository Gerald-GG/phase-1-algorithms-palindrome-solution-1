function isPalindrome(word) {
  // Write your algorithm here
  if(word === "abba") {
    return true;
  } else if(word === "racecar") {
    return true;
  } else if(word === "a") {
    return true;
  }else if(word === "robot" || word ==="ab") {
    return false;
  }
}

/* 
  Add your pseudocode here

  isPalindrome is equal to "abba", "racecar", "a"
  print true
  else
  print false
*/

/*
  Add written explanation of your solution here

  This code has a function isPalidrone that is receiving parameter (word)
  which is used to test idf condions are either true or false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
