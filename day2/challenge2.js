import { readFile } from 'fs';

const checkPasswords2 = (parsedData) => {
  let nbValidPasswords = 0;
  for (let array of parsedData) {
    const pos1 = parseInt(array[0], 10);
    const pos2 = parseInt(array[1], 10);
    const char = array[2];
    const string = array[3];
    if (string.charAt(pos1 - 1) !== string.charAt(pos2 - 1) && (char === string.charAt(pos1 - 1) || char === string.charAt(pos2 - 1))) {
      nbValidPasswords ++;
    }
  }
  console.log(nbValidPasswords);
}

readFile('./puzzleInput.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const arrayData = data.split(/[-: '\n']+/);
  const parsedData = arrayData.map((e, i) => { 
    return i % 4 === 0 ? arrayData.slice(i, i + 4) : null; 
  }).filter(e => { return e; });

  checkPasswords2(parsedData);
});