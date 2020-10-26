class tree{
    constructor(x,y){
var options={
    isStatic=false
}
this.body=Matter.Bodies.retangle(x, y, 100,100, [options])
this.image = loadImage("tree.png");
World.add(world,this.body)


    }
    display(){
    var treePos=this.body.position;		

			push()
			translate(treePos.x, treePos.y);
			rectMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,100, 100);
			pop()
    }
}