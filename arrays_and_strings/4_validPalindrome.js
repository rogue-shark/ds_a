//2 pointers
function validPalindrome(s) {
    s = s.toLowerCase();
  let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
        return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(validPalindrome("teneT")); // true
console.log(validPalindrome("te0n0eT")); // true