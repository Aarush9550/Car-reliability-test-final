var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,400);

  //Car sprite
  car=createSprite(50, 200, 50, 50);

  //Wall Sprite
  wall=createSprite(700, 200, 60, height/2);

  //Setting up random speed and weight
  speed=random(55, 90);
  weight=random(400, 1500); 
}

function draw() {
  background (255);  

  //Depth
  car.depth=wall.depth;
  car.depth=car.depth+1;

  //Car's velocity
  car.velocityX=speed;

  //Deformation calculation
  deformation=(0.5*weight*speed*speed)/22500;

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX=0;
    //Conditions
      if(deformation>180){
        car.shapeColor=rgb(255, 0, 0)
      }

      if(deformation>=100 && deformation<=180){
        car.shapeColor=rgb(230, 230, 0)
      }

      if(deformation<100){
        car.shapeColor=rgb(0, 255, 0)
      }
  }
  drawSprites();
}