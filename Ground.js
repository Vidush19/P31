class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rectMode(CENTER);
      translate(pos.x,pos.y);
      rotate(angle);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
