'use strict';

//const { parallel } = require("gulp");

window.addEventListener('DOMContentLoaded' , ()=>{
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('div.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');  


    function hideTabContent (){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item =>{
            item.classList.remove('.tabheader__item_active');
        });
    }

    


    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

   



    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) =>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });
 

    //timer 

    const deadline = '2023-02-14'; //deadline 

    //функция определяющая разницу между дедлайн  и  настоящим 
    function getTimeRemaining(endtime){
        let days , hours ,minutes ,seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());
        //summary of remaining days in milliseconds
        if(t <= 0 ){
            days = 0;
            hours = 0 ;
            minutes = 0;
            seconds = 0;
        }else {
              days = Math.floor( (t/(1000*60*60*24)) ),// summary of remaining days in days
              hours = Math.floor( (t / (1000*60*60) % 24) ),
              minutes = Math.floor( (t/1000/60) % 60 ),
              seconds = Math.floor( (t/1000) % 60);
        }

              
        
              
        return {
            'total' : t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds' : seconds
        };
    }

    function getZero (num){
        if(num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    //функция устанавливания таймера на страницу 
    //selector элемент таймера ,endtime дедлайн таймера 
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'), //element of days
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),//element of minutes
                seconds = timer.querySelector('#seconds'); //element of seconds 

        //запускаем функцию каждую секунду 
        const timeInterval = setInterval(updateClock, 1000);
        
        updateClock();
        
        //функция обновление таймера в каждую секунду
        function updateClock (){
            //расчет времени который остался на эту секунду
            const t = getTimeRemaining(endtime); //it is our function that returns an object with remaineng time
            //записываем в ХТМЛ  дни
            days.innerHTML = getZero(t.days);  
            hours.innerHTML = getZero(t.hours); 
            minutes.innerHTML = getZero(t.minutes); 
            seconds.innerHTML = getZero(t.seconds); 


            //stopping the timer 
            // if the total time in object returnd from function getTimeRemaining is 
            //equal or less than 0 , then we clear the interval , and function updateClock stops 
            if(t.t <= 0){
                clearInterval(timeInterval);
            }
        }   
    }




    setClock('.timer', deadline);


    //modal

    const modalTrigger = document.querySelectorAll('[data-modal]');
          
    const modal = document.querySelector('.modal');
 
    function openModal (){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
        });


    

    function closeModal (){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    //modalCloseBtn.addEventListener('click', closeModal);

  //modification of modal 
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
          closeModal();
        }
    });


    document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')){
        closeModal();
    }

    });

    //modification of modal 


//   const modalTimerId = setTimeout(openModal, 3000);

//     function showModalbyScroll () {
//         if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
//             openModal();
//             window.removeEventListener('scroll', showModalbyScroll)
//         }
         
//     }

//     window.addEventListener('scroll', showModalbyScroll);
    
   //using classes for cards

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes){
            this.src = src ;
            this.alt = alt ;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        render(){
            const element = document.createElement('div');

            if(this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>` ;

            this.parent.append(element);

        }

    }


    
    const getResource = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }




        return await  res.json(); //we return promise 
    };

    // getResource('http://localhost:3000/menu')
    // .then(data => {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //     });
    // });

    // axios.get('http://localhost:3000/menu')
    // .then(data => {
    //     data.data.forEach(({img, altimg, title, descr, price}) => {
    //                 new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //             });
    // });


  
    
   
        //forms3

    
        
        const forms = document.querySelectorAll('form');

        const message = {
            loading: 'img/form/spinner.svg',
            success: 'successfully Loaded',
            failure:    'request has not been sent'

        }

        forms.forEach(item => {
            bindPostData(item);
        })
//optimization of fetch 

        const postData = async (url, data) => {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            });

            return await  res.json(); //we return promise 
        };
       

       
        function bindPostData(form){
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const statusMessage = document.createElement('img');
                statusMessage.src = message.loading;
             
                statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto; ` ; 
               
                form.insertAdjacentElement('afterend', statusMessage);

                const formData =  new FormData(form);  

                // const object = {};
                // formData.forEach(function(value, key){
                //  object[key] = value;
                // });

                const json = JSON.stringify(Object.fromEntries(formData.entries()));
                //1 to array arrays in formdata.entries()
                //2 to classical object Object.fromEntries(formData.entries())
                //3 to json JSON.stringify(Object.fromEntries(formData.entries()))

                
                
                //fetch

                postData('http://localhost:3000/requests' , json)
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

               
    
        });    
        }



        function showThanksModal(message) {
            const previousModalDialog = document.querySelector('.modal__dialog')   ;    
        
            previousModalDialog.classList.add('hide');
            openModal();

            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
            <div class="modal__content">
            <div class="modal__close" date-close > × </div>
            <div class="modal__title"> ${message}</div>
            </div>
            `
            document.querySelector('.modal').append(thanksModal);

            setTimeout(() => {
                thanksModal.remove();
                previousModalDialog.classList.add('show');
                previousModalDialog.classList.remove('hide');
                closeModal();
            }, 4000);
        }

        

        // fetch('http://localhost:3000/menu')
        // .then(data => data.json())
        // .then(res => console.log(res));


    //slider
        // const slides = document.querySelectorAll('.offer__slide'),
        //       previousSlide = document.querySelector('.offer__slider-prev'),
        //       nextSlide = document.querySelector('.offer__slider-next');
        // const totalSlidesNum = document.querySelector('#total'),
        //       currentSlidesNum = document.querySelector('#current');
        // let slideIndex = 1;

        // showSlides(slideIndex);

        // if(slides.length < 10){
        //     totalSlidesNum.textContent = `0${slides.length}`; 
        // }else {
        //     totalSlidesNum.textContent = slides.length;
        // }

        // function showSlides(n) {


        //     if(n > slides.length){
        //         slideIndex = 1
        //     }

        //     if(n < 1) {
        //         slideIndex = slides.length;
        //     }

        //     slides.forEach(item => {
        //         item.style.display = 'none';
        //     });

        //     slides[slideIndex - 1 ].style.display ='block' ;

        //     if(slides.length < 10){
        //         currentSlidesNum.textContent = `0${slideIndex}`; 
        //     }else {
        //         currentSlidesNum.textContent = slideIndex;
        //     }
        // }

        // function plusSlides(n){
        //     showSlides(slideIndex += n );
        // }


        // previousSlide.addEventListener('click' , () => {
        //     plusSlides(-1);
        // });

        // nextSlide.addEventListener('click' , () => {
        //     plusSlides(1);
        // });
    
        //karusel
        const slides = document.querySelectorAll('.offer__slide'),
              slider = document.querySelector('.offer__slider'), //94
              previousSlide = document.querySelector('.offer__slider-prev'),
              nextSlide = document.querySelector('.offer__slider-next');
        const totalSlidesNum = document.querySelector('#total'),
              currentSlidesNum = document.querySelector('#current');

        const slidesWrapper = document.querySelector('.offer__slider-wrapper'),
              slidesField = document.querySelector('.offer__slider-inner'),
              width = window.getComputedStyle(slidesWrapper).width;
         let slideIndex = 1;
         let offset = 0 ;

         if(slides.length < 10){
                totalSlidesNum.textContent = `0${slides.length}`; 
                currentSlidesNum.textContent = `0${slideIndex}`;
            }else {
                totalSlidesNum.textContent = slides.length;
                currentSlidesNum.textContent = `${slideIndex}`;
            }

        slidesField.style.width = 100 * slides.length + '%' ;
        slidesField.style.display = 'flex';
        slidesField.style.transition = '1s all';
        
         
        slidesWrapper.style.overflow = 'hidden';

        slides.forEach(slide => {
            slide.style.width = width;
        });

        slider.style.position = 'relative'; //94
        const indicators = document.createElement('ol'); //94
        const dots = [];
        indicators.classList.add('carusel-indicators'); //94
        indicators.style.cssText = `position: absolute; 
                                    right: 0;
                                    bottom: 0;
                                    left: 0;
                                    z-index: 15;
                                    display: flex;
                                    justify-content: center;
                                    margin-right: 15%;
                                    margin-left: 15%;
                                    list-style: none;` ; //94

        slider.append(indicators); //94

        for(let i = 0 ; i < slides.length ; i++) {
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-to', i + 1); 
            dot.style.cssText = `   box-sizing: content-box;
                                    flex: 0 1 auto;
                                    width: 30px;
                                    height: 6px;
                                    margin-right: 3px;
                                    margin-left: 3px;
                                    cursor: pointer;
                                    background-color: #34fcfb;
                                    background-clip: padding-box;
                                    border-top: 10px solid transparent;
                                    border-bottom: 10px solid transparent;
                                    opacity: .5;
                                    transition: opacity .6s ease; ` ;
            if(i == 0) {
                dot.style.opacity = 1 ;
            }
            indicators.append(dot);
            dots.push(dot);
            
        }



        nextSlide.addEventListener('click', () => {
            if(offset == +width.slice(0, width.length - 2) * (slides.length - 1) ) { //500px
                offset = 0;
            }else{
                offset +=  +width.slice(0, width.length - 2) ;
            }

            slidesField.style.transform = `translateX(-${offset}px)`

            if(slideIndex == slides.length) {
                slideIndex = 1;
                } else {
                    slideIndex++ ;
                    }

            if(slides.length < 10){
                currentSlidesNum.textContent =`0${slideIndex}`;
                }else {
                    currentSlidesNum.textContent = slideIndex;
                }
            
                dots.forEach(dot => dot.style.opacity = '.5');
                dots[slideIndex -1].style.opacity = 1 ;
        });

        previousSlide.addEventListener('click', () => {
            if(offset == 0 ) { 
                offset =  +width.slice(0, width.length - 2) * (slides.length - 1)
            }else{
                offset -=  +width.slice(0, width.length - 2) ;
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slideIndex == 1) {
                slideIndex = slides.length;
                } else {
                    slideIndex-- ;
                    }

            if(slides.length < 10){
                currentSlidesNum.textContent =`0${slideIndex}`;
                    }else {
                       currentSlidesNum.textContent = slideIndex;
                        }

             dots.forEach(dot => dot.style.opacity = '.5');
             dots[slideIndex -1 ].style.opacity = 1 ;
           
        });

        dots.forEach(dot => {
            dot.addEventListener('click' , (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');

                slideIndex = slideTo ;
                offset = +width.slice(0, width.length - 2) * (slideTo - 1) ;
                slidesField.style.transform = `translateX(-${offset}px)`;

                if(slides.length < 10){
                    currentSlidesNum.textContent =`0${slideIndex}`;
                    }else {
                        currentSlidesNum.textContent = slideIndex;
                    }

                dots.forEach(dot => dot.style.opacity = '.5');
                dots[slideIndex -1].style.opacity = 1 ;

            })
        })


});

