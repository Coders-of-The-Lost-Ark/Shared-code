
module.exports = {
    
    run: function(creep) {
if (creep.memory.target == undefined)
        {
            creep.say('?');
            //Todo: Improve
            return
        }
            var baddies = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {filter: (creep) => creep.owner.username = !allies
              });
            var allies = ['KooHaoYit']
            var target = Game.flags.sentry
             var medic = creep.pos.findClosestByPath(FIND_MY_CREEPS, {filter: (creep) => 
            creep.moveTo(target)    
            if (creep.room == target.room) {
            medic
            }
              
if(creep.heal(medic, {visualizePathStyle: {stroke: '#ffff00'}}) == ERR_NOT_IN_RANGE){
creep.moveTo(medic);

}
}
}
}

                