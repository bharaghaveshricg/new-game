class Chain{ 
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness: 0.04,
            length: 20,       
        }
        this.spt = Constraint.create(options);
        World.add(world, this.spt);
    }
    
	


    display()
    {
       var posA =this.chain .bodyA.position;
       var posB= this.chain.bodyB .position;
        
       line(posA.x,posA.y.posB.x.posB.y)
    }

}