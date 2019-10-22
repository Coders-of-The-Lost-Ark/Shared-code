
    if (numberOfHarvesters < minimumNumberOfHarvesters) {
        // try to spawn one
        name = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], undefined,
            { role: 'harvester', working: false});
    }
    else if  (numberOfUpgraders < minimumNumberOfUpgraders) {
        // else try to spawn an upgrader
        // small change from what you saw in the video: for upgraders it makes
        //  more sense to have two move parts because they have to travel further
        name = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined,
            { role: 'upgrader', working: false});
      }
          else  if(numberOfRepairers < minimumNumberOfRepairers) {
        name = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE, CARRY], undefined,
            { role: 'repairer', working: false, });
    }
    
else  if(numberOfBuilders < minimumNumberOfBuilders) {
        name = Game.spawns.Spawn1.createCreep([WORK,CARRY, CARRY,MOVE], undefined,
            { role: 'builder', working: false});
    }
     
    
    
    
    
          else  if(numberOfRepairers < minimumNumberOfRepairers) {
       name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer')
    }
    
    else  if(numberOfRangers < minimumNumberOfRangers) {
        name = Game.spawns.Spawn1.createCreep([MOVE,RANGED_ATTACK, RANGED_ATTACK], undefined,
            { role: 'ranger', working: false, target: Game.flags.target});
}

else  if(numberOfAttackers < minimumNumberOfAttackers) {
        name = Game.spawns.Spawn1.createCreep([ATTACK,ATTACK, ATTACK, ATTACK,MOVE, MOVE, MOVE, ATTACK], undefined,
            { role: 'attacker', working: false, target: Game.flags.sentry});
    }
else if(numberOfBuilders < minimumNumberOfBuilders) {
    name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder')
}  





    if (numberOfHarvesters < minimumNumberOfHarvesters) {
        // try to spawn one
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvester')
    }
    else if  (numberOfUpgraders < minimumNumberOfUpgraders) {
        // else try to spawn an upgrader
        // small change from what you saw in the video: for upgraders it makes
        //  more sense to have two move parts because they have to travel further
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader')
      }
          else  if(numberOfRepairers < minimumNumberOfRepairers) {
       name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer')
    }
     
    
    else if(numberOfBuilders < minimumNumberOfBuilders) {
    name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder')
}  




 if (numberOfHarvesters < spawn.memory.minHarvesters) {
            // try to spawn one
        name = spawn.createCustomCreep(energy, 'harvester');

        // if spawning failed and we have no harvesters left
        if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters == 0) {
            // spawn one with what is available
            name = spawn.createCustomCreep(
                spawn.room.energyAvailable, 'harvester');
        }
    }
    else if (spawn.memory.claimRoom != undefined) {
        name = spawn.createClaimer(spawns.memory.claimRoom);
        if (!(name < 0)) {
            delete spawn.memory.claimRoom;
        }
        
    }
    // if not enough upgraders
    else if (numberOfUpgraders < spawn.memory.minUpgraders) {
        // try to spawn one
        name = spawn.createCustomCreep(energy, 'upgrader');
    }
    // if not enough repairers
    else if (numberOfRepairers < spawn.memory.minRepairers) {
        // try to spawn one
        name = spawn.createCustomCreep(energy, 'repairer');
    }
     
    // if not enough builders
    else if (numberOfBuilders < spawn.memory.minBuilders) {
        // try to spawn one
        name = spawn.createCustomCreep(energy, 'builder');
        
        
        
        
        
        
          // create a new function for StructureSpawn
    StructureSpawn.prototype.createClaimer =
        function (target) {
            return this.createCreep([CLAIM, MOVE], undefined, { role: 'claimer', target: target });
        }
};
    }