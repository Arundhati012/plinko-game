class plinko {
    constructor(x,y,w,h){
        var options={

            isStatic:true
        }
        this.body=Bodies.rectangle(10,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }
   display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("white");
       rect(pos.x,pos.y,this.w,this.h);
   }   
};
  {
    for(var j=40;j<=innerWidth;j=j+50)

    plinkos.push(new plinko(j,75));

    for(var j=15;j<=width-10;j-j+50)

    plinkos.push(new plinko(j,175));

  }
  {
      for(var j=0;j<particles.length;j++);

      particles[j].display();
  }

    for(var k=0;k<divisions.length;k++){

        divisions[k].display();
    }

if(frameCount%60===0){
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
}
