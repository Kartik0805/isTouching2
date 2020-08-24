var fr, mr;
var o1,o2,o3, o4

function setup() {
  createCanvas(1200,800);
  fr = createSprite(200, 200, 50, 80);
  mr = createSprite(400, 200, 80, 30);
  o1 = createSprite(50,50, 50 , 50);
  o2 = createSprite(100,100, 50, 50);
  o3 = createSprite(300,300, 50,50);
  o4 = createSprite(350, 350, 50, 50);
    fr.shapeColor = ('blue')
  o1.shapeColor = ("yellow")
  o2.shapeColor = ("orange")
  o3.shapeColor = ("purple")
  o4.shapeColor = ("green")
  mr.shapeColor = ('blue')  
}

function draw() { 
  background(255,255, 255);  
  mr.x = World.mouseX
  mr.y = World.mouseY
  
 // if (istouching(mr, o2 )) {
 //   mr.shapeColor = "red"
 //   o2.shapeColor = "red"  
 // } else {
 //   mr.shapeColor = ('blue')
 //   o2.shapeColor = ('yellow')
 // } 
  bounceoff(mr,o1);
  drawSprites();
}

/*function istouching(o1,o2) {
  if (o1.x - o2.x < o1.width/2 + o2.width/2 && o2.x - o1.x < o1.width/2 + o2.width/2 && o1.y - o2.y < o1.height/2 + o2.height/2 && o2.y - o1.y < o1.height/2 + o2.height/2) {
  return true;
  }
  else {
  return false;  
  }
}
*/
function bounceoff(o1,o2) {
  if (o1.x - o2.x < o1.width/2 + o2.width/2 && o2.x - o1.x < o1.width/2 + o2.width/2 ) {
  o1.velocityX = o1.velocityX*(-1);
  o2.velocityX = o2.velocityX*(-1);
  } 
  if (o1.y - o2.y < o1.height/2 + o2.height/2 && o2.y - o1.y < o1.height/2 + o2.height/2) {
  o1.velocityY = o1.velocityY*(-1);
  o2.velocityY = o2.velocityY*(-1);
  }
}