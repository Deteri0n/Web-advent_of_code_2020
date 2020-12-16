const { readFile } = require('fs');

const getMissingSeatID = (seats) => {
  const seatsID = seats.map(seat => seat[0] + seat[1] * 8);
  const seatsIDOrdered = seatsID.sort((a, b) => a - b);
  let i = 0;
  while (seatsIDOrdered[i + 1] === seatsIDOrdered[i] + 1) {
    i++;
  }
  console.log(seatsIDOrdered[i] + 1);
}

const getSeats = (range, parsedData) => {
  
  const seats = parsedData.map(string => {
    const column = [0, range[0]];
    const row = [0, range[1]];
    
    for (let l of string) {

      switch(l) {
        case 'F':
          row[1] -= Math.ceil((row[1] - row[0]) / 2);
          break;
        case 'B':
          row[0] += Math.ceil((row[1] - row[0]) / 2);
          break;
        case 'L':
          column[1] -= Math.ceil((column[1] - column[0]) / 2);
          break;
        case 'R':
          column[0] += Math.ceil((column[1] - column[0]) / 2);
          break;
      }
    }
    return [column[0], row[0]];
  })
  getMissingSeatID(seats);
}

readFile('./puzzleInput.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const arrayData = data.split('\n');
  getSeats([7, 127], arrayData);
  // getSeats([7, 127], ['FBFBBFFRLR'])
});