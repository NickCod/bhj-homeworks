const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const getHole = (index)=> document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
let hole = getHole(i);
 hole.onclick = function() {
 if (hole.classList.contains( 'hole_has-mole' )) {
   dead.textContent++;
 } else {
  lost.textContent++;
 }
   if (dead.textConten >= 10){
    alert("Победа!");
    resetGame();
   } else if ( lost.textContent >=5){
    alert("Вы проиграли!");
    resetGame();
   }
   }
 }
 function resetGame() {
  deadValue = 0;
  lostValue = 0;
  dead.textContent = deadValue;
  lost.textContent = lostValue;
}

/* let  deadValue = Number(dead.textContent);
let lostValue = Number(lost.textContent); *//*  ------ можно ли использовать как это эти переменные, или они лишние ?? */