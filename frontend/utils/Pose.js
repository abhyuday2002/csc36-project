export class Pose {
    constructor(name, image, difficulty, position, bend, duration, variations) {
        this.name = name
        this.image = image
        this.difficulty = difficulty
        this.position = position
        this.bend = bend
        this.duration = duration
        this.variations = variations ? variations : []
    }
}