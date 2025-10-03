const palindrome = (str) => {
   
  const reverseStr = str.split('').reverse().join("");
  return str === reverseStr;
};

console.log(palindrome("level"));
console.log(palindrome("hossein"));


