class Paper {

constructor(x, y, diameter){

var options = {
    isStatic: false, 
    restitution:0.3,
    friction:0.5, 
    density:1.2
}
this.body = Bodies.circle(x, y, 50, options);
this.diameter = 50;
this.image = loadImage("paper.png");
World.add(world, this.body);
}
display(){
    var pos=this.body.position;		

			push();
			translate(pos.x, pos.y);
			imageMode(CENTER);
			fill(128,128,128);
			image(this.image,0,0, 50);
			pop();
}
}
