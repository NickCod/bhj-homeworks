let btns = Array.from(document.querySelectorAll('button'));
let dialog = document.createElement('div');
let card = document.querySelector('.card');
let index = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
    dialog.classList.add('dialog');
    if( index === 0) {
        index++;
    dialog.innerHTML += `
    <div class="dialog ">
     <h1>Спасибо, ваш голос засчитан !</h1>
     <button class ="remove"> закрыть!</button>
    </div>
    `;
    card.appendChild(dialog);
    }
    let remove = dialog.querySelectorAll('.remove');
    remove.forEach((removeItem)=>{
        removeItem.addEventListener('click', () => {
            index --;
           dialog.remove(); 
    })
    });
    });
});