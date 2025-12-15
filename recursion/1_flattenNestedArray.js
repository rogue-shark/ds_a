function flattenNestedArray(nestedArray) {
    const result = [];

    for (let item of nestedArray) {
        if (Array.isArray(item)) result.push(...flattenNestedArray(item))
        else result.push(item)
    }

    return result
}

console.log(flattenNestedArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenNestedArray([[['a']], 'b', [['c', 'd']]])); // Output: ['a', 'b', 'c', 'd']

