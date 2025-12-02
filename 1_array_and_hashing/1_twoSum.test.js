const assert = require('assert');
const twoSum = require('./1_twoSum');

// Happy paths
assert.deepStrictEqual(twoSum([2,7,11,15], 9), [0,1]);
assert.deepStrictEqual(twoSum([3,2,4], 6), [1,2]);
assert.deepStrictEqual(twoSum([3,3], 6), [0,1]);

// Edge cases
assert.deepStrictEqual(twoSum([], 5), []);
assert.deepStrictEqual(twoSum([5], 5), []);

console.log('All twoSum tests passed');
