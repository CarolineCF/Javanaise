var input = 'Yuraima';
 input = input.toLowerCase();
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var resultArray = [];


for (let i = 0; i < input.length; i++) {
    
    let test = vowels.indexOf(input[i]);
    if (test > - 1) {
        resultArray.push(input[i]);
    }
}
console.log('la traduction du mot est : ' + resultArray.join('').toUpperCase());


console.log('exo-5');