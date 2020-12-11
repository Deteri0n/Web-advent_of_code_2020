import { readFile } from 'fs';

const checkPasswords = (parsedData) => {
  let nbValidPasswords = 0;
  for (let array of parsedData) {
    const lowerLim = parseInt(array[0], 10);
    const upperLim = parseInt(array[1], 10);
    const string = array[3];
    const regex = new RegExp(array[2], 'g');
    const matchedChar = string.match(regex) || [];
    if (lowerLim <= matchedChar.length && matchedChar.length <= upperLim) {
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

  checkPasswords(parsedData);
});