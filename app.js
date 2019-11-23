var trainerHp = 10;
var compHp = 10;
var trainerHealth = document.getElementById("trainer-health");
var compHealth = document.getElementById("comp-health");
var scoreBoard = document.querySelector(".score");
var result = document.querySelector(".result > p");
var charmander = document.getElementById("charmander");
var squirtle = document.getElementById("squirtle");
var bulbasaur = document.getElementById("bulbasaur");

function getComputerChoices() {
  var choices = ['charmander', 'squirtle', 'bulbasaur'];
  var randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function win(trainer, comp) {
  compHp--;
  trainerHealth.innerHTML = trainerHp;
  compHealth.innerHTML = compHp;
  result.innerHTML = `Your ${trainer} kills enemies ${comp}. You win!`;
  if(compHp === 0) {
    alert('You win against the enemy. Thank you for playing this game.');
    location.reload();
  }
}

function lose(trainer, comp) {
  trainerHp--;
  trainerHealth.innerHTML = trainerHp;
  compHealth.innerHTML = compHp;
  result.innerHTML = `Enemies ${comp} kills your ${trainer}. You lost!`;
  if(trainerHp === 0) {
    alert('You lost to the enemy. Good luck next time.');
    location.reload();
  }
}

function draw() {
  result.innerHTML = `Both pokemon died. It's a draw`;
}

function game(trainerChoice) {
  var compChoice = getComputerChoices();
  switch (trainerChoice + compChoice) {
    case "charmanderbulbasaur":
    case "squirtlecharmander":
    case "bulbasaursquirtle":
      win(trainerChoice, compChoice);
      break;
    case "charmandersquirtle":
    case "squirtlebulbasaur":
    case "bulbasaurcharmander":
      lose(trainerChoice, compChoice);
      break;
    case "charmandercharmander":
    case "squirtlesquirtle":
    case "bulbasaurbulbasaur":
      draw(trainerChoice, compChoice);
      break;
  }
}

function main() {
  charmander.addEventListener('click', function() {
    game('charmander');
  });
  
  squirtle.addEventListener('click', function() {
    game('squirtle');
  });
  
  bulbasaur.addEventListener('click', function() {
    game('bulbasaur');
  });
}

main();