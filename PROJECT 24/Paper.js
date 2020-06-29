class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,restitution:0.3,friction:0.8,density:1.2
        }
        this.paper=Bodies.circle(x,y,radius,options);
        this.radius=radius
        World.add(world,this.paper);
        


    }
display(){
    fill ("pink");
    ellipse(this.paper.position.x,this.paper.position.y,this.radius);
    
}
    }

