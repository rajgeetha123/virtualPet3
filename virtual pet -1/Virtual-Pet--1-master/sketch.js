
var dog;
var happyDog;
var database;
var foodS=0;
var foodStock;
var assign=0;
var button;
var fedTime;
var lastFed;
var readStock;
var gameState=0;


function preload()
{
  dogImage=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/Happy.png");
}

function setup() {
  database=firebase.database();

  createCanvas(400,500);

  foodStock=database.ref("food");
  foodStock.on("value",function(data){
    foodS=data.val();
  });

  fedTime=database.ref("FeedTime");
  fedTime.on("value",function(data){
    lastFed=data.val();
  })
  
  dog=createSprite(200,400,150,150);
  dog.addImage(dogImage);
  dog.scale=0.15
  

  foodObj=new Food();

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods)



  
}


function draw() { 
 

  //if(keyWentDown(UP_ARROW))
  //{
  // assign=assign+20;
  //  writeStock(assign);
  //  dog.addImage(happyDog);
  //}


 foodObj.display()

  drawSprites();
  

}

function readStock(data)
{
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}

function feedDog()
{
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.red('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour(),

  })


}

function writeStock(data)
{
  database.ref("/").set({
    food:data,

  })
}

function addFoods()
{
  foodS++;
  database.ref('/').update({
    Food:foodS,
    
  })
}





