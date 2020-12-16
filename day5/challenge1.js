const { readFile } = require('fs');

const getHighestSeatId = (seatsID) => {
  console.log(Math.max(...seatsID));
}

const getSeats = (range, parsedData) => {
  
  const seatsID = parsedData.map(string => {
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
    return [column[0] + row[0] * 8];
  })
  getHighestSeatId(seatsID);
}

readFile('./puzzleInput.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const arrayData = data.split('\n');
  getSeats([7, 127], arrayData);
  // getSeats([7, 127], ['FBFBBFFRLR'])
});