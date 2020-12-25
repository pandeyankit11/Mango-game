class boy{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image =loadImage("boy.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
       var positi =this.body.position;

        rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.image,300,619,300,300);
    }
}