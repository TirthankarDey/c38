var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4;
var cars;
var form, player, game;



function setup(){
  canvas = createCanvas(displayWidth-250,displayHeight-350);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }

  //When all 4 players have logged in , then gameState = 1 (PLAY)
  if(gameState === 1){
    clear();
    game.play();
  }
}
