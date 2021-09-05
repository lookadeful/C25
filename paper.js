class Paper {
    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0,
            'density': 1.2,
        }
        this.x = x
        this.y = y
        this.width = 50
        this.height = 50
        this.image = loadImage("paper.png")
        this.body = Bodies.rectangle(x, y, 50, 50, options)
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;

        push()
        translate(pos.x, pos.y - 15);
        image(this.image, 0, 0, this.width, this.height)
        imageMode(CENTER)
        pop()
    }
}