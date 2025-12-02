/*
Approach: Sliding Window
Pattern : Sliding Window

Steps:


Complexity Analysis:
Time Complexity: O(N) where N is the number of elements in the input array arr. We traverse the array once to calculate the sum of each subarray of size windowSize.
Space Complexity: O(1) as we are using a constant amount of extra space regardless of the input size.

*/

function maxSumSubarray(arr, windowSize = 4) {
    // If array is shorter than window size, no valid subarray exists
    if (arr.length < windowSize) return null; 

    let windowSum = 0;
    let maxSum = 0
    // Calculate the sum of the first window
    for (let i = 0; i < windowSize; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum; //at this point this is the max sum

    // Slide the window and update maxSum
    for (let i = windowSize; i < arr.length; i++) {
        /* New / curr window sum 
        Subtract the element leaving, add the element entering
        */
        windowSum = windowSum - arr[i - windowSize] + arr[i]; 
        // Update maxSum if current windowSum is greater
        maxSum = Math.max(maxSum, windowSum); 
    }

    return maxSum;
}

console.log(maxSumSubarray([-1, -2, -3, -4, -5, 10], 2)); 
