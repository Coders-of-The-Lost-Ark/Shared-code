 module.exports = {
  run: function(creep) {
        if (creep.memory.target == undefined)
                {
                    creep.say('Present');
                    //Todo: Improve
                    return
                }
                    var baddies = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {filter: (creep) => creep.owner.username != 'BenignTumor'
                      });
                    var allies = ('Douggernort')
                    var target = Game.flags.sentry
                    creep.moveTo(target)
                    creep.say("on my way")
                if (creep.room == target.room) {
                    baddies

                    if(creep.attack(baddies, {visualizePathStyle: {stroke: '#ffff00'}}) == ERR_NOT_IN_RANGE){
                        creep.moveTo(baddies);
                        creep.say('unworthy..', true);
                    } else  {
                        creep.say('preparing', true);
                    }
                  
                }
        }
}

                