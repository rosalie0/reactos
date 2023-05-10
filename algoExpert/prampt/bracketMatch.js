function bracketMatch(text) {
  // your code goes here
  // stack of openners, stack of closers
  const openners = [];
  const closers = [];

  // iterate through text
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    // if its an openner, push it onto openner stack
    if (char === "(") openners.push(char);
    // if its a closer...
    else {
      // and openners.length != 0, pop off openners
      if (openners.length) openners.pop();
      // else, push onto closer stack
      else closers.push(")");
    }
  }

  return openners.length + closers.length;
}

function bracketMatch(text) {
  // your code goes here
  // stack of openners, stack of closers
  let openners = 0;
  let closers = 0;

  // iterate through text
  for (let i = 0; i < text.length; i++) {
    // if its a closer....
    if (text[i] === ")") {
      // and openners.length != 0, pop off openners
      if (openners) openners--;
      else closers++; // else, push onto closer stack
    }
    // if its an openner, push it onto openner stack
    else openners++;
  }

  return openners + closers;
}
