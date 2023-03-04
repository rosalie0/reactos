// includes min, does not include max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Based on a game of 25 cards, returns a string that represents a valid, but random, board layout.
 * Example Output: 1312213212111131423233322
 * Team 1 (Often called Team Red) would have 9 cards (aka the number 1 is present nine times in the string)
 * Team 2 has eight cards.
 * Team 3 is the 'white' team, and has seven.
 * Team 4 is the 'black' team, and occurs only once.
 * @returns string of numbers
 */
function createRandomLayout() {
  let team1Pile = 9; // 9 '1' --> red card
  let team2Pile = 8; // 8 '2' --> blue card
  let team3Pile = 7; // 7 '3' --> white card
  let team4Pile = 1; // 1 '4' --> black card

  let randomLayout = [];
  while (randomLayout.length < 25) {
    // Roll the d4
    const randomInt = getRndInteger(1, 5);

    // If we 'rolled' a 1, pick from the red pile to slot into the string
    if (randomInt === 1 && team1Pile > 0) {
      team1Pile--;
      randomLayout.push(1);
    }

    if (randomInt === 2 && team2Pile > 0) {
      team2Pile--;
      randomLayout.push(2);
    }

    if (randomInt === 3 && team3Pile > 0) {
      team3Pile--;
      randomLayout.push(3);
    }

    if (randomInt === 4 && team4Pile > 0) {
      team4Pile--;
      randomLayout.push(4);
    }
  }
  return randomLayout;
}

console.log(createRandomLayout())
console.log(createRandomLayout())
console.log(createRandomLayout())
console.log(createRandomLayout())

