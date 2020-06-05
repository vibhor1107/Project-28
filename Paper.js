class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		this.image= loadImage("paper.png")
		
	}
	display()
	{		
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(0);
			fill(255,255,255)
			ellipse(0,0,this.r);
			imageMode(CENTER);
			scale(0.5);
			image(this.image, 0, 0, this.width, this.height);
			
			pop()
			
	}

}