
  var background1, redb, pinkb, greenb, blueb, bowb, arrowb;
var backgrounda, redba, pinkba, greenba, blueba, bowba, arrowba;
var score;
var arrGroup; 
var gameState="PLAY";



function preload() {
  //load your images here 
  backgrounda =
    loadImage("background0.png");

  redba =
    loadImage("red_balloon0.png");

  pinkba =
    loadImage("pink_balloon0.png");

  greenba =
    loadImage("green_balloon0.png");

  blueba =
    loadImage("blue_balloon0.png");

  bowba =
    loadImage("bow0.png");

  arrowba =
    loadImage("arrow0.png");

}

function setup() {


  //add code here
  score = 0;
  createCanvas(1200, 1200);
  background1 = createSprite(100, 100, 400, 400);
  background1.addImage("bg", backgrounda);
  background1.scale = 4;



 
  background1.x = background1.width / 2;
  bowb = createSprite(350, 200, 10, 10);
  bowb.addImage("bo", bowba);
  bowb.scale=3;




  redbGroup = new Group();
  pinkbGroup = new Group();
  greenbGroup = new Group();
  bluebGroup = new Group();
  arrGroup = new Group();

  //createArrow();

}


function draw() {
  background("white");


  //add code here
  if(gameState==="PLAY"){
  background1.velocityX = -3;

  if (keyDown("space")) {
   // arrowb.velocityX = -15;
  // arrowb.x = 320;
    createArrow();

  }

  

  

  if (background1.x < 110) {
    background1.x = background1.width / 2;
  }

  bowb.y = mouseY;
  camera.position.y=bowb.y;
  camera.position.x=bowb.x;
  spawnBalloonsRed();
  spawnBalloonsBlue();
  spawnBalloonsGreen();
  spawnBalloonsPink();
  if (arrGroup.isTouching(redbGroup) && arrowb.x < 320) {

    arrowb.x = 320;
    arrowb.velocityX = 0;
    redbGroup.destroyEach();
    arrGroup.destroyEach();
    score = score + 1

  }
  if (arrGroup.isTouching(pinkbGroup) && arrowb.x < 320) {

    arrowb.x = 320;
    arrowb.velocityX = 0;
    pinkbGroup.destroyEach();
    arrGroup.destroyEach();
    score = score + 1
  }
  if (arrGroup.isTouching(greenbGroup) && arrowb.x < 320) {

    arrowb.x = 320;
    arrowb.velocityX = 0;
    greenbGroup.destroyEach();
    arrGroup.destroyEach();
    score = score + 1

  }
  if (arrGroup.isTouching(bluebGroup) && arrowb.x < 320) {

    arrowb.x = 320;
    arrowb.velocityX = 0;
    bluebGroup.destroyEach();
    arrGroup.destroyEach();
    score = score + 1
  }
  drawSprites();



  fill("red");
  textFont("Showcard Gothic");
  textSize(60);
  text("Score  " + score, 200, 30);
}

  if(gameState==="END"){
  if(score===10){
  redbGroup.setVelocityXEach(0);
  redbGroup.destroyEach();
  redbGroup.setLifetimeEach(0);

  pinkbGroup.setVelocityXEach(0);
  pinkbGroup.destroyEach();
  pinkbGroup.setLifetimeEach(0);

  greenbGroup.setVelocityXEach(0);
  greenbGroup.destroyEach();
  greenbGroup.setLifetimeEach(0);
  
  bluebGroup.setVelocityXEach(0);
  bluebGroup.destroyEach();
  bluebGroup.setLifetimeEach(0);
 
  fill("red");
  textSize(40);
  text("Game over",100,200);
  text("Press up arrow key to restart");

  }

  if(keyCode==="UP_ARROW"){
reset();
  }

  if(score>10){
    redbGroup.setVelocityXEach(3);
  pinkbGroup.setVelocityXEach(3);
  bluebGroup.setVelocityXEach(3);
  greebGroup.setVelocityXEach(3);
  }
}
  
}

function spawnBalloonsRed() {

  if (frameCount % 80 ===0){
    redb=createSprite(0,Math.random(20,300));
    redb.addImage("r",redba);
    redb.scale = 0.275;
    redb.velocityX = 3;
    redb.y = Math.round(random(375, 25));
    redb.lifetime = 280;
    redbGroup.add(redb);

  //camera.x=redb.x;


  }
}

function spawnBalloonsPink() {
  if (frameCount % 80 === 0) {

    pinkb=createSprite(0,Math.random(10,330));
    pinkb.addImage("p", pinkba);
    pinkb.scale = 0.275; 
    pinkb.velocityX = 4;
    pinkb.y = Math.round(random(375, 25));
    pinkb.lifetime = 320;
    pinkbGroup.add(pinkb);



  }
}

function spawnBalloonsGreen() {

  if (frameCount % 80 === 0) {

    greenb=createSprite(0,Math.random(30,280));
    greenb.addImage("g", greenba);
    greenb.scale = 0.275;
    greenb.velocityX = 5;
    greenb.lifetime = 240;
    greenbGroup.add(greenb);
  


  }
}

function spawnBalloonsBlue() {

  if (frameCount % 80 === 0) {
    blueb=createSprite(0,Math.random(20,350));
    blueb.addImage("b", blueba);
    blueb.scale = 0.275;
    blueb.velocityX = 6;
    blueb.y = Math.round(random(375, 25));
    blueb.lifetime = 200;
    bluebGroup.add(blueb);
  

  }


}

function createArrow() {
  arrowb = createSprite(320, 20, 20, 20);
  arrowb.addImage("dd", arrowba);
  arrGroup.add(arrowb);
  arrowb.y=bowb.y;
  arrowb.velocityX=-15;
  arrowb.scale = 0.7;
} 

function reset(){
gameState="PLAY";
score=0;
}

  
  