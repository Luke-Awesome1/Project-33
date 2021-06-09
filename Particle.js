class Particle {
    constructor(x, y, radius) {
        var options = {
            restitution: 1,
            friction: 0.1,
            density: 1,
            isStatic:false
        }

        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        //this.color = color(random(0,255),random(0,255),random(0,255));
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        var img = this.image;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        //fill(this.color);
        imageMode(CENTER);
        image(img,0,0,this.radius,this.radius);
        pop();
    }

};