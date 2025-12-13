/*
Approach:
1. Create a frequency map to count occurrences of each number.
2. Convert the frequency map into an array of [number, frequency] pairs.
3. Sort the array based on frequency in descending order.
4. Extract the top k elements from the sorted array and return them.    

Complexity Analysis: 
Time Complexity: O(N log N) due to sorting the frequency array.
Space Complexity: O(N) for storing the frequency map and the frequency array.

*/

function topKFrequent(nums, k) {
    //1. store frequency in map {} -> num : freq
    let map = {}

    for (let num of nums) {
        if(!map[num]) map[num] = 1
        else map[num]++ 
    }
    
    //2. store [num, freq] in array
    let numFreqArr = []
    for (let key in map) {
        // console.log(typeof key)
        numFreqArr.push([Number(key), map[key]])
    }

    //3. sort the array by freq (desc) i.e. the most freq ones come first
    numFreqArr = numFreqArr.sort((a, b) => b[1] - a[1])

    //4. loop over array to find the "k" most occuring ones
    let result = []
    for (let i=0; i < k; i++) {
        result.push(numFreqArr[i][0])
    }

    return result
}

console.log(topKFrequent([1,1,1,2,2,3], 2)); 
// Output: [1, 2]
