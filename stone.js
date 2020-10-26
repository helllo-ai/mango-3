class stone {
    constructor(x,y,z){
        var options={
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
        }
        this.body=Matter.Bodies.circle(x, y, 20, [options])
        this.image = loadImage(z);
        World.add(world,this.body)
      
    }
    display(){
        var stonePos=this.body.position;		

			push()
			translate(stonePos.x, stonePos.y);
			ellipseMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,20,20);
			pop()
			
    }
  
  
    

}