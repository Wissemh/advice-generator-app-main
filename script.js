
function test (y) {
  var id=document.getElementById("id");
  var advice=document.getElementById("advice");
  var dice=document.getElementById("dice");
  dice.addEventListener("click",handleDice);
  var idData = y.slip.id;
  var adviceData = y.slip.advice;
  id.innerHTML = idData;
  advice.innerHTML = '"' + adviceData + '"';


}
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => test(data));



function handleDice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => test(data));

}

