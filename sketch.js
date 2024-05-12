   
    var ground, invisibleGround, groundImage;
    var dog
    var bg_img 
    var dog_running
    var score = 0;

function preload() {
    groundImage = loadImage("grassGround.jpg")
    bg_img = loadImage("backgroundImg.png")
    dog_running = loadAnimation("dog1.png","dog2.png","dog3.png","dog4.png")
}

function setup() {
createCanvas(windowWidth, windowHeight);


//create a dog sprite
dog = createSprite(50,height-70,20,50);
dog.addAnimation("running", dog_running);
dog.scale = 0.8;

//create a ground sprite
   /* ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;*/

    ground = createSprite(width/2,height,200,700);
    ground.scale = 2.7; 
    ground.addImage("ground",groundImage);
      ground.velocityX = -4;
    

    //invsGround = createSprite(200,190,400,10);
    invsGround = createSprite(width/2,height-10,width,125);  
    invsGround.visible = false;
}

function draw() {
background(bg_img);

//jump when the space button is pressed
    if (keyDown("space") && dog.y>=100) {
    dog.velocityY = -10;
    }

    dog.velocityY = dog.velocityY + 0.8
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }


    dog.collide(invsGround);
    
      ground.x = width/2
  ground.velocityX = -(6 + 3*score/100);

    drawSprites();
    }

