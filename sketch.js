
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score,ground;
var bananaScore=0;
var survivalTime = 0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  ground = createSprite(300, 380, 900, 10);
  ground.shapeColor = "black"
  monkeyGroup = new Group();
  ground.visible=true;
  monkey = createSprite(50, 150, 10, 10);
  monkey.addAnimation("monkey", monkey_running)
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("skyblue");
  fill("red")
  textSize(20)
  text("survival Time: " + survivalTime, 150, 50);
  text("Bananas Collected: " + bananaScore, 120, 90);
  monkey.collide(ground);
  monkey.scale = 0.1;
  ground.velocityX = ground.velocityX - (survivalTime / 100) * 10;
    obstacleGroup.velocityX = obstacleGroup.velocityX - (survivalTime / 100) * 10;
    FoodGroup.velocityX = FoodGroup.velocityX - (survivalTime / 100) * 10;
  Banana();  
  FoodGroup.setLifetimeEach = 100;
   Obstacle();
    obstacleGroup.setLifetimeEach = 100;
   ground.velocityX=-10
    survivalTime = survivalTime + Math.round(frameRate() / 30);
    monkey.velocityY = monkey.velocityY + 0.8;
   if (ground.x < 0) {
      ground.x = ground.x / 2;
    }
   if (keyDown("Space") && monkey.y > 314) {
      monkey.velocityY = -15
    }
    if (monkey.isTouching(FoodGroup)) {
      bananaScore = bananaScore + 1;
      FoodGroup.destroyEach();
    }
 monkey.collide(obstacleGroup);
  drawSprites();
}
function Banana() {
  if (frameCount % 80 === 0) {
    var randomposition;
    randomposition = random(150, 200)
    banana = createSprite(500, randomposition, 10, 10);
    banana.addImage("image", bananaImage);
    banana.velocityX = -10
    banana.scale = 0.1;
    banana.velocityX = -10;
    FoodGroup.add(banana);
  }
}

function Obstacle() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(500, 340, 10, 10);
    obstacle.addImage("obstacle", obstaceImage);
    obstacle.velocityX = -10
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
  }
}





