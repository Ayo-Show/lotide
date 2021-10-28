const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(str) {
  let letter = {};
  
  for (let character of str) {
    if (letter.hasOwnProperty(character)) {
      letter[character] += 1;
    } else {
      letter[character] = 1;
    }
  }
  return letter;  
}
  

console.log(countLetters("lighthouse"));