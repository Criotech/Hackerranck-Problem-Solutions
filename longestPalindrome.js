var longestPalindrome = function(s) {
    if (s.length===1){
      return s
    }
    let i = 0;
    let j = 0;
    let prev =0;
    let max = 0;
    let result;
    
  function checkPalindrome(string) {
  
    // find the length of a string
    const len = string.length;
  
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
  
        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
     if (prev===0){
      prev = string.length;.
      max = string.length;
      result = string
    }
    if (len>max) {
      result = string;
      max = string.length;
    }
    return true;
  }
  
  while(i<s.length) {
  j++;
  if (j===s.length) {
    j = i + 1;
    i = i+1;
  }
  checkPalindrome(s.slice(i, j+1))
  }
  return result
  };
  
  console.log(longestPalindrome('babad'))
  