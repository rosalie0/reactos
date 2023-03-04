var isIsomorphic = function(s, t) {
  if (s.length!==t.length) return false;
  let sObj = {};
  let tObj = {};
  for (let i = 0; i <s.length; i++) {
    let sChar = s.charAt(i);
    let tChar = t.charAt(i);
    console.log(sObj, tObj)
    if (sObj[sChar] !== tObj[tChar]) return false;
    sObj[sChar] = i+1;
    tObj[tChar] = i+1;
  }
  return true;
}
const test1 = isIsomorphic('add', 'egg');
const test2 = isIsomorphic('foo', 'bar');
const test3 = isIsomorphic('title', 'paper');
const test4 = isIsomorphic('applep', 'dyykix');

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)