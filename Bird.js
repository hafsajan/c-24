class Bird{
    constructor(x,y){
      var options={
      restitution:0.5,
      friction:1,
      density:1.5
    }
    this.body=Bodies.circle(x,y,25,options);
    this.radius=25;
  
    World.add(world,this.body);
  
    } 
    display(){
      var pos=this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("red");
      strokeWeight(5);
      stroke("black");
      ellipse(0,0,25,25);
      pop();
  } 
  }