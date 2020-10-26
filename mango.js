class mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.image=loadImage("mango.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }
    display()
	{
			
			var mangoPos=this.body.position;		

			push()
			translate(mangoPos.x, mangoPos.y);
			ellipseMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
