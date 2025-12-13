/* 2 pointers
https://steadbytes.com/container-with-most-water-key-idea-visualisation.png

- Take the minimum height between the two pointers?
   - B/C the water level is limited by the shorter line
- Calculate the area (width * height)
- Move the pointer pointing to the shorter line inward
   - B/C moving the taller line inward won't help increase the area
- Repeat until the two pointers meet
*/

function containerWithMostWater (heights) { 
    //pointers
    let left = 0
    let right = heights.length - 1
    let maxArea = 0

    while (left < right) {
        const currWidth = right - left
        const currHeight = Math.min(heights[left], heights[right])
        const currArea = currHeight * currWidth

        maxArea = Math.max(currArea, maxArea)
        if (heights[left] < heights[right]) left ++
        else right --
    }

    return maxArea
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(containerWithMostWater([1,1])); // Output: 1
console.log(containerWithMostWater([4,3,2,1,4])); // Output: 16
console.log(containerWithMostWater([1,2,1])); // Output: 2