import numRef from './assets/number.json';

export function numToWord(num) {
  return numRef.reduce((accum, ref) => {
      return ref.num === num ? ref.word : accum;
    }, '');
}

export function wordToNum(word) {
  return numRef.reduce((accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
}

