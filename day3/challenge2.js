const fs = require('fs');

const checkSlop = (parsedData, incrementX, incrementY) => {
  let nbTrees = 0;
  let x = 0;

  for (let y = 0; y < parsedData.length; y += incrementY) {
    const length = parsedData[y].length;

    if (x >= length) {
      x -=  length;
    }
    if (parsedData[y].charAt(x) === '#') {
      nbTrees ++;
    }
    x += incrementX;
  }
  return nbTrees;
}

const checkSlops = (arrayData) => {
  const res1 = checkSlop(arrayData, 1, 1);
  const res2 = checkSlop(arrayData, 3, 1);
  const res3 = checkSlop(arrayData, 5, 1);
  const res4 = checkSlop(arrayData, 7, 1);
  const res5 = checkSlop(arrayData, 1, 2);
  console.log(res1 * res2 * res3 * res4 * res5);
}

fs.readFile('./puzzleInput.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const arrayData = data.split(/['\n']+/);
  checkSlops(arrayData);
});