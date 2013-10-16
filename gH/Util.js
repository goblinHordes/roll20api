var Util = Util || {};

Util.guid =  function () {
  // StackOverflow user 'broofa'
  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  })
} 

if(!(typeof(Roll20) == 'undefined')){

Util.idObj = function(selected){
  objects = new Array();
  _.each(selected, function(selectedObj, index){
    objects.push(getObj(selectedObj['_type'], selectedObj['_id']));  
  })
  return objects;
}

}

Function.prototype.inheritsFrom = function( parentClassOrObject ){
	if ( parentClassOrObject.constructor == Function )
	{
		//Normal Inheritance
		this.prototype = new parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassOrObject.prototype;
	}
	else
	{
		//Pure Virtual Inheritance
		this.prototype = parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassOrObject;
	}
	return this;
}
