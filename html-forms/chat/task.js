let sideWid = document.querySelector('.chat-widget');
let chatText = document.getElementById('chat-widget__input');
let messages = document.querySelector('.chat-widget__messages');

sideWid.addEventListener('click', ()=> {
sideWid.classList.toggle('chat-widget_active')
});

chatText.addEventListener('click', (e)=> {
e.stopPropagation();
})

function CheckKey () {
document.addEventListener('keydown', (event)=>{
 let key = event.key;
 console.log(key);
 DelayMesage(key);
}) 
}

function DelayMesage(key) {
 let myMessage = chatText.value.trim();
    if (key === "Enter") {
      console.log('Enter was pressed!');
      messages.innerHTML += myMessage;
       setTimeout(()=>{
messages.innerHTML +=
        `
        <div class="message">
          <div class="message__time">09:21</div>
          <div class="message__text">
            Добрый день, мы ещё не проснулись. Позвоните через 10 лет
          </div>
        </div>
        `;
       },1000);
    }
  }
  
  CheckKey();  