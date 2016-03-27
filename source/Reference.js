module.exports.GAME_WIDTH = 480
module.exports.GAME_HEIGHT = 270
module.exports.JOIN_GAME_TEXT = "PRESS TO JOIN"
module.exports.TIME_TO_DESPAWN = 5 * 1000
module.exports.MAX_PLAYERS = 4
module.exports.MAX_ENEMY_PROJECTILES = 25

module.exports.ControlScheme = {
    WASD: 0,
    NUM_PAD: 1,
    ARROW_KEYS: 2,
    keys: {
        0: {up: "W", down: "S", left: "A", right: "D", fire: "<space>", inUse: false},
        1: {up: "<num-8>", down: "<num-2>", left: "<num-4>", right: "<num-6>", fire: "<num-0>", inUse: false},
        2: {up: "<up>", down: "<down>", left: "<left>", right: "<right>", fire: ".", inUse: false}
    }
}
module.exports.controlTypeCount = Object.keys(module.exports.ControlScheme).length -1

module.exports.TRASHBOT = {
    HEALTH: {
        SNAKE: 1,
        TURRET: 1,
        SNIPER: 1,
        TANK: 2
    },
    MOVEMENT: {
        SPEED: 80,
        RAGE_MULTIPLIER: 1.75,
        AMPLITUDE: 15,
        PERIOD: 150
    }
}
module.exports.DIFFICULTY = [
    {
        HEALTH_MULTIPLIER: 1,
        SPAWN_WAVE: {
            INTERVAL: 5,
            MAX_HEIGHT: 6,
            MAX_WIDTH: 7,
            MAX_WAVES: 2
        },

        JUNK_FREQUENCY_RANGE: { lower: 4, upper: 7},
        JUNK_FREQUENCY_RANGE: { lower: 3, upper: 5},
    }
]