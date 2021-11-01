const assertArraysEqual = require("../eqArrays");


assertArraysEqual(["1", "2", "3"], ["1", "2", "4"]); // Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Fail