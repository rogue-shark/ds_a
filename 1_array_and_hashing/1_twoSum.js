/* Approach :
Pattern : Frequncy Counter  -> use map

    check diff = target - currVaue
     if found ->  return  [ diff idx from map, currIdx ]
     else set map ->  ( currValue, currIdx )
*/
/* Approach:
Pattern: Frequency Counter (hash-map / complement lookup)

- Use a Map to store previously seen values mapped to their indices
- For each element compute `diff = target - value` and check the Map
- If `diff` found -> return [indexOf(diff), currentIndex]
- Otherwise store current value -> index in the Map
- If no pair found -> return []
*/

function twoSum(arr, target) {
    if (!Array.isArray(arr)) throw new TypeError('First argument must be an array');
    if (typeof target !== 'number' || Number.isNaN(target)) throw new TypeError('Second argument must be a number');

    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        const diff = target - value;

        if (map.has(diff)) return [map.get(diff), i];

        map.set(value, i);
    }

    return [];
}

module.exports = twoSum;

// console.log(twoSum([2,7,12,5,3], 9));
