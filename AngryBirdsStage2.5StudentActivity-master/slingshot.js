class Slingshot {
    constructor(bodyA, bodyB){
        var options = {
            length: 100,
            stiffnes: 0.001,
            bodyA: bodyA,
            bodyB: bodyB 
        }
        this.sling = Constraint.create(options) 
        World.add(world, this.sling);
    }
    display(){
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.bodyB.position.x, this.sling.bodyB.position.y)
    }
    }
    
        