var player;
var playerImage,playerReverseWalk,idle;
var bg;
var ground;
var gameState =1;
var playerLifeLine=3; 
var start;
var bulletGroup;
var bulletImage;
var fighterjetImage;
var fighterjetsGroup;
var score =0;
var num;
var medikitGroup; 



function preload(){
    playerImage = loadAnimation("Images/walk1.png","Images/walk2.png","Images/walk3.png","Images/walk4.png","Images/walk5.png","Images/walk6.png","Images/walk7.png","Images/walk8.png");
    bg = loadImage("Images/cartoonbackground.jpg");
    playerReverseWalk = loadAnimation("Images/reverseWalk1.png","Images/reverseWalk2.png","Images/reverseWalk3.png","Images/reverseWalk4.png","Images/reverseWalk5.png","Images/reverseWalk6.png","Images/reverseWalk7.png","Images/reverseWalk8.png")
    idle = loadAnimation("Images/walk1.png");
    bulletImage = loadAnimation("Images/bullet.png");
    trapImage1 = loadImage("Images/trap.png");
    trapImage2 = loadImage("Images/bomb.png");
    fighterjetImage1 = loadImage("Images/fighterjet1.png");
    fighterjetImage2 = loadImage("Images/fighterjet2.png");
    fighterjetImage3 = loadImage("Images/fighterjet3.png");
    fighterjetImage4 = loadImage("Images/fighterjet4.png");
    cyborgAnimation = loadAnimation("Images/robowalk1.png","Images/robowalk2.png","Images/robowalk3.png","Images/robowalk4.png","Images/robowalk5.png","Images/robowalk6.png","Images/robowalk7.png","Images/robowalk8.png")
    cyborgReAnimation = loadAnimation("Images/roboRewalk1.png","Images/roboRewalk2.png","Images/roboRewalk3.png","Images/roboRewalk4.png","Images/roboRewalk5.png","Images/roboRewalk6.png","Images/roboRewalk7.png","Images/roboRewalk8.png")
    boxImage1 = loadImage("Images/cargoBox1.png"); 
    boxImage2 = loadImage("Images/cargoBox2.png"); 
    boxImage3 = loadImage("Images/cargoBox3.png"); 
    boxImage4 = loadImage("Images/cargoBox4.png"); 
    tankImage1 = loadImage("Images/tank1.png");
    tankImage2 = loadImage("Images/tank2.png");
    tankImage3 = loadImage("Images/tank3.png"); 
    tankImage4 = loadImage("Images/tank4.png");   
    finishImage1 = loadImage("Images/flag.png");
    finishImage2 = loadImage("Images/cammo.png");
    finishImage3 = loadImage("Images/nuclear.png");
    medikitImage = loadImage("Images/medikit.png");
    bridgeImage = loadImage("Images/bridge.png");
    portalImage = loadImage("Images/portal.png"); 
    fortImage1 = loadImage("Images/fort.png");
    fortImage2 = loadImage("Images/fort2.png");
    brickImage = loadImage("Images/brick1.png");
    heartImage = loadImage("Images/heart.png")
    healthImage1 = loadImage("Images/heart1.png");
    healthImage2 = loadImage("Images/heart2.png");
    healthImage3 = loadImage("Images/heart3.png");
    healthImage4 = loadImage("Images/heart4.png");

}


function setup() {
    createCanvas(windowWidth,windowHeight); 
    //medikitGroup = createGroup();
    //prompt
    //num = prompt("Enter Your name");

    //
    bulletGroup = createGroup();
    trapGroup = createGroup();
    fighterjetsGroup = createGroup();
    tankGroup = createGroup();
    medikitGroup = createGroup();

    fort1 = createSprite(14250,350);
    fort1.addImage(fortImage1);   
    fort1.scale = 3

    fort2 = createSprite(15650,350);
    fort2.addImage(fortImage2);   
    fort2.scale = 3

    //player
    player = createSprite(windowWidth/2-200,windowHeight/2+280,20,20);
    player.addAnimation("player",playerImage);
    player.addAnimation("playerReverseWalk",playerReverseWalk);
    //player.addAnimation("idle",idle)
    player.scale = 0.6;

    //ground 
    ground = createSprite(windowWidth/2,windowHeight/2+360,150000000,30);
    ground.shapeColor = "black" ;
    ground.x = width/2

    //finish
    finish = createSprite(15000,590,40,40);
    finish.addImage(finishImage1);
    finish.scale = 0.5

    nuclear = createSprite(15165,570);
    nuclear.addImage(finishImage3)
    nuclear.scale = 1
    nuclear.visible = false

    // LEVEL 1 SPRITES

    //cargo
    cargoBox1 = createSprite(1500,680,20,20);
    cargoBox1.addImage(boxImage1);
    
    cargoBox2 = createSprite(1500,570,20,20);
    cargoBox2.addImage(boxImage1);

    cargoBox3 = createSprite(2000,690,20,20);
    cargoBox3.addImage(boxImage2);
    
    cargoBox4 = createSprite(2000,580,20,20);
    cargoBox4.addImage(boxImage2); 
    //
    cargoBox5 = createSprite(4420,690,20,20);
    cargoBox5.addImage(boxImage3);
    cargoBox5.scale = 0.8

    cargoBox6 = createSprite(4515,690,20,20);
    cargoBox6.addImage(boxImage3);
    cargoBox6.scale = 0.8

    cargoBox7 = createSprite(4515,595,20,20);
    cargoBox7.addImage(boxImage3);
    cargoBox7.scale = 0.8

    cargoBox8 = createSprite(4610,690,20,20);
    cargoBox8.addImage(boxImage3);
    cargoBox8.scale = 0.8
    

    cargoBox9 = createSprite(4610,595,20,20);
    cargoBox9.addImage(boxImage3);
    cargoBox9.scale = 0.8
    

    cargoBox10 = createSprite(4610,500,20,20);
    cargoBox10.addImage(boxImage3);
    cargoBox10.scale = 0.8
    

    cargoBox11 = createSprite(4705,690,20,20);
    cargoBox11.addImage(boxImage3);
    cargoBox11.scale = 0.8;

    cargoBox12 = createSprite(4705,595,20,20);
    cargoBox12.addImage(boxImage3);
    cargoBox12.scale = 0.8
    
    cargoBox13 = createSprite(4705,500,20,20);
    cargoBox13.addImage(boxImage3);
    cargoBox13.scale = 0.8

    cargoBox14 = createSprite(4800,690,20,20);
    cargoBox14.addImage(boxImage3);
    cargoBox14.scale = 0.8

    cargoBox15 = createSprite(4800,595,20,20);
    cargoBox15.addImage(boxImage3);
    cargoBox15.scale = 0.8

    cargoBox16 = createSprite(4800,500,20,20);
    cargoBox16.addImage(boxImage3);
    cargoBox16.scale = 0.8

    cargoBox17 = createSprite(6002,700,20,20);
    cargoBox17.addImage(boxImage4);
    cargoBox17.scale = 0.9;

    cargoBox18 = createSprite(6105,700,20,20);
    cargoBox18.addImage(boxImage4);
    cargoBox18.scale = 0.9;

    cargoBox19 = createSprite(6105,600,20,20);
    cargoBox19.addImage(boxImage4);
    cargoBox19.scale = 0.9;

    cargoBox20 = createSprite(6208,700,20,20);
    cargoBox20.addImage(boxImage4);
    cargoBox20.scale = 0.9;

    cargoBox21 = createSprite(6208,600,20,20);
    cargoBox21.addImage(boxImage4);
    cargoBox21.scale = 0.9;

    cargoBox22 = createSprite(6208,500,20,20);
    cargoBox22.addImage(boxImage4);
    cargoBox22.scale = 0.9;
    
    cargoBox23 = createSprite(6311,700,20,20);
    cargoBox23.addImage(boxImage4);
    cargoBox23.scale = 0.9;

    cargoBox24 = createSprite(6311,600,20,20);
    cargoBox24.addImage(boxImage4);
    cargoBox24.scale = 0.9;

    cargoBox25 = createSprite(6311,500,20,20);
    cargoBox25.addImage(boxImage4);
    cargoBox25.scale = 0.9;

    cargoBox26 = createSprite(6414,700,20,20);
    cargoBox26.addImage(boxImage4);
    cargoBox26.scale = 0.9;

    cargoBox27 = createSprite(6414,600,20,20);
    cargoBox27.addImage(boxImage4);
    cargoBox27.scale = 0.9;

    cargoBox28 = createSprite(6414,500,20,20);
    cargoBox28.addImage(boxImage4);
    cargoBox28.scale = 0.9;

    cargoBox29 = createSprite(6517,700,20,20);
    cargoBox29.addImage(boxImage4);
    cargoBox29.scale = 0.9;

    cargoBox30 = createSprite(6517,600,20,20);
    cargoBox30.addImage(boxImage4);
    cargoBox30.scale = 0.9;

    cargoBox31 = createSprite(6620,700,20,20);
    cargoBox31.addImage(boxImage4);
    cargoBox31.scale = 0.9;

    cargoBox32 = createSprite(8700,680,20,20);
    cargoBox32.addImage(boxImage2);
    cargoBox32.scale = 1.2;

    cargoBox33 = createSprite(8835,680,20,20);
    cargoBox33.addImage(boxImage2);
    cargoBox33.scale = 1.2;

    cargoBox34 = createSprite(8767.5,545,20,20);
    cargoBox34.addImage(boxImage2);
    cargoBox34.scale = 1.2;
//////////////////////////////////////////////////////////////////////////////////
    cargoBox35 = createSprite(10000,678,20,20);
    cargoBox35.addImage(boxImage1);
    cargoBox35.scale = 1;

    cargoBox36 = createSprite(10142,678,20,20);
    cargoBox36.addImage(boxImage1);
    cargoBox36.scale = 1;

    cargoBox37 = createSprite(10142,568,20,20);
    cargoBox37.addImage(boxImage1);
    cargoBox37.scale = 1;

    cargoBox38 = createSprite(10284,678,20,20);
    cargoBox38.addImage(boxImage1);
    cargoBox38.scale = 1;

    cargoBox39 = createSprite(10284,568,20,20);
    cargoBox39.addImage(boxImage1);
    cargoBox39.scale = 1;

    cargoBox40 = createSprite(10284,458,20,20);
    cargoBox40.addImage(boxImage1);
    cargoBox40.scale = 1;

    cargoBox41 = createSprite(10426,678,20,20);
    cargoBox41.addImage(boxImage1);
    cargoBox41.scale = 1;

    cargoBox42 = createSprite(10426,568,20,20);
    cargoBox42.addImage(boxImage1);
    cargoBox42.scale = 1;

    cargoBox43 = createSprite(10426,458,20,20);
    cargoBox43.addImage(boxImage1);
    cargoBox43.scale = 1;

    cargoBox44 = createSprite(10568,458)
    cargoBox44.addImage(boxImage1);
    cargoBox44.scale = 1;

    cargoBox45 = createSprite(10568,568)
    cargoBox45.addImage(boxImage1);
    cargoBox45.scale = 1;

    cargoBox46 = createSprite(10568,678)
    cargoBox46.addImage(boxImage1);
    cargoBox46.scale = 1;
    //////////////////////////////////////////////////////////////////////////

    cargoBox47 = createSprite(11285,458)
    cargoBox47.addImage(boxImage1);
    cargoBox47.scale = 1;

    cargoBox48 = createSprite(11285,568)
    cargoBox48.addImage(boxImage1);
    cargoBox48.scale = 1;

    cargoBox49 = createSprite(11285,678)
    cargoBox49.addImage(boxImage1);
    cargoBox49.scale = 1;

    cargoBox50 = createSprite(11427,458)
    cargoBox50.addImage(boxImage1);
    cargoBox50.scale = 1;

    cargoBox51 = createSprite(11427,568)
    cargoBox51.addImage(boxImage1);
    cargoBox51.scale = 1;

    cargoBox52 = createSprite(11427,678)
    cargoBox52.addImage(boxImage1);
    cargoBox52.scale = 1;

    cargoBox53 = createSprite(11569,458)
    cargoBox53.addImage(boxImage1);
    cargoBox53.scale = 1;

    cargoBox54 = createSprite(11569,568)
    cargoBox54.addImage(boxImage1);
    cargoBox54.scale = 1;

    cargoBox55 = createSprite(11569,678)
    cargoBox55.addImage(boxImage1);
    cargoBox55.scale = 1;
    
    cargoBox56 = createSprite(11711,458)
    cargoBox56.addImage(boxImage1);
    cargoBox56.scale = 1;

    cargoBox57 = createSprite(11711,568)
    cargoBox57.addImage(boxImage1);
    cargoBox57.scale = 1;

    cargoBox58 = createSprite(11711,678)
    cargoBox58.addImage(boxImage1);
    cargoBox58.scale = 1;

    cargoBox59 = createSprite(11853,458)
    cargoBox59.addImage(boxImage1);
    cargoBox59.scale = 1;

    cargoBox60 = createSprite(11853,568)
    cargoBox60.addImage(boxImage1);
    cargoBox60.scale = 1;

    cargoBox61 = createSprite(11853,678)
    cargoBox61.addImage(boxImage1);
    cargoBox61.scale = 1;
/////////////////////////////////////
    cargoBox62 = createSprite(12565,458)
    cargoBox62.addImage(boxImage1);
    cargoBox62.scale = 1;

    cargoBox63 = createSprite(12565,568)
    cargoBox63.addImage(boxImage1);
    cargoBox63.scale = 1;

    cargoBox64 = createSprite(12565,678)
    cargoBox64.addImage(boxImage1);
    cargoBox64.scale = 1;

    cargoBox65 = createSprite(12707,458)
    cargoBox65.addImage(boxImage1);
    cargoBox65.scale = 1;

    cargoBox66 = createSprite(12707,568)
    cargoBox66.addImage(boxImage1);
    cargoBox66.scale = 1;
    
    cargoBox67 = createSprite(12707,678)
    cargoBox67.addImage(boxImage1);
    cargoBox67.scale = 1;

    cargoBox68 = createSprite(12849,458)
    cargoBox68.addImage(boxImage1);
    cargoBox68.scale = 1;
    
    cargoBox69 = createSprite(12849,568)
    cargoBox69.addImage(boxImage1);
    cargoBox69.scale = 1;

    cargoBox70 = createSprite(12849,678)
    cargoBox70.addImage(boxImage1);
    cargoBox70.scale = 1;

    cargoBox71 = createSprite(12991,458)
    cargoBox71.addImage(boxImage1);
    cargoBox71.scale = 1;

    cargoBox72 = createSprite(12991,568)
    cargoBox72.addImage(boxImage1);
    cargoBox72.scale = 1;

    cargoBox73 = createSprite(12991,678)
    cargoBox73.addImage(boxImage1);
    cargoBox73.scale = 1;

    cargoBox74 = createSprite(13133,568)
    cargoBox74.addImage(boxImage1);
    cargoBox74.scale = 1;

    cargoBox75 = createSprite(13133,678)
    cargoBox75.addImage(boxImage1);
    cargoBox75.scale = 1;

    cargoBox76 = createSprite(13275,678)
    cargoBox76.addImage(boxImage1);
    cargoBox76.scale = 1;

    //cyborg
    cyborg1 = createSprite(1800,665,30,30);
    cyborg1.velocityX = -5
    cyborg1.addAnimation("cyborg",cyborgAnimation);
    cyborg1.scale = 0.8;

    cyborg2 = createSprite(5500,665,30,30);
    cyborg2.velocityX = -5
    cyborg2.addAnimation("cyborgWalk",cyborgAnimation);
    cyborg2.scale = 0.8;

    cyborg3 = createSprite(11000,310,30,30);
    cyborg3.velocityX = -5
    cyborg3.addAnimation("cyborg",cyborgAnimation);
    cyborg3.scale = 0.8;

    cyborg4 = createSprite(12080,310,30,30);
    cyborg4.velocityX = -5
    cyborg4.addAnimation("cyborgWalk",cyborgAnimation);
    cyborg4.scale = 0.8;
    
    //bridge
    bridge1 = createSprite(10930,315,20,20);
    bridge1.addImage(bridgeImage);
    bridge1.scale = 2;

    bridge2 = createSprite(12210,315,20,20);
    bridge2.addImage(bridgeImage);
    bridge2.scale = 2;

    //ground
    b1 = createSprite(10920,395,600,10)
    b1.shapeColor = "black";
    b1.visible = false;

    b2 = createSprite(12200,395,600,10)
    b2.shapeColor = "black";
    b2.visible = false;

     //walls
     w1 = createSprite(10660,350,10,80);
     w1.shapeColor = "black"
     w1.visible = false;

     w2 = createSprite(11200,350,10,80);
     w2.shapeColor = "black"
     w2.visible = false;

     w3 = createSprite(11940,350,10,80);
     w3.shapeColor = "black"
     w3.visible = false;

     w4 = createSprite(12480,350,10,80);
     w4.shapeColor = "black"
     w4.visible = false;

     w5 = createSprite(17600,windowHeight/2,200,windowHeight);
     w5.shapeColor = "black"
     //w5.visible = false;

     w6 = createSprite(-100,windowHeight/2,200,windowHeight);
     w6.shapeColor = "black"
     //w6.visible = false;

    //medikit
    /*medikit1 = createSprite(Math.round(random(1500, 8775)), 437, 40,40);
    medikit1.addImage(medikitImage);
    medikit1.scale = 0.15;
    medikit1.debug = true;
    medikit1.lifetime = 400;
    medikitGroup.add(medikit1);
    medikit1 = createSprite(8775,437,40,40)
    medikit1.addImage(medikitImage);
    medikit1.scale = 0.15;
    medikit1.debug = true;

    medikit2 = createSprite(1500,490,40,40)
    medikit2.addImage(medikitImage);
    medikit2.scale = 0.15;
    medikit2.debug = true;

    medikit3 = createSprite(2005,485,40,40)
    medikit3.addImage(medikitImage);
    medikit3.scale = 0.15;
    medikit3.debug = true;

    medikit4 = createSprite(4640,425,40,40)
    medikit4.addImage(medikitImage);
    medikit4.scale = 0.15;
    medikit4.debug = true;

    medikit5 = createSprite(4800,425,40,40)
    medikit5.addImage(medikitImage);
    medikit5.scale = 0.15;
    medikit5.debug = true;

    medikit6 = createSprite(10000,597,40,40)
    medikit6.addImage(medikitImage);
    medikit6.scale = 0.15;
    medikit6.debug = true;

    medikit7 = createSprite(10150,490,40,40)
    medikit7.addImage(medikitImage);
    medikit7.scale = 0.15;
    medikit7.debug = true;

    medikit8 = createSprite(10360,377,40,40)
    medikit8.addImage(medikitImage);
    medikit8.scale = 0.15;
    medikit8.debug = true;

    medikit9 = createSprite(11600,377,40,40)
    medikit9.addImage(medikitImage);
    medikit9.scale = 0.15;
    medikit9.debug = true;

    medikit10 = createSprite(12900,377,40,40)
    medikit10.addImage(medikitImage);
    medikit10.scale = 0.15;
    medikit10.debug = true;

    medikit11 = createSprite(13140,490,40,40)
    medikit11.addImage(medikitImage);
    medikit11.scale = 0.15;
    medikit11.debug = true;

    medikit12 = createSprite(13280,597,40,40)
    medikit12.addImage(medikitImage);
    medikit12.scale = 0.15;
    medikit12.debug = true;

    medikit13 = createSprite(6320,400,40,40)
    medikit13.addImage(medikitImage);
    medikit13.scale = 0.15;
    medikit13.debug = true;*/

    health = createSprite(400,50,20,20);
    health.addImage(healthImage1);

    
    //tank
    tank1 = createSprite(3000,645);
    tank1.addImage(tankImage1);
    tank1.scale = 0.5;
    tank1.depth = player.depth;
    player.depth +=1;

    tank2 = createSprite(5500,622);
    tank2.addImage(tankImage3);
    tank2.scale = 1.5;
    tank2.depth = player.depth;
    player.depth +=1;

    tank3 = createSprite(8000,622);
    tank3.addImage(tankImage4);
    tank3.scale = 1;
    tank3.depth = player.depth;
    player.depth +=1;

    // LEVEL 2 SPRITES

    //start button
    start = createButton("Let's Start");
    start.position(camera.position.x+windowWidth/2-90, windowHeight/2+200);
    start.style('background-color', color(17, 255, 0));
    start.style('font-size', '40px');
    start.style('font-family', 'Architects Daughter');
    start.style('border-radius','40px');
    start.style('border-width','10px');
    start.style('border-color','white');
    start.style('border-style','outset double outset double');

    //level 2 start button
    start2 = createButton("Let's Start");
    start2.position(camera.position.x+windowWidth/2-90, windowHeight/2+200);
    start2.style('background-color', color(17, 255, 0));
    start2.style('font-size', '40px');
    start2.style('font-family', 'Architects Daughter');
    start2.style('border-radius','40px');
    start2.style('border-width','10px');
    start2.style('border-color','white');
    start2.style('border-style','outset double outset double');

    //restart button
    reStart = createButton("Press to Play Again");
    reStart.position(camera.position.x+windowWidth/2-180, windowHeight/2+200);
    reStart.style('background-color', color(17, 255, 0));
    reStart.style('font-size', '40px');
    reStart.style('font-family', 'Architects Daughter');
    reStart.style('border-radius','40px');
    reStart.style('border-width','10px');
    reStart.style('border-color','white');
    reStart.style('border-style','outset double outset double');

   ;

}

function draw() {
    if(gameState === 0){
        background(0);

        start.show();
        reStart.hide();
        start2.hide();
        //display the game name
        strokeWeight(2);
        stroke("blue");
        fill('#39ff14');
        textSize(70);
        textFont('Rockwell');
        text('WW3', camera.position.x+windowWidth/2-940, windowHeight/2-300);

        //display the game information
        noStroke();
        fill("cyan");
        textSize(30);
        text("Hi Captain, this is Major X. You are on a mission to save this world from getting nuked by the mad dictator Felon, who wants",camera.position.x+windowWidth/2-1700,windowHeight/2-220);
        text("to rule the entire world. And his madness will destroy the whole world. You are our only hope. But safety is important. Read",camera.position.x+windowWidth/2-1700,windowHeight/2-180);
        text("the pointers given below and start the game. Best of luck captain",camera.position.x+windowWidth/2-1700,windowHeight/2-140);
        fill(147, 58,22)
        text("1. Press the right and left arrow keys to move",camera.position.x+windowWidth/2-1200,windowHeight/2-20);
        text("2. Press space to jump",camera.position.x+windowWidth/2-1200,windowHeight/2+20);
        text("3. Dodge the bullets and the trap",camera.position.x+windowWidth/2-1200,windowHeight/2+60);
        text("4. Collect medikits and cammo boxes to increase your score",camera.position.x+windowWidth/2-1200,windowHeight/2+100);

        //hiding the sprites
        //player.visible = false;
        //ground.visible = false;

        //go to play state
        start.mousePressed(()=>{
            gameState = 1;
            player.x = windowWidth/2-600;
            //player.x = 2600;
            player.y = windowHeight/2+280
            ground.x = windowWidth/2-1000;
            cyborg1.x = 1800;
            cyborg2.x = 5500;
            cyborg3.x = 11000;
            cyborg4.x = 12080;
            score = 0;
        })

    }
    else if(gameState === 1){
        background(bg);
      
      finish.addImage(finishImage1);
      finish.scale = 0.5

      fort1.visible = false
      fort2.visible = false

      nuclear.visible = false;

      tank1.visible = true
      tank2.visible = true
      tank3.visible = true

      cargoBox1.visible = true
      cargoBox2.visible = true
      cargoBox3.visible = true
      cargoBox4.visible = true
      cargoBox5.visible = true
      cargoBox6.visible = true
      cargoBox7.visible = true
      cargoBox8.visible = true
      cargoBox9.visible = true
      cargoBox10.visible = true
      cargoBox11.visible = true
      cargoBox12.visible = true
      cargoBox13.visible = true
      cargoBox14.visible = true
      cargoBox15.visible = true
      cargoBox16.visible = true
      cargoBox17.visible = true
      cargoBox18.visible = true
      cargoBox19.visible = true
      cargoBox20.visible = true
      cargoBox21.visible = true
      cargoBox22.visible = true
      cargoBox23.visible = true
      cargoBox24.visible = true
      cargoBox25.visible = true
      cargoBox26.visible = true
      cargoBox27.visible = true
      cargoBox28.visible = true
      cargoBox29.visible = true
      cargoBox30.visible = true
      cargoBox31.visible = true
      cargoBox32.visible = true
      cargoBox33.visible = true
      cargoBox34.visible = true
      cargoBox35.visible = true
      cargoBox36.visible = true
      cargoBox37.visible = true
      cargoBox38.visible = true
      cargoBox39.visible = true
      cargoBox40.visible = true
      cargoBox41.visible = true
      cargoBox42.visible = true
      cargoBox43.visible = true
      cargoBox44.visible = true
      cargoBox45.visible = true
      cargoBox46.visible = true
      cargoBox47.visible = true
      cargoBox48.visible = true
      cargoBox49.visible = true
      cargoBox50.visible = true
      cargoBox51.visible = true
      cargoBox52.visible = true
      cargoBox53.visible = true
      cargoBox54.visible = true
      cargoBox55.visible = true
      cargoBox56.visible = true
      cargoBox57.visible = true
      cargoBox58.visible = true
      cargoBox59.visible = true
      cargoBox60.visible = true
      cargoBox60.visible = true
      cargoBox61.visible = true
      cargoBox62.visible = true
      cargoBox63.visible = true
      cargoBox64.visible = true
      cargoBox65.visible = true
      cargoBox66.visible = true
      cargoBox67.visible = true
      cargoBox68.visible = true
      cargoBox69.visible = true
      cargoBox70.visible = true
      cargoBox71.visible = true
      cargoBox72.visible = true
      cargoBox73.visible = true
      cargoBox74.visible = true
      cargoBox75.visible = true
      cargoBox76.visible = true

      /*medikit1.visible = true
      medikit2.visible = true
      medikit3.visible = true
      medikit4.visible = true
      medikit5.visible = true
      medikit6.visible = true
      medikit7.visible = true
      medikit8.visible = true
      medikit9.visible = true
      medikit10.visible = true
      medikit11.visible = true
      medikit12.visible = true
      medikit13.visible = true*/

      cyborg1.visible = true
      cyborg2.visible = true
      cyborg3.visible = true
      cyborg4.visible = true

      finish.visible = true

      bridge1.visible = true
      bridge2.visible = true
        
        if(cyborg1.isTouching(cargoBox1)){
            cyborg1.changeAnimation("roboRewalk",cyborgReAnimation);
            cyborg1.velocityX = 5
        }

        if(cyborg1.isTouching(cargoBox3)){
            cyborg1.changeAnimation("robowalk",cyborgAnimation);
            cyborg1.velocityX = -5
        }

        if(cyborg2.isTouching(cargoBox14)||cyborg2.isTouching(cargoBox15)||cyborg2.isTouching(cargoBox16)){
          cyborg2.changeAnimation("robowalk",cyborgAnimation);
          cyborg2.velocityX = 5
        }
        
        if(cyborg2.isTouching(cargoBox17)){
          cyborg2.changeAnimation("roRebowalk",cyborgReAnimation);
          cyborg2.velocityX = -5
        }
        if(cyborg3.isTouching(w1)){
          cyborg3.changeAnimation("roboRewalk",cyborgReAnimation);
          cyborg3.velocityX = 5
        }

        if(cyborg3.isTouching(w2)){
          cyborg3.changeAnimation("robowalk",cyborgAnimation);
          cyborg3.velocityX = -5
        }

        if(cyborg4.isTouching(w3)){
          cyborg4.changeAnimation("robowalk",cyborgAnimation);
          cyborg4.velocityX = 5
        }
      
        if(cyborg4.isTouching(w4)){
          cyborg4.changeAnimation("roRebowalk",cyborgReAnimation);
          cyborg4.velocityX = -5
        }
        // camera position 
        camera.position.x = player.x;
        
        cargoBox1.setCollider("rectangle",0,0,150,100)
        cargoBox2.setCollider("rectangle",0,0,150,100)
        cargoBox3.setCollider("rectangle",0,0,110,100)
        cargoBox4.setCollider("rectangle",0,0,110,130)
        cargoBox5.setCollider("rectangle",0,0,110,110)
        cargoBox6.setCollider("rectangle",0,0,110,110)
        cargoBox7.setCollider("rectangle",0,0,110,110)
        cargoBox8.setCollider("rectangle",0,0,110,110)
        cargoBox9.setCollider("rectangle",0,0,110,110)
        cargoBox10.setCollider("rectangle",0,0,110,110)
        cargoBox11.setCollider("rectangle",0,0,110,110)
        cargoBox12.setCollider("rectangle",0,0,110,110)
        cargoBox13.setCollider("rectangle",0,0,110,110)
        cargoBox14.setCollider("rectangle",0,0,110,110)
        cargoBox15.setCollider("rectangle",0,0,110,110)
        cargoBox16.setCollider("rectangle",0,0,110,110)
        cargoBox17.setCollider("rectangle",0,0,95,160)
        cargoBox18.setCollider("rectangle",0,0,95,160)
        cargoBox19.setCollider("rectangle",0,0,95,160)
        cargoBox20.setCollider("rectangle",0,0,95,160)
        cargoBox21.setCollider("rectangle",0,0,95,160)
        cargoBox22.setCollider("rectangle",0,0,95,160)
        cargoBox23.setCollider("rectangle",0,0,95,160)
        cargoBox24.setCollider("rectangle",0,0,135,160)
        cargoBox25.setCollider("rectangle",0,0,135,160)
        cargoBox26.setCollider("rectangle",0,0,135,160)
        cargoBox27.setCollider("rectangle",0,0,135,160)
        cargoBox28.setCollider("rectangle",0,0,135,160)
        cargoBox29.setCollider("rectangle",0,0,95,160)
        cargoBox30.setCollider("rectangle",0,0,135,160)
        cargoBox31.setCollider("rectangle",0,0,135,160)
        cargoBox32.setCollider("rectangle",5,0,115,130)
        cargoBox33.setCollider("rectangle",5,0,115,130)
        cargoBox34.setCollider("rectangle",5,0,115,130)
        ///////////////////////////////////////////////
        cargoBox35.setCollider("rectangle",2,3,145,110);
        cargoBox36.setCollider("rectangle",2,3,145,110)
        cargoBox37.setCollider("rectangle",2,3,145,110)
        cargoBox38.setCollider("rectangle",2,3,145,110)
        cargoBox39.setCollider("rectangle",2,3,145,110)
        cargoBox40.setCollider("rectangle",2,3,145,110);
        cargoBox41.setCollider("rectangle",2,3,145,110)
        cargoBox42.setCollider("rectangle",2,3,145,110)
        cargoBox43.setCollider("rectangle",2,3,145,110)
        cargoBox44.setCollider("rectangle",2,3,145,110)
        cargoBox45.setCollider("rectangle",2,3,145,110);
        cargoBox46.setCollider("rectangle",2,3,145,110)
        cargoBox47.setCollider("rectangle",2,3,145,110)
        cargoBox48.setCollider("rectangle",2,3,145,110)
        cargoBox49.setCollider("rectangle",2,3,145,110)
        cargoBox50.setCollider("rectangle",2,3,145,110);
        cargoBox51.setCollider("rectangle",2,3,145,110)
        cargoBox52.setCollider("rectangle",2,3,145,110)
        cargoBox53.setCollider("rectangle",2,3,145,110)
        cargoBox54.setCollider("rectangle",2,3,145,110)
        cargoBox55.setCollider("rectangle",2,3,145,110)
        cargoBox56.setCollider("rectangle",2,3,145,110);
        cargoBox57.setCollider("rectangle",2,3,145,110)
        cargoBox58.setCollider("rectangle",2,3,145,110)
        cargoBox59.setCollider("rectangle",2,3,145,110)
        cargoBox60.setCollider("rectangle",2,3,145,110)
        cargoBox61.setCollider("rectangle",2,3,145,110)
        cargoBox62.setCollider("rectangle",2,3,145,110)
        cargoBox63.setCollider("rectangle",2,3,145,110)
        cargoBox64.setCollider("rectangle",2,3,145,110)
        cargoBox65.setCollider("rectangle",2,3,145,110)
        cargoBox66.setCollider("rectangle",2,3,145,110)
        cargoBox67.setCollider("rectangle",2,3,145,110)
        cargoBox68.setCollider("rectangle",2,3,145,110)
        cargoBox69.setCollider("rectangle",2,3,145,110)
        cargoBox70.setCollider("rectangle",2,3,145,110)
        cargoBox71.setCollider("rectangle",2,3,145,110)
        cargoBox72.setCollider("rectangle",2,3,145,110)
        cargoBox73.setCollider("rectangle",2,3,145,110)
        cargoBox74.setCollider("rectangle",2,3,145,110)
        cargoBox75.setCollider("rectangle",2,3,145,110)
        cargoBox76.setCollider("rectangle",2,3,145,110)
        //////////////////////////////////////
        /*medikit1.setCollider("circle",0,0,200)
        medikit2.setCollider("circle",0,0,200)
        medikit3.setCollider("circle",0,0,200)
        medikit4.setCollider("circle",0,0,200)
        medikit5.setCollider("circle",0,0,200)
        medikit6.setCollider("circle",0,0,200)
        medikit7.setCollider("circle",0,0,200)
        medikit8.setCollider("circle",0,0,200)
        medikit9.setCollider("circle",0,0,200)
        medikit10.setCollider("circle",0,0,200)
        medikit11.setCollider("circle",0,0,200)
        medikit12.setCollider("circle",0,0,200)
        medikit13.setCollider("circle",0,0,200)*/



        //show the buttons
        start.hide();
        reStart.hide();
        start2.hide();

        //ground.visible = false;

        health.x = camera.position.x
        
        if(keyDown("space")&&player.y>=150){
          player.velocityY = -12;
        }

        if(keyDown(RIGHT_ARROW)){
          player.x += 50
          player.changeAnimation("playerImage",playerImage);
        }
        
        if(keyDown(LEFT_ARROW)){
           player.x -= 50
           player.changeAnimation("playerReverseWalk",playerReverseWalk);
        }

        player.velocityY = player.velocityY + 1;

        if(bulletGroup.isTouching(player)||trapGroup.isTouching(player)||player.isTouching(cyborg1)||player.isTouching(cyborg2)||player.isTouching(cyborg3)||player.isTouching(cyborg4)){
          playerLifeLine = playerLifeLine-1
          player.x = 400
          player.y = windowHeight/2+280

          bulletGroup.setVelocityXEach(0);
          trapGroup.setVelocityXEach(0); 
          fighterjetsGroup.setVelocityXEach(0) 
          medikitGroup.setVelocityEach(0)

          bulletGroup.setLifetimeEach(-1); 
          trapGroup.setLifetimeEach(-1);
          fighterjetsGroup.setLifetimeEach(-1);
          medikitGroup.setLifetimeEach(-1)

          bulletGroup.destroyEach();
          trapGroup.destroyEach();
          fighterjetsGroup.destroyEach()
          medikitGroup.destroyEach();
        }
        if(medikitGroup.isTouching(player)){
          score +=10
          medikitGroup.destroyEach();

        }
        if(playerLifeLine===3){
          health.addImage(healthImage1)
        }
        if(playerLifeLine===2){
          health.addImage(healthImage2)
          
        }
        if(playerLifeLine===1){
          health.addImage(healthImage3)
          
        }

        if(playerLifeLine === 0){
          health.addImage(healthImage4)
          gameState=4

          bulletGroup.setVelocityXEach(0);
          trapGroup.setVelocityXEach(0); 
          fighterjetsGroup.setVelocityXEach(0) 

          bulletGroup.setLifetimeEach(-1); 
          trapGroup.setLifetimeEach(-1);
          fighterjetsGroup.setLifetimeEach(-1);

          bulletGroup.destroyEach();
          trapGroup.destroyEach();
          fighterjetsGroup.destroyEach();
        }


        /*if(player.isTouching(medikit1)){
          score +=10
          medikit1.destroy();
        }
        
        if(player.isTouching(medikit2)){
          score +=10
          medikit2.destroy();
        }
        if(player.isTouching(medikit3)){
          score +=10
          medikit3.destroy();
        }
        if(player.isTouching(medikit4)){
          score +=10
          medikit4.destroy();
        }
        if(player.isTouching(medikit5)){
          score +=10
          medikit5.destroy();
        }
        if(player.isTouching(medikit6)){
          score +=10
          medikit6.destroy();
        }
        if(player.isTouching(medikit7)){
          score +=10
          medikit7.destroy();
        }
        if(player.isTouching(medikit8)){
          score +=10
          medikit8.destroy();
        }
        if(player.isTouching(medikit9)){
          score +=10
          medikit9.destroy();
        }
        if(player.isTouching(medikit10)){
          score +=10
          medikit10.destroy();
        }
        if(player.isTouching(medikit11)){
          score +=10
          medikit11.destroy();
        }
        if(player.isTouching(medikit12)){
          score +=10
          medikit12.destroy();
        }
        if(player.isTouching(medikit13)){
          score +=10
          medikit13.destroy();
        }*/
  
        if(player.isTouching(finish)){
            gameState = 2
            bulletGroup.setVelocityXEach(0);
            trapGroup.setVelocityXEach(0); 
            fighterjetsGroup.setVelocityXEach(0)

            bulletGroup.setLifetimeEach(-1); 
            trapGroup.setLifetimeEach(-1);
            fighterjetsGroup.setLifetimeEach(-1);

            bulletGroup.destroyEach();
            trapGroup.destroyEach();
            fighterjetsGroup.destroyEach();

        }

        player.collide(ground);
        player.collide(cargoBox1);
        player.collide(cargoBox2);
        player.collide(cargoBox3);
        player.collide(cargoBox4);
        player.collide(cargoBox5);
        player.collide(cargoBox6);
        player.collide(cargoBox7);
        player.collide(cargoBox8);
        player.collide(cargoBox9);
        player.collide(cargoBox10);
        player.collide(cargoBox11);
        player.collide(cargoBox12);
        player.collide(cargoBox13);
        player.collide(cargoBox14);
        player.collide(cargoBox15);
        player.collide(cargoBox16);
        player.collide(cargoBox17);
        player.collide(cargoBox18);
        player.collide(cargoBox19);
        player.collide(cargoBox20);
        player.collide(cargoBox21);
        player.collide(cargoBox22);
        player.collide(cargoBox23);
        player.collide(cargoBox24);
        player.collide(cargoBox25);
        player.collide(cargoBox26);
        player.collide(cargoBox27);
        player.collide(cargoBox28);
        player.collide(cargoBox29);
        player.collide(cargoBox30);
        player.collide(cargoBox31);
        player.collide(cargoBox32);
        player.collide(cargoBox33);
        player.collide(cargoBox34);
        player.collide(cargoBox35);
        player.collide(cargoBox36);
        player.collide(cargoBox37);
        player.collide(cargoBox38);
        player.collide(cargoBox39);
        player.collide(cargoBox40);
        player.collide(cargoBox41);
        player.collide(cargoBox42);
        player.collide(cargoBox43);
        player.collide(cargoBox44);
        player.collide(cargoBox45);
        player.collide(cargoBox46);
        player.collide(cargoBox47);
        player.collide(cargoBox48);
        player.collide(cargoBox49);
        player.collide(cargoBox50);
        player.collide(cargoBox51);
        player.collide(cargoBox52);
        player.collide(cargoBox53);
        player.collide(cargoBox54);
        player.collide(cargoBox55);
        player.collide(cargoBox56);
        player.collide(cargoBox57);
        player.collide(cargoBox58);
        player.collide(cargoBox59);
        player.collide(cargoBox60);
        player.collide(cargoBox61);
        player.collide(cargoBox62);
        player.collide(cargoBox63);
        player.collide(cargoBox64);
        player.collide(cargoBox65);
        player.collide(cargoBox66);
        player.collide(cargoBox67);
        player.collide(cargoBox68);
        player.collide(cargoBox69);
        player.collide(cargoBox70);
        player.collide(cargoBox71);
        player.collide(cargoBox72);
        player.collide(cargoBox73);
        player.collide(cargoBox74);
        player.collide(cargoBox75);
        player.collide(cargoBox76);
        player.collide(b1);
        player.collide(b2);
        player.collide(w5);
        player.collide(w6);
        Traps();
        Bullet();
        Medikits();
        Fighterjet();
        drawSprites();
        textSize(40)
        fill("black")
        text("'s Score:"+score,windowWidth/2+camera.position.x-400,120);
        
    }
    else if(gameState === 2){
        background("black");
        
        //hide the buttons
        start.hide();
        reStart.hide();
        start2.show();
        //go to start state
        reStart.mousePressed(()=>{
            gameState = 0;
        })
        //text
        strokeWeight(2);
        stroke("blue");
        fill('#39ff14');
        textSize(70);
        textFont('Rockwell');
        text('WW3',camera.position.x+windowWidth/2-940, windowHeight/2-300);
        
        textSize(40)
        fill("red");
        text("CONGRATULATIONS ON COMPLETING LEVEL 1",camera.position.x+windowWidth/2-1250,windowHeight/2-200)
        text("READ THE POINTERS GIVEN BELOW AND PROCEED TO LEVEL 2",camera.position.x+windowWidth/2-1400,windowHeight/2-100)

        fill(147, 58,22)
        text("1. Be ready as the obstacles will come with more speed",camera.position.x+windowWidth/2-1370,windowHeight/2-20);
        text("2. Press space to jump",camera.position.x+windowWidth/2-1370,windowHeight/2+20);
        text("3. Press left and right arrow to move",camera.position.x+windowWidth/2-1370,windowHeight/2+60);
        text("4. Collect medikits and cammo boxes to increase your score",camera.position.x+windowWidth/2-1370,windowHeight/2+100);

      start2.mousePressed(()=>{
          gameState = 3;
          player.x = windowWidth/2-600;
          player.x = 200;
          player.y = windowHeight/2+280
          ground.x = windowWidth/2-1000;
          cyborg1.x = 1800;
          cyborg2.x = 5500;
          cyborg3.x = 11400;
          cyborg4.x = 12080;
          score = 0;
      })


    } else if(gameState ===3){
      background(bg);

      finish.addImage(finishImage2)
      finish.scale = 1.2;
      camera.position.x = player.x;

      bulletGroup.setVelocityXEach(-50);
      trapGroup.setVelocityXEach(-50);

      nuclear.visible = true;

      fort1.visible = true
      fort2.visible = true
      
      tank1.visible = false
      tank2.visible = false
      tank3.visible = false


      cargoBox1.visible = false
      cargoBox2.visible = false
      cargoBox3.visible = false
      cargoBox4.visible = false
      cargoBox5.visible = false
      cargoBox6.visible = false
      cargoBox7.visible = false
      cargoBox8.visible = false
      cargoBox9.visible = false
      cargoBox10.visible = false
      cargoBox11.visible = false
      cargoBox12.visible = false
      cargoBox13.visible = false
      cargoBox14.visible = false
      cargoBox15.visible = false
      cargoBox16.visible = false
      cargoBox17.visible = false
      cargoBox18.visible = false
      cargoBox19.visible = false
      cargoBox20.visible = false
      cargoBox21.visible = false
      cargoBox22.visible = false
      cargoBox23.visible = false
      cargoBox24.visible = false
      cargoBox25.visible = false
      cargoBox26.visible = false
      cargoBox27.visible = false
      cargoBox28.visible = false
      cargoBox29.visible = false
      cargoBox30.visible = false
      cargoBox31.visible = false
      cargoBox32.visible = false
      cargoBox33.visible = false
      cargoBox34.visible = false
      cargoBox35.visible = false
      cargoBox36.visible = false
      cargoBox37.visible = false
      cargoBox38.visible = false
      cargoBox39.visible = false
      cargoBox40.visible = false
      cargoBox41.visible = false
      cargoBox42.visible = false
      cargoBox43.visible = false
      cargoBox44.visible = false
      cargoBox45.visible = false
      cargoBox46.visible = false
      cargoBox47.visible = false
      cargoBox48.visible = false
      cargoBox49.visible = false
      cargoBox50.visible = false
      cargoBox51.visible = false
      cargoBox52.visible = false
      cargoBox53.visible = false
      cargoBox54.visible = false
      cargoBox55.visible = false
      cargoBox56.visible = false
      cargoBox57.visible = false
      cargoBox58.visible = false
      cargoBox59.visible = false
      cargoBox60.visible = false
      cargoBox61.visible = false
      cargoBox62.visible = false
      cargoBox63.visible = false
      cargoBox64.visible = false
      cargoBox65.visible = false
      cargoBox66.visible = false
      cargoBox67.visible = false
      cargoBox68.visible = false
      cargoBox69.visible = false
      cargoBox70.visible = false
      cargoBox71.visible = false
      cargoBox72.visible = false
      cargoBox73.visible = false
      cargoBox74.visible = false
      cargoBox75.visible = false
      cargoBox76.visible = false

      /*medikit1.visible = false
      medikit2.visible = false
      medikit3.visible = false
      medikit4.visible = false
      medikit5.visible = false
      medikit6.visible = false
      medikit7.visible = false
      medikit8.visible = false
      medikit9.visible = false
      medikit10.visible = false
      medikit11.visible = false
      medikit12.visible = false
      medikit13.visible = false*/


      cyborg1.visible = false
      cyborg2.visible = false
      cyborg3.visible = false
      cyborg4.visible = false

      bridge1.visible = false
      bridge2.visible = false

      //show the buttons
      start.hide();
      reStart.hide();
      start2.hide();

      //ground.visible = false;

      if(keyDown("space")&&player.y>=150){
          player.velocityY = -12; 
      }

      if(keyDown(RIGHT_ARROW)){
        player.x += 50
        player.changeAnimation("playerImage",playerImage);
      }
      
      if(keyDown(LEFT_ARROW)){
        player.x -= 50
        player.changeAnimation("playerReverseWalk",playerReverseWalk);
      }

      player.velocityY = player.velocityY + 2;

      if(bulletGroup.isTouching(player)||trapGroup.isTouching(player)){
          playerLifeLine -= 1

          player.x = 400
          player.y = windowHeight/2+280;

          bulletGroup.setVelocityXEach(0);
          trapGroup.setVelocityXEach(0); 
          fighterjetsGroup.setVelocityXEach(0)

          bulletGroup.setLifetimeEach(-1); 
          trapGroup.setLifetimeEach(-1);
          fighterjetsGroup.setLifetimeEach(-1);

          bulletGroup.destroyEach();
          trapGroup.destroyEach();
          fighterjetsGroup.destroyEach();
          
      }
      if(playerLifeLine===3){
        health.addImage(healthImage1)
      }
      if(playerLifeLine===2){
        health.addImage(healthImage2)
        
      }
      if(playerLifeLine===1){
        health.addImage(healthImage3)
        
      }

      if(playerLifeLine === 0){
        health.addImage(healthImage4)
        gameState=4

        bulletGroup.setVelocityXEach(0);
        trapGroup.setVelocityXEach(0); 
        fighterjetsGroup.setVelocityXEach(0) 

        bulletGroup.setLifetimeEach(-1); 
        trapGroup.setLifetimeEach(-1);
        fighterjetsGroup.setLifetimeEach(-1);

        bulletGroup.destroyEach();
        trapGroup.destroyEach();
        fighterjetsGroup.destroyEach();
      }
      
      health.x = camera.position.x
      if(player.isTouching(finish)){
          gameState = 5;
          bulletGroup.setVelocityXEach(0);
          trapGroup.setVelocityXEach(0); 
          fighterjetsGroup.setVelocityXEach(0)

          bulletGroup.setLifetimeEach(-1); 
          trapGroup.setLifetimeEach(-1);
          fighterjetsGroup.setLifetimeEach(-1);

          bulletGroup.destroyEach();
          trapGroup.destroyEach();
          fighterjetsGroup.destroyEach();

      }

      player.collide(ground)
      player.collide(w5);
      player.collide(w6);
      Traps();
      Bullet();
      //Tank();
      Fighterjet();
      drawSprites();
      textSize(40)
      fill("black")
      text("'s Score:"+score,windowWidth/2+camera.position.x-400,120);
      
  } else if(gameState===4){
      background("black");
        //hide the buttons
        start.hide();
        reStart.show();
        start2.hide();
        //go to start state
        reStart.mousePressed(()=>{
          playerLifeLine=3
          gameState = 0; 
          reStart.hide();
          score = 0;
          bulletGroup.destroyEach();
          fighterjetsGroup.destroyEach();
          trapGroup.destroyEach();
        })
        //text
        strokeWeight(2);
        stroke("blue");
        fill('#39ff14');
        textSize(70);
        textFont('Rockwell');
        text('WW3',camera.position.x+windowWidth/2-940, windowHeight/2-300);
        
        textSize(100)
        fill("red");
        text("GAME OVER",camera.position.x+windowWidth/2-1150,windowHeight/2);



  }else if(gameState===5){
    background("black");
      //hide the buttons
      start.hide();
      reStart.show();
      start2.hide();
      //go to start state
      reStart.mousePressed(()=>{
          gameState = 0;
      })
      //text
      strokeWeight(2);
      stroke("blue");
      fill('#39ff14');
      textSize(70);
      textFont('Rockwell');
      text('WW3',camera.position.x+windowWidth/2-940, windowHeight/2-300);
      
      textSize(70)
      fill("red");
      text("CONGRATULATIONS",camera.position.x+windowWidth/2-1220,windowHeight/2-100);
      text("ON COMPLETING THE GAME",camera.position.x+windowWidth/2-1350,windowHeight/2);



  }

    
   
  
}

function Bullet(){
    if(frameCount%120===0){
      bullet = createSprite(camera.position.x+windowWidth/2,680,30,30);
      bullet.y = Math.round(random(200,680));
      bullet.velocityX = -10
      bullet.addAnimation("bullet",bulletImage);
      bullet.lifetime = windowWidth-1000; 
      bullet.scale = 0.08;
      bulletGroup.add(bullet); 
    }
}

function Traps(){
    if(frameCount%250===0){
      trap = createSprite(camera.position.x+windowWidth/2,720,30,30);
      trap.velocityX = -10
      trap.lifetime = windowWidth-1000; 
      trap.scale = 0.15;

      var select_traps= Math.round(random(1,2))
      if (select_traps===1){
        trap.addImage(trapImage1);
      } else{
        trap.addImage(trapImage2)
      }
      trapGroup.add(trap); 
    }
}
function Fighterjet() {
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
      fighterjet = createSprite(camera.position.x+windowWidth/2,100,40,10);
      fighterjet.y = Math.round(random(100,200));
      fighterjet.velocityX = -30;
      fighterjet.scale = 1;

      var select_fighterjet= Math.round(random(1,4))
      if (select_fighterjet===1){
        fighterjet.addImage(fighterjetImage1);
        fighterjet.scale = 0.4
      } else if(select_fighterjet==2){
        fighterjet.addImage(fighterjetImage2);
        fighterjet.scale = 2
      } else if(select_fighterjet==3){
        fighterjet.addImage(fighterjetImage3)
        fighterjet.scale = 2
      } else{
        fighterjet.addImage(fighterjetImage4)
        fighterjet.scale = 1.2
      }
      
      
      fighterjet.lifetime = windowWidth-1000;

      fighterjet.depth = player.depth;
      player.depth = player.depth + 1;
      
      //adding cloud to the group
      fighterjetsGroup.add(fighterjet);
    }
}

function Tank() {
    //write code here to spawn the clouds
    if (frameCount % 300 === 0) {
      tank = createSprite(camera.position.x+windowWidth/2,645,40,10);
      tank.velocityX = -0.1;
      tank.scale = 1;

      var select_tank= Math.round(random(1,4))
      if (select_tank===1){
        tank.addImage(tankImage1);
        tank.scale = 0.5
      } else if(select_tank==2){
        tank.addImage(tankImage2);
        tank.scale = 0.5
      } else if(select_tank==3){
        tank.addImage(tankImage3)
        tank.scale = 1.3
      } else{
        tank.addImage(tankImage4)
        tank.scale = 0.8
      }
      
      
      tank.lifetime = windowWidth-1000;

      tank.depth = player.depth;
      player.depth = player.depth + 1;
      
      //adding cloud to the group
      tankGroup.add(tank);
    }
}

function Medikits(){
  if(frameCount%300===0){
    medikit = createSprite(camera.position.x+windowWidth/2,705,30,30);
    medikit.velocityX = -5
    medikit.lifetime = windowWidth-1000; 
    medikit.addImage(medikitImage)
    medikit.scale = 0.15; 
    medikit.setCollider("circle",0,0,200)  
    medikitGroup.add(medikit);
  }

}

/*function reset(){
  gameState = 0;
  reStart.hide();
  score = 0;
  bulletGroup.destroyEach();
  fighterjetsGroup.destroyEach();
  trapGroup.destroyEach();

}*/