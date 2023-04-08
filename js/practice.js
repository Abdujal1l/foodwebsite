'use strict';
/**Задачи:

1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...

2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

Пример:

showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

Пример:

setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray);
 */
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
return arr.filter(film => film.rating >= 8);
}

console.log(showGoodFilms(films));
function showListOfFilms(arr) {
    return arr.reduce((acc, curr) => `${typeof(acc) === 'object' ? acc.name : acc} , ${curr.name}`);}
    


console.log(showListOfFilms(films));





function setFilmsIds(arr) {

    return arr.map((item, i )=>{
            console.log(item);
            item.Id = i + 1;
            return item;
       
    });
    
}

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const m = setFilmsIds(films);
console.log(m);


/**Задачи:

1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

Пример:

getPositiveIncomeAmount(funds) => 13300

2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

Пример:

getTotalIncomeAmount(funds) => -500 */

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter((item )=> item.amount > 0 ).reduce((acc, current) => acc + current.amount, 0);
};
getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0 ) ? data.reduce((acc , current) => acc + current.amount, 0) : getPositiveIncomeAmount(funds);
};
getTotalIncomeAmount(funds)