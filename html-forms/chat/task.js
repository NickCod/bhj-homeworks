let sideWid = document.querySelector('.chat-widget');
let chatText = document.getElementById('chat-widget__input');
let messages = document.querySelector('.chat-widget__messages');
let clientMessage = document.querySelector('.message_client');

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
function getDate (){
let date = new Date;
let hours = date.getHours();
let minutes = date.getMinutes();
let time = hours + ':' + minutes + " ";
return time;
};

  function DelayMesage(key) {
   clientMessage = chatText.value.trim(); 
    if (key === "Enter") {
      console.log('Enter was pressed!');
      let currentTime = getDate();
      messages.innerHTML += currentTime;
      messages.innerHTML += clientMessage;
       setTimeout(()=>{
       messages.innerHTML +=
        `
        <div class="message">
           <div class="message__time">${currentTime}</div> 
          <div class="message__text">
            Добрый день, мы ещё не проснулись. Позвоните через 10 лет
          </div>
        </div>
        `;
       },1000);
    }
  }
  
  CheckKey();  