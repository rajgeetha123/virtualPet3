        class Food{
            constructor(foodStock , lastFed ){
                this.foodStock=0;
                this.lastFed;
                this.milkImg=loadImage("Images/milk.png");
            }
        
           
        
           
        
            updateFoodStock()
            {
               this.foodStock=foodStock;
            }
        
           
        
        
            getFedTime()
            {
                this.lastFed=lastFed;
            }
        
        
            deductFood()
            {
               if(this.foodStock>0)
               {
                   this.foodStock=this.foodStock-1;
               }
            }
        
            getFoodStock()
          {
            //fedTime=database.ref("FeedTime");
            //fedTime.on("value",function(data){
               // lastFed=data.val();
           // })
           return this.foodStock;
           }
        
           display()
           {
               background(46,139,87);
        
        
        
        
        
               fill(255,255,254);
               textSize(15);
               if(lastFed>=12){
                text("Last Feed : "+ lastFed%12 + " PM", 50,30);
            }else if(lastFed==0){
                text("Last Feed : 12 AM",50,30);
            }else{
                text("Last Feed : "+ lastFed + " AM", 50,30);
            }
            
            
            var x=70,y=100; 
                imageMode(CENTER);
                if(this.foodStock!=0){
                for(var i=0;i<this.foodStock;i++){
                  if(i%10==0){
                    x=70;
                    y=y+50;
                  }
                  image(this.milkImg,x,y,50,50);
                  x=x+30;
                }
            
            
            
            
           }
        
        }
    
  

   



}
