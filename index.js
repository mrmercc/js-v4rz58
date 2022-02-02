// Import stylesheets
import './style.css';

let array1 = ['a', 'b', 'c', ['x', 'u']];
let array2 = [1, 2, 3, 4, 5, 6];

let testString = 'liMeSHArp DeveLoper TEST';
let anotherString = 'In the SEARCH OF INcreDIBle';

function repeatItems(items, iterationCount = 3) {
  if (!Array.isArray(items)) {
    throw new Error('Please provide an array!');
  }
  items = items.flat();
  return Array(iterationCount).fill(items).flat();
}

/* function repeatItems(items, iterationCount = 3) {
  if (!Array.isArray(items)) {
    throw new Exception('please provide an array!');
  }
  let repeat = [];
  for (let i = 0; i < iterationCount; i++) {
    repeat.push(items);
  }
  return (repeat = [].concat.apply([], repeat));
} */

// if (typeof myVar === 'string' || myVar instanceof String)

function removeAndCapitalizeWord(word) {
  if (typeof word !== 'string') throw new Error('Please enter valid string');
  let pattern = /[aeiou]/gi;
  word = word.replace(pattern, '').toLowerCase();
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}

console.log(repeatItems(array1));
console.log(repeatItems(array2));

console.log(removeAndCapitalizeWord(testString));
console.log(removeAndCapitalizeWord(anotherString));
