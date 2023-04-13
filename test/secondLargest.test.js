// FUNCTION TO TEST:
function findSecondLargest(arr) {
  // temps to track 1st and 2nd largest
  // start value of null for each
  let first,
    second = null;
  // iterate through array
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current < first) {
      const temp = first; // so we dont lose this value
      first = current; // our new largest is current
      second = temp; // prev largest gets bumped down to 2nd place
    } else if (current < second) {
      second = current;
    }
    // compare it to 1st and then adjust
    // compare it to 2nd and then adjust
  }
  // return 2nd
  return second;
}

// **************** TESTS **************** //
describe("findSecondLargest", () => {
  it("returns null for an array with only 1 element", () => {
    expect(findSecondLargest([5])).toBe(null);
  });

  it("returns 2nd largest for an array with 2 elements", () => {
    expect(findSecondLargest([1, 2])).toBe(1);
  });

  it("returns 2nd largest even when the array has repeated numbers", () => {
    expect(findSecondLargest([4, 4, 4, 4])).toBe(4);
  });

  it("returns 2nd largest from an array of 5 different, unsorted numbers", () => {
    expect(findSecondLargest([3, 5, 2, 10, 7])).toBe(7);
  });
});
