 var BasketballImage , BasketballCourtImage ,BastketballHoopRight;
 var BasketballHoopLImage,BasketballHoopRImage , BasketballHoopLeft;
 var PlayerOneImage , PlayerTwoImage;
 var PlayerOne , PlayerTwo , Basketball;
 var PlayerOneFlipped , PlayerTwoFlipped;

 function preload(){
    BasketballImage = loadImage("Basketball.png");
    BasketballCourtImage = loadImage("basketballCourt.jpg");
    BasketballHoopLImage = loadImage("basketballHoopLeft.png");
    BasketballHoopRImage = loadImage("BasketballHoopRight3.png");
    PlayerOneImage = loadImage("PlayerOnee-removebg-preview.png");
    PlayerTwoImage = loadImage("PlayerTwoo-removebg-preview.png");
    PlayerOneFlipped = loadImage("playerOneFlipped.png");
    PlayerTwoFlipped = loadImage("playerTwoFlipped.png");
 }
 function setup(){
    createCanvas(1000,700);
    //BasketballHoops
    BasketballHoopLeft = createSprite(70,250,10,10);
    BasketballHoopRight = createSprite(930,250,10,10);
    BasketballHoopRight.addImage(BasketballHoopRImage);
    BasketballHoopLeft.addImage(BasketballHoopLImage);
    BasketballHoopLeft.scale = 0.8;
    BasketballHoopRight.scale = 0.8;
//Players
    PlayerOne = createSprite(700,350,10,10);
    PlayerTwo = createSprite(300,350,10,10);
    PlayerOne.addImage(PlayerOneImage);
    PlayerTwo.addImage(PlayerTwoImage);
    PlayerOne.scale = 0.35;
//Creates Basketball
    Basketball = createSprite(500,350,10,10);
    Basketball.addImage(BasketballImage);
    Basketball.scale = 0.09;

 }
 function draw(){
    background(BasketballCourtImage);

    //Player moves
   if(keyDown(LEFT_ARROW) ){
      PlayerOne.x -= 4;
   }
   if(keyDown(RIGHT_ARROW) ){
      PlayerOne.x += 4;
   }
   if(keyDown("A") ){
      PlayerTwo.x -= 4;
   }
   if(keyDown("D") ){
      PlayerTwo.x += 4;
   }
//Shoots
    if(Basketball.isTouching(PlayerOne) ){
       Basketball.velocityX = -3.5;
       Basketball.velocityY = -.19;
    }
    
    if(Basketball.isTouching(PlayerTwo) ){
      Basketball.velocityX = 3.5;
      Basketball.velocityY = -.19;
   }

    drawSprites();
 }