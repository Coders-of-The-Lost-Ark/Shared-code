module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working == true) {
            // find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_STORAGE
                             || s.structureType == STRUCTURE_CONTAINER)
                            
                             && s.energy < s.energyCapacity
            });

            // if we found one
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure);
                }
            }
            var steal = Game.rooms.flags.steal
        } else if (creep.room != steal.room) {
            creep.moveTo(steal)
        }
    
       
         else if (creep.room == steal.room) {   
            var loot = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES)
            }
    
        if (creep.pickup(loot) == ERR_NOT_IN_RANGE) {
         creep.moveTo(loot);
        }
        
        
        }
     
        }
    