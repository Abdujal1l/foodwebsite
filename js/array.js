'use strict';

//filter

const countrys = ['uzbekiston', 'tadjikiston', 'russia'];

const muslimCountrys = countrys.filter(country => {
    return country.length > 7;
});

console.log(muslimCountrys);

const names = ['mike', 'sam' , 'jonas', 'pet' , 'smith'];

const shortNames = names.filter((name) =>{
    return name.length < 4;
});

console.log(shortNames);

//map 

let answers = ['ivAn' , 'heLEn' , 'MiKel'];

answers = answers.map(item => item.toLowerCase());

const lovercaseAnswers = answers.map((answer) => {
    return answer.toLowerCase();
});

const toUpperCase = answers.map(answer => answer.toUpperCase());
console.log(answers);
console.log(lovercaseAnswers);
console.log(toUpperCase);

//every/some 

const someArray = [ 'antony' , 5, 'mike'];

console.log(someArray.some(item => typeof(item) === 'number')); //true

console.log(someArray.every(item => typeof(item) === 'number')); //false


//reduce 

const arr = [4, 5 ,1, 3, 2, 6];
//sum 0 , current 4 
//sum 4 , current 5
//sum 9 , current 1
//sum 10 , current 3
//sum 13 , current 2
//sum 15 , current 6
//sum 21 , 

const res = arr.reduce((sum, current) => {
    return sum + current;
});

console.log(res);

const arrFruits = ['apple' , 'granade', 'ananas', 'kiwi'];

const allFruits = arrFruits.reduce((accumulator , currentValue) => `${accumulator},${currentValue} `);

console.log(allFruits);

//practice

const obj = {
    ivan: 'person' ,
    ann: 'person' ,
    dog: 'animal' ,
    cat: 'animal'
};

const newArray = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);


//выводы
// если мы знвем какие методы есть у массивов и как сделать из обЪекта массив то можно решить любую задачу быстрее 
// имутабельность и методы можно запускать по цепочке 
