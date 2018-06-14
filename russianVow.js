'use strict'
let n = 0;
let arr = [];
const arrVow = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
function counterVowel(str){
  str = str.toLowerCase();
  arr = str.split('');
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arrVow.length; j++){
      if (arr[i] === arrVow[j]){
        ++n;
      }
    }
  }
  return n; 
}
console.log(counterVowel('ААА'));