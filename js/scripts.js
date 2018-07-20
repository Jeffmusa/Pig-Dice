
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
  this.
}
