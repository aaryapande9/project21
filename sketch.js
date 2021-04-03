var car,wall;
var speed,weight;
var thickness,bullet;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500,200,60,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<(bullet.width+wall.width/2))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(weight=32&&speed===23&&thickness===70&&damage===3.68){
      bullet.shapeColor="green"
    }
    if(weight==32&&spee===223&&thickness===40&&damage===12.43){
      bullet.shapeColor="red"
    }
  }

  drawSprites();
  
}