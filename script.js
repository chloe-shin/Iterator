const inventors = [
  'Albert Einstein',
  'Issac Newton',
  'Galileo Galilei',
  'Marie Curie',
  'Johannes Kepler',
  'Nicolaus Copernicus',
  'Max Planck',
  'Katherine Blodgett',
  'Ada Lovelace',
  'Sarah E. Goode',
  'Lise Meitner',
  'Hanna Hammarstrom'
];
 
  inventors.map ((inventor,i) => console.log ('hello', inventor, inventor[i]))

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

let startwithA = inventors.filter ((inventor) => inventor.split ('')[0] === "A");
console.log ('names start with A are ', startwithA);

let containN = inventors.filter ((inventor) => inventor.split ('').includes ('n'));
console.log ('names contain n are', containN); 

let sameLetter = inventors.filter ((inventor) => {
    const chars = inventor.split ('');
    let isRepeated = false;
    chars.filter((char,i) => {
        const yesRepeated = char === chars[i+1]
        if (yesRepeated) isRepeated = true;
    })
    return isRepeated;
  })
console.log ('names which same letters are repeated are', sameLetter);

let oddN = numbers.filter ((number) => number % 2 == 1);
console.log ('odd numbers are', oddN);

let twoDigit = numbers.filter ((number) => number >= 10 && number <= 99 == true);
console.log ('two digit numbers are', twoDigit);

inventors.map ((inventor) => console.log ('hello', inventor)); //see all inventors name

let firstName = inventors.map ((inventor) => inventor.split (' ')[0]      );
console.log ('first names are', firstName);

let legthOfName = inventors.map ((inventor) => inventor.split ('').length);
console.log ('legth of each names are', legthOfName);

let uppercaseName = inventors.map ((inventor) => inventor.toUpperCase());
console.log ('the uppercase name of inventors are', uppercaseName);

let initialLetter = inventors.map ((inventor) => inventor.split('')[0]);
console.log ('the initial letter of inventors are', initialLetter);

let multiple100 = numbers.map ((number) => number*100);
console.log ('multiple 100 to every numbers', multiple100);

let powersOfTwo = numbers.map ((number, i) => number*2 ) 
console.log ('numbers powers of two', powersOfTwo)

let alphabetical = inventors.sort ();
console.log ('alphabetical name', alphabetical);

let reverse = inventors.reverse (inventor => inventor.sort.reverse);
console.log ('reverse alphabetical name', reverse)



let lengthSort = inventors.map ((inventor) => inventor.length)
console.log ('define length', lengthSort);

console.log ('sort length', inventors.sort((inventor1, inventor2) => {
  if (inventor1.length > inventor2.length) {
    return 1
  } else if (inventor1.length < inventor2.length) {
    return -1
  } else {
    return 0
  }
}));


let sortbyLength = inventors.sort((inventor1, inventor2) => {
  return inventor1.length - inventor2.length
});  

console.log('sort by length', sortbyLength)

let sortbyLengthReverse = inventors.reverse((inventor1, inventor2) => {
  return inventor1.length - inventor2.length
});

console.log ('sort by length and reverse it', sortbyLengthReverse);


// let sum = numbers.reduce ((total, num) => {console.log ('total',total, 'num',num)
// return total})

let sum = numbers.reduce ((total, num) => total + num);
console.log ('Total sum number is', sum);

let sumEvenNum = numbers.reduce ((total,num) => 

{ console.log ("total", total,"num", num)
  if (num % 2 == 0){
     return total+num 
  } else {
    return total;
  } 
}, 0)
// const sumEvenNum = nums.reduce ((total, num) => num % 2 === 0 ? total + num : total, 0)
console.log ('Sum all even number', sumEvenNum);


let firstNamee = inventors.map ((inventor) => inventor.split (' ')[0]);
firstNamee.reduce ((total,num) => total + num)
console.log ('firstname', firstNamee)

let yletter = inventors.some ((inventor) => inventor.split ('') == 'y')
console.log ('Any name has y letter?', yletter)

let eletter = inventors.every ((inventor) => inventor.split ('') == 'e' )
console.log ('Every name has e letter?', eletter)

let fourletter = inventors.every ((inventor) => firstNamee.length > 4)
console.log ('Every first name is longer than 4 letter?', fourletter);


let middleName = inventors.find ((inventor) =>  inventor.split(' ').length >= 3)
console.log ('which name has middle name?', middleName);


let noMiddleName = inventors.filter ((inventor) => inventor!=middleName)
console.log ('Who doesnt have middle name?', noMiddleName)

