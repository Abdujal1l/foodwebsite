function modal(){
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


  
    
   
        

}

module.exports = modal ;