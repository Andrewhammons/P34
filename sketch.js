//Create variables here
var dog,dogimg,dogimg1,database,foodS,foodStock

function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png")
  dogimg1=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogimg)
  dog.scale=0.2

  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
  textSize(20)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogimg1)
}

  drawSprites();
  //add styles here
fill ("white")
stroke ("black")
text ("remaining:"+foodS,170,200)
textSize(13)
text("press upp arrow to feed milk",130,10,300,20)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }
 else{x=x-1}
  database.ref('/').update({
    Food:x
  })
  

}

