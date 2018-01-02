var harvester = require('role.harvester');
var builder = require('role.builder');
var roleHarvestBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (Game.spawns["Spawn1"].energyCapacity > Game.spawns["Spawn1"].energy) {
            harvester.run(creep);
        } else {
            builder.run(creep);
        }
    }
};

module.exports = roleHarvestBuilder;