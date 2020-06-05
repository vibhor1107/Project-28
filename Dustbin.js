class dustbin
{constructor(x,y)
	{	this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=310;
		this.wallThickness=25;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        Matter.Body.setAngle(this.leftWallBody, this.angle);
        
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
		this.image= loadImage("dustbin.png")
	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;
			
			
			push()
			translate(1070, posLeft.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill("white")
			stroke(255)
			rotate(this.angle)
			rect(0,0,30, this.dustbinHeight);
            pop()
            
			push()
			translate(1340, posRight.y);
			rectMode(CENTER)
			stroke(255)
			angleMode(RADIANS)
			fill("white")
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()
            
			push()
			translate(posBottom.x,670);
			rectMode(CENTER)
			
			angleMode(RADIANS)
			
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			imageMode(CENTER);
			
			image(this.image,posBottom.x,500, this.width, this.height);
	}

}