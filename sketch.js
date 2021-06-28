var spacestn;
var spacecraft;
var  spacestnImg;
var spacecraftImg;

var spaceBackground;



function preload(){
  spacestnImg=loadImage("iss.png");
  spacecraftImg=loadImage("spacecraft1.png");
  spaceBackground=loadImage("spacebg.jpg");

}

function setup() {
  createCanvas(800,400);
  spacestn=createSprite(400, 200);
  spacestn.addImage(spacestnImg);
  spacestn.scale=0.8;

  spacecraft=createSprite(400, 300);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale=0.2;

}



function draw() {
  background(spaceBackground); 
  
  if(keyDown(UP_ARROW)){
    spacecraft.y=spacecraft.y-1;
    
      }

      if(keyDown(LEFT_ARROW)){
        spacecraft.x=spacecraft.x-1;
          }

          if(keyDown(RIGHT_ARROW)){
            spacecraft.x=spacecraft.x+1;
              }

              if(keyDown(DOWN_ARROW)){
                spacecraft.y=spacecraft.y+1;
                  }
console.log("y "+spacecraft.y);
console.log("x "+spacecraft.x);

if (spacecraft.x>=348 && spacecraft.x<=353 && spacecraft.y>=267 && spacecraft.y<=271){

textSize(30);
fill("skyblue");
text("DOCKING SUCCESSFULL",350,350);


} 

  drawSprites();


}

