function firstUniqueChar(s) {
    const map = {}

    for (let char of s) {
        map[char] = (map[char] || 0) + 1
    }
    
    for (let key in map) {
        if (map[key] === 1) return s.indexOf(key)
    }

    return -1
}

console.log(firstUniqueChar("loveleetcode")); // Output: 2
console.log(firstUniqueChar("aabb")); // Output: -1
