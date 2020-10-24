var bullet,wall;

var bulletRightEdge, wallLeftEdge;

var speed,weight,thickness;







function setup() {
  createCanvas(1600,400);
  

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,60,7);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  wall =createSprite(1400,200,thickness,height/2);







}

function draw() {
  background("black");  

if (hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage= 0.5*weigth*speed*speed/(thickness*thickness*thickness)

  if (damage>10){
    wall.shapeColor=color(255,0,0);

  }

if (damage<10){

  wall.shapeColor=color(0,255,0);
}




}
  drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
return false;
}