class mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.11,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image =loadImage("mango.png");
        this.body =Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
       display(){
           var on =this.body.position;

           push();
           translate(on.x,on.y);
           ellipse(0,0,this.r,this.r);
           imageMode(CENTER);
           image(this.image,0,0,70,70);
           pop();
       }
}