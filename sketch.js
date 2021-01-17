
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20);  
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
  
ground=createSprite(400,350,900,10);  

console.log(ground.x);  
}


function draw() {
  createCanvas(400,400);

  backgroundImage = ("p5.jpg");
   
  if(keyDown("SPACE")){
     monkey.velocityY = -15; 
}
  
   
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  if(frameCount % 80 === 0) {
    
 obstacle=createSprite(300,327,20,20); 
    obstacle.velocityX=-4;
 obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  }
  if(frameCount % 150 === 0) {
    banana=createSprite(300,250,20,20);  
banana.addImage(bananaImage);
    banana.velocityX=-4;
banana.scale=0.1;
 
  }
  
  
drawSprites();  
}