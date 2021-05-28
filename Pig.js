class Pig{
  constructor(x,y){
    var options={
    restitution:0.1,
    friction:0.3,
    density:0.2
  }
  this.body=Bodies.circle(x,y,25,options);
  this.radius=25;

  World.add(world,this.body);

  } 
  display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("green");
    strokeWeight(5);
    stroke("black");
    ellipse(0,0,25,25);
    pop();
} 
}