'use strict';

console.log('data request');

const req = new Promise(function(resolve,reject){
    
setTimeout(() => {
    console.log('data preparation');
    const product = {
        name: 'tv',
        price: 2000
    }
    resolve(product);
    
}, 2000);
});


req.then((product) => {
   return new Promise((resolve, reject)=>{
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            //reject();
        },2000);
    });

    
}).then(data =>{
    data.modify = true;
    return data;
    
}).then(data=>{
    console.log(data);
}).catch(()=> {
    console.error('error')
}).finally(()=>{
    console.log('Finally');
});


const test = function(time) {
    return new Promise(resolve  =>{
        setTimeout(()=> resolve(), time );
    });
};

test(1000).then(() => console.log('1000ms'));
test(2000).then(() => console.log('2000ms'));

Promise.all([test(1000),test(2000)]).then(() => {
    console.log('alles gut'); // wenn alles gut geaufen ist, dann bekommen wir 'alles gut ' in der  console
});

Promise.race([test(4000), test(3000)]).then(()=>{
console.log('fist promise that  has been done ');
});


//fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({name:'alex'}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));


        fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(data => {
            console.log(data);
            showThanksModal(message.success) ;
            statusMessage.remove();
        })
        .catch(() => {
            showThanksModal(message.failure);
        })
        .finally(() => {
            form.reset();
        });