function isValid(s) {
  const stack = [];

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (char === ")" && last !== "(") return false;
      if (char === "]" && last !== "[") return false;
      if (char === "}" && last !== "{") return false;
    }
  }

  return stack.length === 0;
}

const data = isValid("(())");
console.log(data);
