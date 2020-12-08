class Paper {
    constructor(x, y, width, height, angle) {
      var options = {
        isStatic:false,
        'density':1.2,
        'friction': 0.5,
        'restitution':0.3,
        'mass':3000
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height);
      pop();
    };
  };