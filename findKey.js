
const findKey = function (obj, callback) {
  for (let key in obj) {
    if (callback(obj[key]) === true) {
      return key;
    }
  }
  return undefined;
};


