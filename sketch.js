var  bird1, packageSprite;
var packageBody,stone1,stone2,stone3;
var bird2,bird3;
var birdGroup;
var score=0;
var cloud,bg,ground; 
var stone;

const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var body;
function preload()
{
	bird1Img=loadImage("birdside_01.png")
	bird2Img=loadImage("birdside_15.png");
	bird3Img=loadImage("birdside_17.png");
    glassImg=loadImage("bowl.png");
	packageIMG=loadImage("diamond-1.png")
	stoneImg=loadImage("coal.png")
	stone2Img=loadImage("coal2.png")
	cloudImg=loadImage("cloud.png")
	bgImg=loadImage("grassland.png");
	bombImg=loadImage("bomb.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	rectMode(CENTER);
	
 glass=createSprite(width/2, height-100, width,10);
 glass.addImage(glassImg);
    glass.scale=2


	//packageSprite=createSprite(700, 250, 10,10);
	//packageSprite.addImage(packageIMG);
	//packageSprite.scale=0.2
	//packageSprite.velocityX=5;

	/*cloud=createSprite(200,150,10,10);
	cloud.addImage(cloudImg);
	cloud.scale=0.4
	cloud=createSprite(250,190,10,10);
	cloud.addImage(cloudImg);
	cloud.scale=0.4
	cloud=createSprite(1200,150,10,10);
	cloud.addImage(cloudImg);
	cloud.scale=0.4
	cloud=createSprite(1200,200,10,10);
	cloud.addImage(cloudImg);
	cloud.scale=0.48*/
	
	
	//helicopterSprite=createSprite(10, 200, 10,10);
	//helicopterSprite.addImage(helicopterIMG);
	//helicopterSprite.scale=0.6;
	//helicopterSprite.velocityX=5;
	groundSprite=createSprite(width/2, height-90, 150,10);
	groundSprite.shapeColor=color(255);
	groundSprite.visible=true;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 );
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.velocityX=0.02;
	packageSprite.visible=false

	World.add(world, packageBody);
	
//	stone.detectCollision(groundSprite)


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

 	World.add(world, ground);
	birdGroup=new Group();
	stoneGroup=new Group();
	//chain = new Chain(bird1.body,packageSprite.body);

	Engine.run(engine);

    redB= new Group();
  pinkB= new Group();
  greenB= new Group();
  blueB= new Group();

}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 

	//write code here to spawn the clouds
fill (0);
stroke(0);
textSize(50);
text ("Score :"+score,10,40);




	if(frameCount % 150 === 0) {
		var bird= createSprite(500,165,10,40);
		bird.addImage(bird1Img);
		//obstacle.debug = true;
		bird.velocityX = (6 + 3*score/100);
		
		//generate random obstacles
		var rand = Math.round(random(1,10));
		switch(rand) {
		 case 1: bird.addImage(bird1Img);
				  break;
		  case 2: bird.addImage(bird2Img);
				  break;
		  case 3: bird.addImage(bird3Img);
				  break;
		default: break;
		}
		
		//assign scale and lifetime to the obstacle           
		bird.scale = 0.5;
		bird.lifetime = 300;
		//add each obstacle to the group
		birdGroup.add(bird);
	  }
	


	  var select_stone = Math.round(random(1,4));
  
	  if (World.frameCount % 100 == 0) {
		if (select_stone == 1) {
		  packageSprite();
		} else if (select_balloon == 2) {
		  stone1();
		} else if (select_balloon == 3) {
		  stone2();
		} else {
		  stone3();
		}
	  }
	 
	  
	if (groundSprite .isTouching(stone1)){
	  score=score+5;
	}
	
	  
	  if (groundSprite .isTouching(stone2)){
	  pinkB.destroyEach();
	  arrowGroup.destroyEach();
	  score=score+10;
	}
	
	  
	  if (groundSprite .isTouching(stone3)){
	  end ();
	}
	
	  
	  if (groundSprite .isTouching(packageSprite)){
	  blueB.destroyEach();
	  arrowGroup.destroyEach();
	  score=score+50 ;
	}
		
	
  //spawnBird();
 // spawnBox();
 // keyPressed();
 //chain.display();
 //points();
  drawSprites();
 
}
function packageSprite() {
	var red = createSprite(150,200,Math.round(random(20, 370)), 10, 10);
	red.addImage(packageIMG);
	red.velocityX = 3;
	red.lifetime = 200;
	red.scale = 0.1;
	red.collide(groundSprite)
	redB.add(red);
	
  }
  
  function stone1() {
	var blue = createSprite(150,200,Math.round(random(20, 370)), 10, 10);
	blue.addImage(stoneImg);
	blue.velocityX = 3;
	blue.lifetime = 200;
	blue.scale = 0.1;
	blue.collide(groundSprite)
	blueB.add(blue);
  }
  
  function stone2() {
	var green = createSprite(150,200,Math.round(random(20, 370)), 10, 10);
	green.addImage(stone2Img);
	green.velocityX = 3;
	green.lifetime = 200;
	green.scale = 0.1;
	green.collide(groundSprite)
	greenB.add(green);   
  }
  
  function stone3() {
	var pink = createSprite(150,200,Math.round(random(20, 370)), 10, 10);
	pink.addImage(bombImg);
	pink.velocityX = 3;
	pink.lifetime = 200;
	pink.scale = 0.1
	pink.collide(groundSprite)
	pinkB.add(pink);
  }
  
function keyPressed(){
	if(keyCode === DOWN_ARROW) {
		select_stone.velocityX=0;
		select_stone.velocityY=(6+3*score/50);
		}

}

function end()
{
	birdGroup.x=0;
	select_stone.x=0;
	select_stone.y=0;

}