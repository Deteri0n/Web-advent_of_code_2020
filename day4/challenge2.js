const { readFile } = require('fs');

const validateLength = (string, int) => string.length === int;

const validateYear = (year, min, max) => min <= parseInt(year, 10) && parseInt(year, 10) <= max;

const validateHeight = (height) => {
  const unit = field.slice(-2);
  const value = parseInt(field.slice(0, field.length - 2));
  
  if (unit === 'in') {
    return 59 <= value && value <= 76;
  } else if (unit === 'cm') {
    return 150 <= value && value <= 193;
  }
  return false;
};

const validateHairColor = (color) => {
  if (color.length !== 7) {
    return false;
  }
  if (/^#[0-9a-f]{6}/.test(color)) {
    return true;
  }
  return false;
};

const validateEyeColor = (color) => {
  return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(color);
};

const validateID = (ID) => {
  if (color.length !== 9) {
    return false;
  }
  if (/[0-9]{9}/.test(color)) {
    return true;
  }
  return false;
};

const validatePassword = (passport) => {
  
  const validations = {
    byr: false,
    iyr: false,
    eyr: false,
    hgt: false,
    hcl: false,
    ecl: false,
    pid: false,
    cid: true
  };

  passport.forEach((f) => {
    const encod = f.slice(0,3);
    const field = f.slice(4);

    switch(encod) {
      case 'byr':
        validations[encod] = validateLength(field, 4) && validateYear(field, 1920, 2002);
        break;
      case 'iyr':
        validations[encod] = validateLength(field, 4) && validateYear(field, 2010, 2020);
        break;
      case 'eyr':
        validations[encod] = validateLength(field, 4) && validateYear(field, 2020, 2030);
        break;
      case 'hgt':
        validations[encod] = validateHeight(field);
        break;
      case 'hcl':
        validations[encod] = validateHairColor(field);
        break;
      case 'ecl':
        validations[encod] = validateEyeColor(field);
        break;
      case 'pid':
        validations[encod] = 
    }
  });
}

const checkPassports = (parsedData) => {
  let nbCorrectPasswords = 0;

  parsedData.forEach((p) => {
    
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