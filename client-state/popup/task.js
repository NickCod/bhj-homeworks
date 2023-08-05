const modal = document.getElementById('subscribe-modal');

function showModal () {
    modal.style.display ="block";
   }
     const storeModal = localStorage.getItem('modal')

     if (!storeModal){
      showModal();
       localStorage.setItem('modal', 'shown');
     } else {
      const closeSModal = document.querySelector('.modal__close');
      closeSModal.addEventListener('click', ()=> {
        modal.style.display ="none";
     })
    }



 