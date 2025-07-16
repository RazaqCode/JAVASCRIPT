function isBalanced(s) {
  let stack = [];
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.length === 0;
}

// Example
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
