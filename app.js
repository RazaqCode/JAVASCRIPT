const isBalanced = (str) => {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  for (let char of str) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if (pairs[char]) {
      if (stack.pop() !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
};

// Test
console.log(isBalanced("({[]})"));  // true
console.log(isBalanced("({[})"));   // false
