function tournamentWinner(competitions, results) {
  // Write your code here.
  // key: value
  // team: points
  const record = {};
  let teamWithMostPoints = null;
  let mostPoints = 0;

  for (let i = 0; i < results.length; i++) {
    // first determine who won
    // non-zero result means home/team0 won.
    const winner = results[i] ? competitions[i][0] : competitions[i][1];

    // if we already have an entry for this team, +3 it.
    // if we don't, start it with 3.
    if (record[winner]) record[winner] += 3;
    else record[winner] = 3;

    // see if our max should be overwritten.
    if (record[winner] > mostPoints) {
      teamWithMostPoints = winner;
      mostPoints = record[winner];
    }
  }
  return teamWithMostPoints;
}
