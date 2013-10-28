// establish ActiveObject namespace
_.namespace("ActiveObjects");
// create namespace shortcut
var AO = ActiveObjects;

state.ActiveObjects = state.ActiveObjects || {}

/*
ActiveObjects.ActiveObject - a virtual composite base object that includes
  state and functionality. ActiveObject should be used as a parent prototype
  for real ActiveObjects
@param {}
*/
AO.ActiveObject = function (id, aoState){
  this.id = id || Util.guid();
  this.initialize(aoState);

  this.get = function (attrib){
    if(attrib)
      return state[this.id][attrib]
    else
      return state[this.id]
  }

}
AO.ActiveObject.prototype.initialize = function (aoState){
  activeState = this.constructor.defaultState;
  log("id:"+this.constructor);
  log("defaultState:" + Object.keys(this.constructor.defaultState));
  if(aoState)
    _.extend(activeState, aoState)
  else
    _.extend(activeState, state[this.id])

  log("activeState:"+ Object.keys(activeState));

  state[this.id] = activeState;

}
AO.ActiveObject.defaultState = {
  objStore: {},
  objStates: {},
}


