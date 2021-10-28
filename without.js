const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

  
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} is equal to ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} is not equal to ${array2}`);
  }
};

const without = function (allItems, excludeItems) {
  let result = []
  for (let item of allItems) {
    if (!excludeItems.includes(item)) {
      result.push(item);
      
    }
  }
  return result
}
      
   



assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"] )
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), [])