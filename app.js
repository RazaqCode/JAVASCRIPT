function countPairsWithSum(arr, target) {
  let count = 0;
  let map = {};

  for (let num of arr) {
    let complement = target - num;
    if (map[complement]) count += map[complement];
    
    map[num] = (map[num] || 0) + 1;
  }

  return count;
}

// Example
console.log(countPairsWithSum([1, 5, 7, -1, 5], 6)); 
// Output: 3 (pairs: (1,5), (7,-1), (1,5 again))
