class Iron{
    constructor(x, y) {
      var options = {
        'density':0.7,
        'friction': 3,
        'restitution':30
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
     
      fill('Brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  