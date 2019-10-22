
module.exports = {
    
    run: function(creep) {
if (creep.memory.target == undefined)
        {
            creep.say('?');
            //Todo: Improve
            return
        }
            var baddies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES)
            var allies = ['KooHaoYit']
            var target = Game.flags.Attack
            creep.moveTo(target)    
            if (creep.room == target.room) {
            baddies
            
            
                
                            
                            
              
if(creep.attack(baddies, {visualizePathStyle: {stroke: '#ffff00'}}) == ERR_NOT_IN_RANGE){
creep.moveTo(baddies);

}
}
}
}

                