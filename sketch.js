
var ship;
var shipmoving;
var sea;


function preload(){

shipmoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200)
  sea.addImage(seaImage)
  sea.scale=0.24
  ship = createSprite(150,200,50,60);
  ship.addAnimation("moving",shipmoving);
  ship.scale=0.25;
  


}

function draw() {
  background("blue");
    drawSprites();
}