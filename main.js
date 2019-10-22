// import modules
require('prototype.spawn')();
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleRanger = require('role.ranger');
var roleAttacker = require('role.attacker')
var roleStructureBasher = require('role.structurebasher');
var roleWallRepairer = require('role.wallRepairer');
var roleClaimer = require('role.claimer');
var roleLongDistanceHarvester = require('role.longDistanceHarvester');
global.HOME ='E5N49'
module.exports.loop = function () {
    // check for memory entries of died creeps by iterating over Memory.creeps
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            delete Memory.creeps[name];
        }
    }
     var towers =  _.filter(Game.structures, s=> s.structureType == STRUCTURE_TOWER); 
    
    // for each tower
    for (let tower of towers) {
        // find closes hostile creep
        var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        // if one is found...
        if (target != undefined) {
            // ...FIRE!
            tower.attack(target);
        }
    }
    

    // for every creep name in Game.creeps
    for (let name in Game.creeps) {
        // get the creep object
        var creep = Game.creeps[name];

        // if creep is harvester, call harvester script
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
         // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
         // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'ranger') {
            roleRanger.run(creep);
        }
        // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'attacker') {
            roleAttacker.run(creep);
        }
       else if (creep.memory.role == 'repairer') {
           roleRepairer.run(creep);
       }
       else if (creep.memory.role == 'structurebasher') {
           roleStructureBasher.run(creep);
       }
       else if (creep.memory.role == 'wallRepairer') {
           roleWallRepairer.run(creep);
       }
       
       else if (creep.memory.role == 'claimer') {
           roleClaimer.run(creep);
       }
       if (creep.memory.role == 'longDistanceHarvester') {
            roleLongDistanceHarvester.run(creep);
       }
           
       }
 for (let spawnName in Game.spawns) {
        let spawn = Game.spawns[spawnName];
        let creepsInRoom = spawn.room.find(FIND_CREEPS);
    // goal: have 10 harvesters and as many upgraders as possible
    var minimumNumberOfHarvesters = 3;
    var minimumNumberOfUpgraders = 2;
    var minimumNumberOfRangers = 1;
    var minimumNumberOfBuilders = 1;
    var minimumNumberOfAttackers = 1;
    var minimumNumberOfRepairers = 1;
    var minimumNumberOfWallRepairers = 0;
    var minimumNumberOfStructureBashers = 1;
    var minimumNumberOfLongDistanceHarvestersW3N5 = 1;
    var minimumNumberOfLongDistanceHarvestersW2N4 = 1;
    // _.sum will count the number of properties in Game.creeps filtered by the
    //  arrow function, which checks for the creep being a harvester
    var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
    var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
     var numberOfRangers = _.sum(Game.creeps, (c) => c.memory.role == 'ranger');
     var numberOfAttackers = _.sum(Game.creeps, (c) => c.memory.role == 'attacker');
      var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
      var numberOfStructureBashers = _.sum(Game.creeps, (c) =>c.memory.role == 'structurebasher');
      var numberOfWallRepairers = _.sum(Game.creeps, (c) =>c.memory.role == 'wallRepairer');
        var numberOfLongDistanceHarvestersW3N5 = _.sum(Game.creeps, (c) =>
        c.memory.role == 'longDistanceHarvester' && c.memory.target == 'E4N49');
       var numberOfLongDistanceHarvestersW2N4 = _.sum(Game.creeps, (c) =>
        c.memory.role == 'longDistanceHarvester' && c.memory.target == 'E4N48');
     // find all towers
     var HOME = 'E5N49'
      var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
    // if not enough harvesters
    


   if (numberOfHarvesters < minimumNumberOfHarvesters) {
        // try to spawn one
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'harvester')
    }
    else if (spawn.memory.claimRoom != undefined) {
        name = spawn.createClaimer(spawns.memory.claimRoom);
        if (!(name < 0)) {
            delete spawn.memory.claimRoom;
        }
        
    }
   
  
    else if  (numberOfUpgraders < minimumNumberOfUpgraders) {
        // else try to spawn an upgrader
        // small change from what you saw in the video: for upgraders it makes
        //  more sense to have two move parts because they have to travel further
        name = Game.spawns.Spawn1.createCustomCreep(energy, 'upgrader')
      }
       else if(numberOfRangers < minimumNumberOfRangers) {
        name = Game.spawns.Spawn1.createCreep([TOUGH, TOUGH, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK , RANGED_ATTACK, MOVE, MOVE, MOVE], undefined,
            { role: 'ranger', working: false, target: Game.flags.Attack});
    
} 
      else if(numberOfAttackers < minimumNumberOfAttackers) {
        name = Game.spawns.Spawn1.createCreep([ATTACK,ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, ATTACK, ATTACK], undefined,
            { role: 'attacker', working: false, target: Game.flags.sentry});
    
} 
          else  if(numberOfRepairers < minimumNumberOfRepairers) {
       name = Game.spawns.Spawn1.createCustomCreep(energy, 'repairer')
    }
     else if (numberOfWallRepairers < minimumNumberOfWallRepairers) {
    name = Game.spawns.Spawn1.createCustomCreep(energy, 'wallRepairer')
}
    
    else if(numberOfBuilders < minimumNumberOfBuilders) {
    name = Game.spawns.Spawn1.createCustomCreep(energy, 'builder')
    
}

  else if (numberOfLongDistanceHarvestersW3N5 < minimumNumberOfLongDistanceHarvestersW3N5) {
        // try to spawn one
        name = Game.spawns.Spawn1.createLongDistanceHarvester(energy, 5, HOME, 'E4N49', 0);
    }
else if (numberOfLongDistanceHarvestersW2N4 < minimumNumberOfLongDistanceHarvestersW2N4) {
        // try to spawn one
        name = Game.spawns.Spawn1.createLongDistanceHarvester(energy, 3, HOME, 'E3N49', 0);
}
 if (!(name < 0)) {
            console.log( " spawned new creep: " + name);
            console.log("Harvesters    : " + numberOfHarvesters);
            console.log("Upgraders     : " + numberOfUpgraders);
            console.log("Builders      : " + numberOfBuilders);
            console.log("Rangers       : " + numberOfRangers);
            console.log("Attackers     : " + numberOfAttackers);
            console.log("Repairer      : " + numberOfRepairers);
            console.log("WallRepairer  : " + numberOfWallRepairers);
            console.log("LongDistanceHarvester : " + numberOfLongDistanceHarvestersW3N5)
        }
}
}