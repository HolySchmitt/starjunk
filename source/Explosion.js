var Pixi = require("pixi.js")
var Victor = require("victor")

import Utility from "./Utility.js"
import Particle from "./Particle.js"
import Reference from "./Reference.js"

export default class Explosion {
    constructor() {
        this.small = PIXI.loader.resources.star.texture
        this.large = PIXI.loader.resources.projectile.texture
    }

    explodeEnemy(thisShip) {
        this.maxParticles = 300 * Math.random()
        for (var i = 0; i < this.maxParticles; i++) {
            game.addChild(new Particle(this.large, thisShip.position.x, thisShip.position.y, this.vector = new Victor(Utility.randomFloatNumber(-2, 2), Utility.randomFloatNumber(-2, 2)), 0x000000, .1 * Math.random()))
            game.addChild(new Particle(this.small, thisShip.position.x, thisShip.position.y, this.vector = new Victor(Utility.randomFloatNumber(-2, 2), Utility.randomFloatNumber(-2, 2)), 0xFF4500, .1 * Math.random()))
            game.addChild(new Particle(this.small, thisShip.position.x, thisShip.position.y, this.vector = new Victor(Utility.randomFloatNumber(-2, 2), Utility.randomFloatNumber(-2, 2)), 0xFFA500, .15 * Math.random()))
        }

    }

    explodePlayer(thisShip) {
        this.maxParticles = 100
        for (var i = 0; i < this.maxParticles; i++) {
            game.addChild(new Particle(this.large, thisShip.position.x, thisShip.position.y, this.vector = new Victor(Utility.randomFloatNumber(-2, 2), Utility.randomFloatNumber(-2, 2)), 0xFFFFFF, .5))
        }
    }
}