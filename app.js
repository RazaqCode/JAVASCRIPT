const countPairsWithSum = (arr, target) => {
  const map = new Map();
  let count = 0;

  for (let num of arr) {
    let complement = target - num;
    if (map.has(complement)) count += map.get(complement);
    map.set(num, (map.get(num) || 0) + 1);
  }

  return count;
};

// Test
console.log(countPairsWithSum([1, 5, 7, -1, 5], 6)); 
// Output: 3
