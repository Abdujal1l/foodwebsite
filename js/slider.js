'use strit';
window.addEventListener('DOMContentLoaded', ()=>{

            const slides = document.querySelectorAll('.offer__slide'),
                  previousSlide = document.querySelector('.offer__slider-prev'),
                  nextSlide = document.querySelector('.offer__slider-next');

            const totalSlidesNum = document.querySelector('#total'),
                  currentSlidesNum = document.querySelector('#current');

            let   slideIndex = 1;

        showSlides(slideIndex);

        if(slides.length < 10){
            totalSlidesNum.textContent = `0${slides.length}`; 
            }else {
            totalSlidesNum.textContent = slides.length;
        }

        function showSlides(n) {


            if(n > slides.length){
                slideIndex = 1
            }

            if(n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach(item => {
                item.style.display = 'none';
            });

            slides[slideIndex - 1 ].style.display ='block' ;

            if(slides.length < 10){
                currentSlidesNum.textContent = `0${slideIndex}`; 
                } else {
                currentSlidesNum.textContent = slideIndex;
            }
        }

        function plusSlides(n){
            showSlides(slideIndex += n );
        }


        previousSlide.addEventListener('click' , () => {
            plusSlides(-1);
        });

        nextSlide.addEventListener('click' , () => {
            plusSlides(1);
        });

        //karusel second variant slider 

        // const slides = document.querySelectorAll('.offer__slide'),
        //       previousSlide = document.querySelector('.offer__slider-prev'),
        //       nextSlide = document.querySelector('.offer__slider-next');
        // const totalSlidesNum = document.querySelector('#total'),
        //       currentSlidesNum = document.querySelector('#current');

        // const slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        //       slidesField = document.querySelector('.offer__slider-inner'),
        //       width = window.getComputedStyle(slidesWrapper).width;
        //  let slideIndex = 1;
        //  let offset = 0 ;

        //  if(slides.length < 10){
        //         totalSlidesNum.textContent = `0${slides.length}`; 
        //         currentSlidesNum.textContent = `0${slideIndex}`;
        //     }else {
        //         totalSlidesNum.textContent = slides.length;
        //         currentSlidesNum.textContent = `${slideIndex}`;
        //     }

        // slidesField.style.width = 100 * slides.length + '%' ;
        // slidesField.style.display = 'flex';
        // slidesField.style.transition = '1s all';
        
         
        // slidesWrapper.style.overflow = 'hidden';

        // slides.forEach(slide => {
        //     slide.style.width = width;
        // });

        // nextSlide.addEventListener('click', () => {
        //     if(offset == +width.slice(0, width.length - 2) * (slides.length - 1) ) { //500px
        //         offset = 0;
        //     }else{
        //         offset +=  +width.slice(0, width.length - 2) ;
        //     }

        //     slidesField.style.transform = `translateX(-${offset}px)`

        //     if(slideIndex == slides.length) {
        //         slideIndex = 1;
        //         } else {
        //             slideIndex++ ;
        //             }

        //     if(slides.length < 10){
        //         currentSlidesNum.textContent =`0${slideIndex}`;
        //         }else {
        //             currentSlidesNum.textContent = slideIndex;
        //         }
        // });

        // previousSlide.addEventListener('click', () => {
        //     if(offset == 0 ) { 
        //         offset =  +width.slice(0, width.length - 2) * (slides.length - 1)
        //     }else{
        //         offset -=  +width.slice(0, width.length - 2) ;
        //     }

        //     slidesField.style.transform = `translateX(-${offset}px)`;

        //     if(slideIndex == 1) {
        //         slideIndex = slides.length;
        //         } else {
        //             slideIndex-- ;
        //             }

        //     if(slides.length < 10){
        //         currentSlidesNum.textContent =`0${slideIndex}`;
        //             }else {
        //                currentSlidesNum.textContent = slideIndex;
        //                 }
           
        // });
});