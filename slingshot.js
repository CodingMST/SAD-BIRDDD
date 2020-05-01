class Slingshot{

constructor(bodyA,pointB){
var Options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.01
}
this.sling=Constraint.create(Options);
this.pointB=pointB;
World.add(world,this.sling);
}
display(){
if (this.sling.bodyA ){strokeWeight(4);
 line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,
this.pointB.x,this.pointB.y);}

    

}
fly(){
this.sling.bodyA = null;





}





}