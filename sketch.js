var dog,dogHappy,dogImg,food,foodStock,foodS;
var database,button; 
function preload()
{
  dogImg=loadImage("Dog.png");
  dogHappy=loadImage("happydog.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog=createSprite(200,350,30,30);
  dog.addImage(dogImg);
  dog.scale=0.2;
  
 button=createSprite(150,200,80,30);
 fill("skyblue");
}


function draw() {  
  background(46, 139, 87);
  
  
  if(mousePressedOver(button)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  button.display();
  textSize(30);
  text("Food Remaining:"+foodS,100,50);

  textSize(30);
  text("Feed",115,210);
  
}

function readStock(data){
   foodS=data.val();
   } 
 function writeStock(x){ 
   if(x<=0){
     x=0;
   }
   else{
    x--; 
   }
   
   database.ref('/').update({ Food:x }) ;
  }