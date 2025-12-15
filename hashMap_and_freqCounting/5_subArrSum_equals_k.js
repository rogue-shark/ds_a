function subArraySumEqualsK(arr, k) {
    let count = 0;
    for (let i=0; i < arr.length; i++) {
        let sum = 0
        for (let j=i; j < arr.length; j++) {
            sum += arr[j]
            if (sum === k) count ++
        }
    }

    return count
}

console.log(subArraySumEqualsK([1, 2, 3], 3)); // 2
console.log(subArraySumEqualsK([1, 1, 1], 2)); // 2