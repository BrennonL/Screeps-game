let constructionSiteCreator = {
    construct: function(game, memory) {
        for (let x in game.creeps) {
            debugger;
            let theRoomName = game.creeps[x].pos.roomName;
            let xcor = game.creeps[x].pos.x;
            let ycor = game.creeps[x].pos.y;
            let roadThreshold = 200; //Object.keys(game.creeps).length**3; // <-- determine threshold based off of
            if(!memory.sites){
                memory.sites = {}
            }
            if(!memory.sites[theRoomName]){
                memory.sites[theRoomName] = {}
            }
            if(!memory.sites[theRoomName][xcor]){
                memory.sites[theRoomName][xcor] = {}
            }
            if(!memory.sites[theRoomName][xcor][ycor]){
                memory.sites[theRoomName][xcor][ycor] = 0;
            }
            debugger;
            if (!(memory.sites[theRoomName][xcor][ycor] === undefined)) {

                memory.sites[theRoomName][xcor][ycor]++;

                if (memory.sites[theRoomName][xcor][ycor] > roadThreshold) {

                    game.rooms[theRoomName].createConstructionSite(xcor, ycor, STRUCTURE_ROAD);

                }
            }
        }
    }
};

module.exports = constructionSiteCreator;
