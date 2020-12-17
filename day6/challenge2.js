const { readFile } = require('fs');

const getGroupAnswers = (groupe) => {
  // Creating the object holding the answers
  const form = {};
  for (var i = 0; i<26; i++) {
    form[String.fromCharCode(97 + i)] = true;
  }
  
  for (let answer in form) {
    let i = 0;
    while (form[answer] && i < groupe.length) {
      groupe[i].includes(answer) ? i++ : form[answer] = false; 
    }
  }
  return form;
}

const countGroupeAnswers = (parsedData) => {
  
  const nbAnswersArray = parsedData.map(groupe => Object.values(getGroupAnswers(groupe)).filter((v) => v === true).length)
  
  let nbAnswers = nbAnswersArray.reduce((a,b) => a + b);
  console.log(nbAnswers);
}

readFile('./puzzleInput.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const arrayData = data.split('\n\n');
  const parsedData = arrayData.map((e) => e.split(/[ '\n']+/));
  countGroupeAnswers(parsedData);
});