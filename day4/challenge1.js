const { readFile } = require('fs');

const checkPassports = (parsedData) => {
  let nbCorrectPasswords = 0;

  parsedData.forEach((p) => {
    let validations = {
      byr: false,
      iyr: false,
      eyr: false,
      hgt: false,
      hcl: false,
      ecl: false,
      pid: false,
    };

    p.forEach((f) => {
      
      if (validations[f.slice(0,3)] === false) {
        validations[f.slice(0,3)] = true;
      }
    });

    if(!Object.values(validations).filter((e) => e === false).length) {
      nbCorrectPasswords++;
    }
  });
  console.log(nbCorrectPasswords);
}


readFile('./puzzleInput.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const arrayData = data.split('\n\n');
  const parsedData = arrayData.map((e) => e.split(/[ '\n']+/));
  checkPassports(parsedData);
});