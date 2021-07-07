var path, power, bomb, energyDrink, coin, jackson;
var pathImg, powerImg, bombImg, coinImg, jackson_running;
var invisibleLeft, invisibleRight;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  jackson_running = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  invisibleLeft = createSprite(375, 400, 1, 400);
  invisibleLeft.visible = false;

  invisibleRight = createSprite(15, 400, 1, 400);
  invisibleRight.visible = false;

    //path
    path = createSprite(200, 200)
    path.addImage(pathImg);
    path.velocityY = 4;
    path.scale = 1.2;

  //jackson
  jackson = createSprite(200, 350);
  jackson.addAnimation("P",jackson_running);

  jackson.scale = 0.1;
}

function draw() {
  background(255);

    //reset background
    if(path.y > 400){
      path.y = height/2;
    }

    jackson.collide(invisibleLeft);
    jackson.collide(invisibleRight);

    jackson.x = World.mouseX;

  drawSprites();

}
