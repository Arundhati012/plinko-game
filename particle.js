class particle {
    constructor(x,y,r){

        var options ={
            restitution:0.4
        }
        this.r=r;

        this.body=bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),rqndom(0,255));
        World.add(world,this.body);
    }
    display(){
         
        var pos=this.body.position;
        var angle=this.body.angle
    }

}