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
});