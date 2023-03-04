/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const charFromS = s[i];
    // find where charFromS repeats in s, starting from charFromS's location.
    const charFromSLocations = [];
    for (let k = i + 1; k < s.length; k++) {
      if (s[k] === charFromS) charFromSLocations.push(k)
    }

    // Do the same for t
    const charFromT = t[i];
    const charFromTLocations = [];
    for (let k = i + 1; k < t.length; k++) {
      if (t[k] === charFromT) charFromTLocations.push(k)
    }

    //console.log(charFromS, charFromSLocations);
    //console.log(charFromT, charFromTLocations)

    // Check if the two arrays are deeply equal. If they're not, cannot be iso.
    for (let k = 0; k < charFromSLocations.length; k++) {
      if (charFromSLocations[k] !== charFromTLocations[k]) return false;
    }
  }
  // If we made it here, must be true
  return true
};

const test1 = isIsomorphic('add', 'egg');
const test2 = isIsomorphic('foo', 'bar');
const test3 = isIsomorphic('title', 'paper');
const test4 = isIsomorphic('apple', 'dyyki');

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)