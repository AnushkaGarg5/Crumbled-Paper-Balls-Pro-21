class Ground {
    constructor (x , y ,w,h){

    var GroundOption = {isStatic : true}
    this.body = Bodies.rectangle(x,y,w,h,GroundOption)
    this.x = x
    this.y = y
    this.width = w
    this.height = h

    World.add(world,this.body)

    }
    display(){
        rect(this.body.position.x , this.body.position.y , this.width , this.height )
    }
}