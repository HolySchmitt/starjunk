var Victor = require("victor")
import Trashbot from "./Trashbot.js"
import Reference from "./Reference.js"
import Projectile from "./Projectile.js"

export default class SniperTrashbot extends Trashbot {
    constructor(position, movementStyle, shootStyle) {
        super(
            position,
            Reference.TRASHBOT.MOVEMENT.SPEED,
            Reference.TRASHBOT.HEALTH.SNIPER,
            PIXI.loader.resources.sniperTrashbot.texture)
        this.movement = movementStyle
        this.shoot = shootStyle
        this.bullets = 1
        this.bulletSpeed = 1.25
    }

    update(delta) {
        this.movement(this, Reference.TRASHBOT.MOVEMENT.PERIOD, Reference.TRASHBOT.MOVEMENT.AMPLITUDE)
        this.shoot(this, Reference.TRASHBOT.MOVEMENT.PERIOD)
        super.update(delta)
    }

    fire(target) {
        if (target) {
            var vector = new Victor(target.position.x - this.position.x, target.position.y - this.position.y)
            var bulletDistance = 4
            vector.normalize()
            for (var bulletIndex = 0; bulletIndex < this.bullets; bulletIndex++) {
                game.addChild(new Projectile(
                    this.position.x + bulletDistance*bulletIndex*vector.x,
                    this.position.y + this.height/2 + bulletDistance*bulletIndex*vector.y,
                    vector, this, this.bulletSpeed, "bullet", false))
            }
        }
    }
}