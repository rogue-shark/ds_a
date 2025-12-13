/* Approach: Two Passes (prefix and suffix)
1. Create a result array initialized with 1s.
2. First Pass (Prefix Products):
   - Iterate through the input array from left to right.
   - Maintain a running product of all elements to the left of the current index.
   - Update the result array at each index with this running product.
3. Second Pass (Suffix Products):
   - Iterate through the input array from right to left.
   - Maintain a running product of all elements to the right of the current index.
   - Multiply the current value in the result array by this running product.
4. Return the result array.

Time Complexity: O(n)
Space Complexity: O(1) (excluding the output array)
*/

function productOfArrayExceptSelf(arr) {
    let result = (new Array(arr.length)).fill(1)

    //count pre product
    let productCounter = 1
    //update result arr with prefix products
    for (let prefix =1; prefix < arr.length; prefix++) {
        result[prefix] = productCounter
        productCounter *= arr[prefix] //updates the result arr in next itr
    }
    
    //reset product counter to store suffix product
    productCounter = 1

    //multiply suffix with existing prefix values (in results arr)
    for (let suffix = arr.length -2 ; suffix >= 0; suffix--) {
        productCounter *= arr[suffix+1]
        result[suffix] = productCounter * result[suffix]
    }

    return result
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productOfArrayExceptSelf([2, 3, 4, 5])); // Output: [60, 40, 30, 24]
