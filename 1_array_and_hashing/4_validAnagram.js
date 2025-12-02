/*
Approach :
Pattern : Frequncy Counter  -> use map

- map = {}   i.e  map (char -> frequency)
- loop to set map using str1
- loop to decrement map using str2
   if char not found or freq = 0 -> return false
- finally return true (since everyrhing checks out)

Complexity :
- Time : O(n)
- Space : O(1)  -> since only lower case letters are used (26 letters)
*/

function validAnagram (str1, str2) {
  const map = {}

  if (str1.length !== str2.length) return false

  //set map using str1
  for (let char of str1) {
    if (!map[char]) map[char] = 1
    else map[char] ++
  }

  for (let char of str2) {
    if (!map[char]) return false
    map[char]--
  } 

  return true
}

console.log(validAnagram('abc', 'cba'));
