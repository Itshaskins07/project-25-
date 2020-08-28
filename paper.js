class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        push();
        fill("purple");   
        ellipseMode(RADIUS);
        strokeWeight(3);
        translate(this.body.position.x,this.body.position.y);
        ellipse(0,0,10,10);
        pop();
    }
}