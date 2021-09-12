Ground class{
    caunstructor (x,y,width,height){
        var option = {
            istact: ture
 }
 this.Body = Bodies.rectrangle(x,y,width,height,options);
 this.width  = width;
 this.height = height;
 world.add(world,this.body);
}
}
display(){
   var pos = this.body,position;
   rectmode(center);
   Fill(255);
   rect(pos.x,pos.y,this.width,this.height); 
}