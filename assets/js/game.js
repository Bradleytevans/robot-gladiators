// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 20;

// fight function
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

      // if player choses to skip
      if (promptFight === "skip" || promptFight === "SKIP"|| promptFight === "s") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
      break;
      }

      // if player choses to fight, fight
      if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "f") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      playerMoney = playerMoney + 10
      window.alert(playerName + " has " + playerMoney + " gold now! Great fight!")
      break;
      } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        window.alert("You lose!!!!!");
        break;
      } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
      }

      // if no (false), ask question again by running fight() again
      else {
      fight();
      }
    }
  }
};

for (var i = 0; i < enemyNames.length; i++) {
var pickedEnemyName = enemyNames[i];
enemyHealth = 50
fight(pickedEnemyName)
}

// run fight function to start game
//fight();

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less