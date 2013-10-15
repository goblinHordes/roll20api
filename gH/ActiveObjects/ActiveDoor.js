/*
ActiveObjects.ActiveDoor - an ActiveObject to control doors
*/
AO.ActiveDoor = function (state){}
AO.ActiveDoor.prototype = new AO.ActiveObject();
AO.ActiveDoor.prototype.constructor = AO.ActiveDoor;
AO.ActiveDoor.prototype.closeDoor = function (){}
AO.ActiveDoor.prototype.defaultState =  {
        type:     this.type,
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
    
AO.ActiveDoor.prototype.openDoor = function (){
    if(!this.getState('locked')){
        //transitionObjects(oldState, newState);
    } else {
        // handle locked door
    }
}
AO.ActiveDoor.prototype.toggleDoor = function (){
 
    if(this.getState('position') == 'open'){
        closeDoor();
    } else {
        openDoor();
    }
    
}

ad = new AO.ActiveDoor();
console.log("Key:" +Object.keys(ad.getState()));


