'use strict'


// function User (name ,id ){
//     this.name = name ,
//     this.id = id,
//     this.human = true,
//     this.hello = function (){
//         console.log(`hello ${this.name} your Id is ${this.id}`);
//     };
// }


// User.prototype.exit = function (){
//     console.log(`user ${this.name} gone`)
// }

// const Jalil = new User('Jalil', 24);
// //console.log(Jalil);
// Jalil.hello();
// const alex = new User ('alex', 32);
// //console.log(alex);
// alex.hello();

// Jalil.exit();

                            //context this 

// function showThis (a,b){
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }
//     console.log(sum());}

// showThis(4, 5);



// 1 normal function : this = window , but if the it is strict mode then this = undefined

// const obj = {
//     a:20 ,
//     b:15 ,
//     sum: function () {
        
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// 2 this(context) of objects metod = object   

// function User (name ,id ){
//         this.name = name ,
//         this.id = id,
//         this.human = true
//         // this.hello = function (){
//         //     console.log(`hello ${this.name} your Id is ${this.id}`);
//         // };
//     }
    
//     const alex = new User ('alex', 32);
// 3 this in functions constructors and classes = new object

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// const user = {
//     name: 'john'
// };

// sayName.call(user, 'smith');
// sayName.apply(user, ['smith'] );

// function count (num) {
//     return this* num ;
// }

// const double = count.bind(2);

// console.log(double(20));

// console.log(double(24));

//4 adds this to function and and creates new function when it is called : apply() bind() call() calls function in given context 

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// this.style.backgroundColor = 'red';
// } );


// const obj = {
//     num: 5,
//     sayNumber: function(){
//             const say = ()=> {
//                 console.log(this);
//             };
//             say();    
//     }
// }

// obj.sayNumber();

// const  double = a => a * 2;

// console.log(double(4));

// function args(a , b , ...others ){
    
//     let total = 0;
//     for(let i of others){
//         total += i;
//     }
//     return total;
// }

// console.log(args(1,2,34,45,11,8));

// function callSomething(thing = something()) {
//     return thing;
//    }
   
//    let numberOfTimesCalled = 0;
//    function something() {
//      numberOfTimesCalled += 1;
//      return numberOfTimesCalled;
//    }
   
//    callSomething(); // 1
//    callSomething(); // 2
//    callSomething();
//    callSomething();
//    callSomething();
//    callSomething();
//    console.log(callSomething());//7


// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log('basic', 'rest',  1 , 2, 3 );

function calcOrDouble(number , basis = 2){
   
    console.log(number * basis);
}

calcOrDouble(3,5);


function fn(a  , b = 2) {
    
   c =  a* b ;

   console.log(c);
}

fn(2,'' );
    
