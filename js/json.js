'use strict' 

const person = {
    name: 'alex',
    tel: '33333',
    parents: {
        mom: 'olha',
        dad: 'vitali'
    }
};


const clone = JSON.parse(JSON.stringify(person));
person.parents = [];
console.log(person);
console.log(clone);