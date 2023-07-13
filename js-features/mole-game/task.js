const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const deadValue = Number(dead.textContent);
const lostValue = Number(lost.textContent);

const getHole = (index)=> document.querySelectorAll(`.hole${index}`);

for (let i = 1; i <= 9; i++) {
let hole = getHole(i);
 hole.onclick = function() {
 if (hole.classList.contains( 'hole_has-mole' )) {
   deadValue++;
 } else {
    lostValue++;
 }
   if (deadValue >= 10){
    alert("Победа!");
   } else if ( lostValue >=5){
    alert("Вы проиграли!");
   }
   }
 }
