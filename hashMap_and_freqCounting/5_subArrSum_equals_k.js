// Brute Force Approach:
function subArraySumEqualsK(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) count++;
    }
  }

  return count;
}

// Optimized Approach using HashMap:
function subArraySumEqualsKOptimized(nums, k) {
    const map = new Map()
    let sum = 0
    let count = 0
    //init for sum = 0
    map.set(0, 1)

    for (let num of nums) {
        sum += num
        const diff = sum -k

        if (map.has(diff)) count += map.get(diff)
        //setting sum and count
        if (map.has(sum)) map.set(sum, map.get(sum) + 1)
        else map.set(sum, 0)
    }
    
    return count
}

console.log(subArraySumEqualsK([1, 2, 3], 5)); // 2
console.log(subArraySumEqualsK([1, 1, 1], 2)); // 2
