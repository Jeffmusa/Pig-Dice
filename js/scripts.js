
// Back end logic
function Player (name,turnTotal,diceRoll,overallScore,active){
  this.name=name;
  this.diceRoll=0;
  this.turnTotal=0;
  this.overallScore=0;
  this.active=active;
}

// enabling and disabling gaming areas according to active player
function activeUser() {
  if (player1.active === true && player2.active === false) {
    $('.player1Area').children().prop('disabled',false);
    $('.player1Area').removeClass('disableGamingArea');
    $('.player2Area').children().prop()('disabled',true);
    $('.player2Area').addClass('disableGamingArea');
  }else {
    $('.player1Area').children().prop('disabled',true);
    $('.player1Area').addClass('disableGamingArea');
    $('.player2Area').children().prop('disabled',false);
    $('.player2Area').removeClass('disableGamingArea');

  }
};

// function for what happens when the dice is rolled
Player .prototype.roll=function() {
  var randomNo = Math.floor((Math.random()*6) +1);
  this.diceRoll= randomNo;
  activeUser();
  if(randomNo === 1){
    this.turnTotal= 0;
    this.diceRoll= 1;
    if (this.active === player1.active) {
      player1.active = false;
      player2.active = true;
      $('.player1Area').children().prop('disabled',true);
      $('.player1Area').addClass('disableGamingArea');
      $('.player2Area').children().prop('disabled',false);
      $('.player2Area').removeClass('disableGamingArea');
    }else if(this.active === player2.active) {
      player2.active = false;
      player1.active = true;
      $('.player2Area').children().prop('disabled',true);
      $('.player2Area').addClass('disableGamingArea');
      $('.player1Area').children().prop('disabled',false);
      $('.player1Area').removeClass('disableGamingArea');
    } else {
      console.log("Ain't working");
    }
    return alert("Oh No, you got a 1.Your turn is over!! Next player.";)
  }else{
    this.turnTotal += randomNo;
  };
  return this.diceRoll;
};

// function for holding the game
Player.prototype.hold = function() {
  activeUser();
  this.overallScore += this.turnTotal;
  if (this.overallScore >= 100) {
    alert("The Game is over.YOU WIN!!");
    resetFields();
  // an alert can be added here
} else {
  return false;
}
console.log('the turn total is: ' + this.turnTotal);
return this.overallScore;
};

// function for resetting form input fields,re-enabling the buttons,removing opacity from the gaming area and reset scores to 0
function resetFields() {
  $("input#player1Name").val("");
  $("input#player2Name").val("");
  $(".player1Area").children().prop('disabled',false);
  $('.player2Area').children().prop('disabled',false);
  $('.player1Area').removeClass('disableGamingArea');
  $('.player2Area').removeClass('disableGamingArea');
  var thePlayers = [player1,player2];
  thePlayers.forEach(function(player){
    player.diceRoll = 0;
    player.turnTotal = 0;
    player.overallScore = 0;
  })
  var outputs = [$('.diceRoll1'),$('.turnSCore1'),$('.overallScore1'),$('.diceRoll2'),$('.turnScore2'),$('.overallScore2')];
  outputs.forEach(function(output){
    output.text(0);
  })
};


// FRONT END LOGIC
$(document).ready(function() {
  $("#rulesHeader").click(function(){
    $("#rulesDefinitions").toggle();
  });
  
})
