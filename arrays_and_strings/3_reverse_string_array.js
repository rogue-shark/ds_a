function reverseStringArray(str) {
  let charArray = str.split("");

  let left = 0;
  let right = charArray.length - 1;

  while (left < right) {
    [charArray[left], charArray[right]] = [charArray[right], charArray[left]];

    left++;
    right--;
  }

  return charArray.join("");
}

function reverseStringArrayD (s) {
  return s.split('').reverse().join('')
}

console.log(reverseStringArrayD('interview'));

console.log(reverseStringArray("interview")); // Output: "weivretni"
console.log(reverseStringArray("Nemetshack")); // Output: "kcahstemeN"
