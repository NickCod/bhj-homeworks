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
function showLastMessage() {
  let lastMessage = messages.lastElementChild;
  if (lastMessage) {
    lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}
function DelayMesage(key) {
  let textArray = [' Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
  'Отстаньте от нас пожалуйста',
'Мы не хотим с вами разговаривать', 
'Не пиши сюда больше',
'Ержан вставай, на работу пора',
'Этот чат только для ботов, добро пожаловать !',
'Иди учись в Нетологии, сынок)))'];
let randomIndex = Math.floor(Math.random() * textArray.length);
let randomText = textArray[randomIndex];
  clientMessage = chatText.value.trim(); 
   if (key === "Enter") {
     console.log('Enter was pressed!');
     let currentTime = getDate();
     messages.innerHTML +=
      `
      <div class="message message_client"> 
        <div class="message__time">${currentTime}</div> 
        <div class="message__text">${clientMessage}</div>
      </div>
      `;
      setTimeout(()=>{
      messages.innerHTML +=
       `
       <div class="message">
          <div class="message__time">${currentTime}</div> 
         <div class="message__text">
           ${randomText}
         </div>
       </div>
       `;
       showLastMessage();
      },1000);
      chatText.value = '';
   }
 }
  CheckKey();  