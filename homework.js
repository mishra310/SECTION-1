// prime number 1 to 100
for(let i = 1; i <= 100; i++) {

    let flag = true;
  
    // check if number is prime
    for(let j = 2; j < i; j++) {
      if(i % j === 0) {
        flag = false;
        break;
      }
    }
  
    // print the prime numbers
    if(i > 1 && flag) {
      console.log(i);
    }
  }


  //if number is palindrome

  function isPalindrome(num) {
    // convert the number to a string and split it into an array of digits
    let digits = num.toString().split("");
    
    // loop over the digits from both ends and compare them
    for (let i = 0, j = digits.length - 1; i < j; i++, j--) {
      if (digits[i] !== digits[j]) {
        return false;
      }
    }
    
    // if all digits match, the number is a palindrome
    return true;
  }
  
  // test the function with some example numbers
  console.log(isPalindrome(121)); // true
  console.log(isPalindrome(123)); // false

  //perfect square between 200 to 400

  for (let i = 14; i <= 20; i++) {
    let square = i * i;
    
    if (square >= 200 && square <= 400) {
      console.log(square);
    }
  }
  
  
  