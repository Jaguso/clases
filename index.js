var x = 3;
const x = 3;



let x = 3; // -> int
let x = 3.45644 // ->
let x = 'soidjfos' // -> string
let x = [1, 2, 'soidj', false]; // -> array
let x = true; // -> boolean 
let x = {
    'firstElement': 'woeifwoiejf',
    'secondElement': 23,
    'thirdElement': 'Jordan'
} // -> object


function multiplyByThree(integer) {
    return 3 * integer;
}

console.log(multiplyByThree(5));


// Condicionales
'In even or odd' -> 'isEvenOrOdd'

function isEvenOrOdd(integer) {
    if (integer % 2 === 0) {
        return 'Es par';
    } 
    return 'Es impar';
}

(x <= y), (x >= y), (x > y), (x !== y)

if (condition1) {

} else if (condition2) {

} else {

}


function countChar(str) {
    if (str.length % 2 === 0) {
        return 'Es par';
    } 
    return 'Es impar';
}

console.log(countChar('so'))
console.log(countChar('sdodifjsd'))

const str = 'sodifj';
const str2 = `osidf ${str} soidfj`;



// Manipulación de arrays

let arr = [3984, 38, 'sidss', 2032];

arr.pop();  // -> regresa el ultimo elemento del array y lo quita
arr.shift() // -> saca el primer elemento del array
arr.unshift(2) // -> mete al 2 como primer elemento del array
arr.push(elem) // -> agrega elem como ultimo elemento del array

let arr = [3984, 38, 'sidss', 2032];
console.log(arr.slice(0,3));

arr.splice()

const arr1 = [23, 3483, 309];
const arr2 = ['sd', 'soidjf', 'sdoi'];
const arr3 = arr1.concat(arr2);
const arr4 = arr1 + arr2;
console.log(typeof arr4);


let str = 'sodijfoso';
const arr = str.split('')
console.log(arr)

const str2 = arr.join('-')
console.log(str2)

parseInt(str)

// Funciones de strings

let str = 'sodijf';
str.toUpperCase();
str.toLowerCase();

// Funciones array (array functions)

const square = (number) => {
    return number ** 2;
}

const square = number => (number ** 2);

console.log(square(3))


/////////

// map()

let arr = [23, 345, 34, 0, 2];

let arr2 = arr.map(item => item ** 2);
console.log(arr2);

// filter()

let arr = [23, 345, 34, 0, 2];

let arr2 = arr.filter(item => item > 100);
console.log(arr2)



// Hacer una función que tenga de entrada un array de strings y que regrese el string de mayor longitud

// Hacer una función que tenga de entrada un string con varias palabra y de salida lo mismo en camelcase