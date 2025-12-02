/* Approach
Pattern : Frequncy Counter

- map = new Map()
- store sortedString as key and value as Arrar<string> (which will contain strings that matches the key on sorting)
  if key not found -> create key : [] (empty arr)
  else get value from map and push the curr string to arr

  return Array of values from map

Complexity Analysis: 
- Time Complexity: O(NKlogK) 
    N is the number of strings in the input array strs
    K is the maximum length of a string in strs. This is because we iterate through each string (O(N)) and for each string, we sort it which takes O(KlogK) time.    
- Space Complexity: O(NK) The space complexity is O(NK) because in the worst case, all strings could be different and we would store all of them in the map. 
    Each string takes up to K space, and there are N strings.
*/

function groupAnagrams (strs) {
    const map = new Map() //store  sortedStr (key) : [ ]

    for (const str of strs) {
        const key = sortedString(str)

        if (!map.has(key)) map.set(key, [])  //if key not found create value as empty arr
        map.get(key).push(str)  // get value and push curr str to arr
    }

    return Array.from(map.values()) // return map vaues in as a Array

}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


function sortedString (arr) {
    return arr.split('').sort().join('')
}

console.log("eatat".split('').sort().join(''));
console.log("ate".split('').sort());

