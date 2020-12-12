//create variables
var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);

  //create sprites
  fixedRect = createSprite(200, 200, 80, 50);
  movingRect=createSprite(300,200,50,50);
  //make them green
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

}

function draw() {
  background(255,255,255); 

  //use mouse to control moving rect
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  //if the sprites are touching/colliding,
  if (fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2 && 
    movingRect.x-fixedRect.x <= fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y <= fixedRect.height/2+movingRect.height/2) {
    //change color to red
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
    console.log("It's Collided!");
    //otherwise,
  } else {
    //keep them green
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
}

  //show sprites
  drawSprites();
}