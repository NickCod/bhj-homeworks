const modal = document.getElementById('subscribe-modal');

function showModal() {
    modal.style.display = "block";
}

const storeModal = localStorage.getItem('modal');

if (!storeModal) {
    showModal();
} else if (storeModal === 'shown') {
    const closeSModal = document.querySelector('.modal__close');
    closeSModal.addEventListener('click', () => {
        modal.style.display = "none";
        localStorage.setItem('modal', 'closed');
    });
}


 