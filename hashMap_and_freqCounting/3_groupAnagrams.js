function groupAnagrams(strs) {
    const map = new Map()

    for (let str of strs) {
        const key = str.split('').sort().join('')
        key

        if (!map.has(key)) map.set(key, [])
        map.get(key).push(str)
    }
    map
    return Array.from(map.values())
} 

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) 
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]];
