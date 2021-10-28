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



const assertEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log(`✅✅✅ Assertion Passed: true`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: false`);
  }
};
  
  

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



const letterPositions = function(sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    const letter = sentence[i]
    if (results[letter]) {
      results[letter].push(i)
    } else {
      results[letter] = [i]
    }
  }


  return results;
};






assertArraysEqual(letterPositions("hello").e, [1]);