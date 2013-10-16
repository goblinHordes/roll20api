var Roll20 = Roll20 || (function(context){
    context.state = {};

    function out(opts){
        console.log('[R20:' + opts.caller + '] ' + opts.msg);
    }
    
    context.log = function (msg){
        out({msg:msg, caller:'log'});
    }
    
    context.sendChat = function (who, msg){
        out({msg:[who, msg].join(': '), caller:'sendChat'});
    }
    
    context.createObj = function (type, attributes){
        return(new Roll20.Object(type, attributes));
    }
    
    context.getObj = function (type, id){
        return(Roll20.objstore[type][id]);
    }
    
    context.findObj = function (opts){
        _.each(Roll20.objstore, function (obj){
             
        });
    }
    
    
    return({});
})(this);
var R20 = Roll20;

Roll20.objstore = {
  Campaign:{
              state: {}
           }
};

Roll20.Object = function (type, attributes){
    attributes = attributes || {};
    attributes._type = type;
    attributes._id = this._id;    
    this._type = type;
    this._attributes = attributes;
    
    Roll20.objstore[this._type] = Roll20.objstore[this._type] || {};
    Roll20.objstore[this._type][this._id] = this;
}
Roll20.Object.index={};
Roll20.Object.prototype._id = (function (){return this._id || _.uniqueId()})();
Roll20.Object.prototype.get = function (attr){
     return this._attributes[attr];
}
Roll20.Object.prototype.set = function (attr, value){
  this._attributes[attr] = value;
}

