// single button
// roll dice
// field text field = win/lost/ or astablished a  point
// field text 2 = value of last die roll

// rules
// 2 die
// 7 or 11 = win on 1st role
// 2,3,12 = instant lost on 1st role
// else = point number

// role till you get point number or 7
// point number = win
// 7 = lose


// button
// - role 2 
// - add those number together




function RollDice(){
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  let roll = dice2 + dice1;

  return roll;
}

function CheckRoll1(roll){
  let outcome;
  
  if((roll === 7) || (roll === 11)){
    outcome = "win";
  } else if((roll === 2) || (roll === 3) || (roll === 12)){
    outcome = "lost";
  } else{
    outcome = "established a point";
  }

  return outcome;
}

function CheckRollOtherRolls(firstRoll, currentRoll){
  let outcome;

  if(firstRoll === currentRoll){
    outcome = "win";
  } else if(currentRoll === 7){
    outcome = "lose";
  } else{
    outcome = "roll again"
  }

  return outcome;
}

let howManyRolls = 0;
let firstRoll = 0;

//Main function
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();


    let roll = RollDice();
    let outcomefirstRoll = CheckRoll1(roll);

    console.log("how many roll = " + howManyRolls);
    console.log("Current roll = " + roll);

    if(howManyRolls === 0){

      console.log("check" + CheckRoll1(roll));
      if(CheckRoll1(roll) === "established a point"){
        $("#output").text(outcomefirstRoll);
        $("#roll").text("you rolled on your 1st turn: " + roll);
        howManyRolls = howManyRolls + 1;
        firstRoll = roll;
        console.log("test" + firstRoll);
      } else{
        $("#output").text(outcomefirstRoll);
        $("#roll").text("you rolled on your 1st turn: " + roll);
      }
    } else{
      console.log("not 1st roll anymore");

      let outcomeOtherRoll = CheckRollOtherRolls(firstRoll, roll);

      console.log("1st role = " + firstRoll, "CurrentRoll = " + roll);
      //check to see if won
      if((firstRoll === roll) || (roll === 7)){
        $("#output").text(outcomeOtherRoll);
        $("#roll").text("you rolled: " + roll);
        howManyRolls = 0;
      }else{
        $("#output").text(outcomeOtherRoll);
        $("#roll").text("you rolled: " + roll);
      }
    }

  });
});
