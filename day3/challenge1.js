const fs = require('fs');

const checkSlop = (parsedData) => {
  let nbTrees = 0;
  let x = 0;

  for (let y of parsedData) {
    if (x >= y.length) {
      x -= y.length;
    }
    if (y.charAt(x) === '#') {
      nbTrees ++;
    }
    x += 3;
  }
  console.log(nbTrees);
}

fs.readFile('./puzzleInput.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const arrayData = data.split(/['\n']+/);
  checkSlop(arrayData);
});