function calculator(a, b, operator) {
  switch(operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Cannot divide by 0';
    default: return 'Invalid operator';
  }
}

console.log(calculator(10, 5, '+')); // 15
