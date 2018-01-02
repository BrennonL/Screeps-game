let constructionSiteCreator = {
    construct: function(game, memory) {

        let setTheTime = function() {
            memory.time = Game.time;
        }
        if (game.time === 0) {
            setTheTime();
        }
        let roadThreshold = 100;
        let resetTime = 2400;
        for (let x in game.creeps) {
            debugger;
            if (!game.creeps[x].memory.building) {
                let theRoomName = game.creeps[x].pos.roomName;
                let xcor = game.creeps[x].pos.x;
                let ycor = game.creeps[x].pos.y;
                //roadThreshold = Object.keys(game.creeps).length**3; // <-- determine threshold based off of
                if (!memory.sites) {
                    memory.sites = {}
                }
                if (!memory.sites[theRoomName]) {
                    memory.sites[theRoomName] = {}
                }
                if (!memory.sites[theRoomName][xcor]) {
                    memory.sites[theRoomName][xcor] = {}
                }
                if (!memory.sites[theRoomName][xcor][ycor]) {
                    memory.sites[theRoomName][xcor][ycor] = 0;
                }
                if (!(memory.sites[theRoomName][xcor][ycor] === undefined)) {

                    memory.sites[theRoomName][xcor][ycor]++;

                    if (memory.sites[theRoomName][xcor][ycor] > roadThreshold) {

                        game.rooms[theRoomName].createConstructionSite(xcor, ycor, STRUCTURE_ROAD);

                    }
                }
            }
        }

        if (Game.time - memory.time >= resetTime) {
            for (let roomCodes in memory.sites) {
                console.log("<span style='color:rgb(255,114,36)'>Clearing room" + roomCodes + "</span>")
                for (let x in memory.sites[roomCodes]) {
                    for (let y in memory.sites[roomCodes][x]) {
                        debugger;
                        if (memory.sites[roomCodes][x][y] < roadThreshold) {
                            memory.sites[roomCodes][x][y] = null;
                            delete memory.sites[roomCodes][x][y];
                        }
                    }
                    if (Object.keys(memory.sites[roomCodes][x]).length === 0) {
                        delete memory.sites[roomCodes][x];
                    }
                }
                if (Object.keys(memory.sites[roomCodes]).length === 0) {
                    delete memory.sites[roomCodes];
                }
            }
            setTheTime();
        }
    }
};

module.exports = constructionSiteCreator;