const mergeSortedArrays = (a, b) => {
  const merged = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    merged.push(a[i] < b[j] ? a[i++] : b[j++]);
  }

  return [...merged, ...a.slice(i), ...b.slice(j)];
};

// Test
console.log(mergeSortedArrays([1, 4, 6], [2, 3, 5])); 
// Output: [1, 2, 3, 4, 5, 6]
