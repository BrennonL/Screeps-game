var roleBuilder = require('role.builder');
var roleRepair = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // let averageWallHealth = creep.pos.find()
        var target = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s) => s.structureType == STRUCTURE_ROAD && s.hits < s.hitsMax - 1000});
        if(target) {
            if (creep.memory.building && creep.carry.energy == 0) {
                creep.memory.building = false;
                creep.say('🔄 harvest');
            }
            if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
                creep.memory.building = true;
                creep.say('🚧 Repair');
            }

            if (creep.memory.building) {
                if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
            else {
                var sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        } else {
            roleBuilder.run(creep);
        }
    }
};

/*
Game.creeps.Repair71576.repair(Game.creeps.Repair71576.pos.findClosestByRange(FIND_STRUCTURES, {
filter: (object) => {
    return (object.structureType === STRUCTURE_ROAD);
}
})[0]);

*/

module.exports = roleRepair;