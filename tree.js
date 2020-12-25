class tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image =loadImage("tree.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var posit =this.body.position;
        
        rect(posit.x,posit.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,1220,383,650,650);
    }
}