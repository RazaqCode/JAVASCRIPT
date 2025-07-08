function moveZeros(arr) {
  let result = arr.filter(num => num !== 0); // Keep non-zeros
  let zeros = Array(arr.length - result.length).fill(0); // Add zeros
  return result.concat(zeros);
}

let arr = [0, 1, 0, 3, 12];
console.log(moveZeros(arr)); // Output: [1, 3, 12, 0, 0]
