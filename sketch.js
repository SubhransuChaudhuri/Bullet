var bullet, wall ;
var thickness, speed, weight ;
var damage ;

function setup(){
  createCanvas(1600,400) ;
  bullet=createSprite(100,200,100,20);
  wall=createSprite(1200,200,thickness,height/2);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX=speed;
}

function draw(){

  background(255,255,255);  

 // if(wall.x-bullet.x<wall.width/2+bullet.width/2){
   if (hasCollided(bullet,wall)){
    bullet.velocityX=0;

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if( damage<10){
    wall.shapeColor="green";
    
  }
  
  else 
    wall.shapeColor="red";
    
  
  
  
  
    }

 // bullet.shapeColor="black";
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  
  }
  return false;
}