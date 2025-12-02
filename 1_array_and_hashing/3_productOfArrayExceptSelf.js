/* Approach
Pattern : Prefix and Suffix

- prefix - form a array with product of previous ele wrt current (start @i=1, multiply @i-1)
- suffix - form a array with product of next ele wrt current (start @i=size-2, multiply @i+1)
- result = prefix[i] * suffix[i]

Working ==================================================
eg: nums = [2, 3, 4, 5]
    prefix = [1, 1, 1, 1]
    suffix = [1, 1, 1, 1]
    size = nums.length

@Prefix     start @i=1
Itr 1 ---------------------------------------------
i = 1      ->    nums[0] * prefix[0]  i.e. 2 * 1
prefix[1]  ->    [1, 2, 1, 1]

Itr 2 ---------------------------------------------
i = 2      ->    nums[2] * prefix[2]  i.e. 3 * 2
prefix[2]  ->    [1, 2, 6, 1]

Itr 3 ---------------------------------------------
i = 3      ->    nums[0] * prefix[0]  i.e. 4 * 6
prefix[3]  ->    [1, 2, 6, 24]


@Suffix     start @i = (size -1) - 1 = size - 2
Itr 1 ---------------------------------------------
i = 2      ->    nums[2] * prefix[2]  i.e. 5 * 1
suffix[2]  ->    [1, 1, 5, 1]

Itr 2 ---------------------------------------------
i = 1      ->    nums[1] * prefix[1]  i.e. 4 * 5
suffix[2]  ->    [1, 20, 5, 1]

Itr 3 ---------------------------------------------
i = 0      ->    nums[0] * prefix[0]  i.e. 3 * 20
suffix[0]  ->    [60, 20, 5, 1]
*/

function productOfArrayExceptSelf(arr) {
 const size = nums.length
        const prefix = Array(size).fill(1)
        const suffix = Array(size).fill(1)
        const result = []

        //  form prefix array
        for (let i = 1; i < size; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1]
        }

        //  form suffix array
        for (let i = size - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }

        //  form result  array
        for (let i = 0; i < size; i++) {
            result.push(prefix[i] * suffix[i])
        }

        return result       
}

console.log(productOfArrayExceptSelf([2, 3, 4, 5]));
