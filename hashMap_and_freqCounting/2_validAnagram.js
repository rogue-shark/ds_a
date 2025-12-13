
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false
    const map = {}

    for (let char of str1) {
        map[char] ? map[char]++ : map[char] = 1
    }

    for (let char of str2) {
        if (!map[char]) return false
        map[char]--
    }
    
    return true
}

console.log(validAnagram("cinema", "iceman")); // true
console.log(validAnagram("hello", "billion")); // false