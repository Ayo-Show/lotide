const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");



middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 6, 4, 5]);