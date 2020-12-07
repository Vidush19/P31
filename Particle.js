class Particle{
    constructor(x,y,radius){
        var options = {
            isStatic:false
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,10,options);
        World.add(world,this.body);
        this.color = color(random(0,255), random(0,255), random(0,255))
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(RADIUS);
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}