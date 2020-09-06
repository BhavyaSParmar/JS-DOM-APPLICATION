var scores,roundScores,activePlayer,dice,gamePlaying;
init();

//dice=Math.floor(Math.random() * 6)+1;

//document.querySelector('#current-'+ activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+ dice +'</em>'

//var x=document.querySelector('#score-0').textContent;
//console.log(x);




document.querySelector('.btn-roll').addEventListener('click',function(){
if(gamePlaying){
  //1.Random No.
  var dice=Math.floor(Math.random() *6 )+1;

  //Display the Result:
    var diceDom=document.querySelector('.dice');
    document.querySelector('.dice').style.display='block';
    diceDom.style.display='block';
    diceDom.src='dice-'+ dice + '.png';


    //Update the Score IF the rolled no was not 1:
    if(dice!==1){
      //add scores
      roundScore=roundScore+dice;
      document.querySelector('#current-'+activePlayer).textContent=roundScore;
    } else{
       nextPlayer();
    }
}

});

document.querySelector('.btn-hold').addEventListener('click',function(){
if(gamePlaying){
  //add current score to global score:
      scores[activePlayer] += roundScore;

  //update UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  //check if player won the game
  if(scores[activePlayer]>=10) {
    document.querySelector('#name-'+activePlayer).textContent='WINNER!!!'
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    gamePlaying=false;
  }
  else {
    //nextPlayer
    nextPlayer();

  }
}



});

function nextPlayer(){
  activePlayer===0 ? activePlayer=1 : activePlayer=0;
  roundScore=0;

  document.getElementById('current-0').textContent='0';
  document.getElementById('current-0').textContent='0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
  scores=[0,0];
  activePlayer=0;
  roundScore=0;
  gamePlaying=true;

  document.querySelector('.dice').style.display='none';

  document.getElementById('score-0').textContent='0';
  document.getElementById('score-1').textContent='0';
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';
  document.getElementById('name-0').textContent='Player 1';
  document.getElementById('name-1').textContent='Player 2';
  document.querySelector('.player-0-panel').classList.remove('WINNER!!!');
  document.querySelector('.player-1-panel').classList.remove('WINNER!!!');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');

}
