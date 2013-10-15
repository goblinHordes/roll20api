// establish ActiveObject namespace
var ActiveObjects = ActiveObjects || {}
// create namespace shortcut
var AO = ActiveObjects;

/* 
ActiveObjects.Object - adds persistent state storage to R20 objects
@param {id} ID of Roll20 object.
*/
AO.Object = function (state){
    dbg.info('state:'+state);
    this.obj = state.obj || undefined
    dbg.info('obj:'+this.obj);
    dbg.info('loadState: ' + this.loadState());
    this.state = state // || this.loadState();
        
}
AO.Object.prototype.loadState = function (){
  dbg.info('loadState: ' + this.obj);
  if(this.obj){
    dbg.info('loadState: loading from object: ' + this.obj._id);
    notes = unescape(this.obj.get('gmnotes'))
    start = notes.indexOf('<pre>')+5;
    end = notes.indexOf('</pre>',start);
    code = _.unescape(notes.substring(start,end))
        
    try{
        code = JSON.parse(code);
    } catch(err) {
      try {
        code = code.replace(/<br>/g,'\n');
        code = JSON.parse(code);
        
        //obj.set('gmnotes', notes.slice(0,start)+JSON.stringify(code, undefined, 2)+notes.slice(end, -1));
      } catch(err) {
        
        return {};
      } 
    }
        
    return code;   
    
  } else {
    dbg.warn('loadState: no R20 object associated');
    return false
  }
}
AO.Object.prototype.saveState = function (){}
AO.Object.prototype.getState = function (attribute){
    dbg.info('state: ' + this.state);
    return this.state[attribute];
}

/*
ActiveObjects.ActiveObject - a virtual composite base object that includes
  state and functionality. ActiveObject should be used as a parent prototype
  for real ActiveObjects
@param {}
*/
AO.ActiveObject = function (state){
    var state = state || this.loadState();
    var objStore = objStore || {};
    var objState = objState || {};

}
AO.ActiveObject.prototype.loadState = function (){
    return this.defaultState || {};
}
AO.Object.prototype.saveState = function (){}
AO.ActiveObject.prototype.getState = function (){
    return this.defaultState;
}
