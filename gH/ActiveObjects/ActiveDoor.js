/*
ActiveObjects.ActiveDoor - an ActiveObject to control doors
*/
AO.ActiveDoor = function (id, aoState){}
AO.ActiveDoor.prototype = new AO.ActiveObject();
AO.ActiveDoor.prototype.constructor = AO.ActiveDoor;
AO.ActiveDoor.prototype.defaultState =  {
        type:     "door",
        position: "open",
        is_locked: false,
        objStore: {
            tokCommand: undefined,
        objState: {
            open:     {},
            closed:   {},
            locked:   {},
            unlocked: {}
         }
        }
    }

AO.ActiveDoor.prototype.closeDoor = function (){}
AO.ActiveDoor.prototype.openDoor = function (){
    if(!this.getState('locked')){
        //transitionObjects(oldState, newState);
    } else {
        // handle locked door
    }
}
AO.ActiveDoor.prototype.toggleDoor = function (){
 
    if(this.position == 'open'){
        closeDoor();
    } else {
        openDoor();
    }
    
}




