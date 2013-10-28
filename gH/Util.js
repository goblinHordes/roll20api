
(function (context){
_.mixin({
  namespace : function ( ns, base ){
    var n, b = base || context, r = /[^\.]+/g;
    while( (n = r.exec( ns ) ) != null )
      b = b[n[0]] || (b[n[0]] = {});
    return b;
  },
  
  guid : function () {
    // StackOverflow user 'broofa'
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    })
  },

})
})(this);

Function.prototype.inheritsFrom = function( parentClassOrObject ){
	if ( parentClassOrObject.constructor == Function )
	{
		//Normal Inheritance
		this.prototype = new parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassOrObject.prototype;


    if(this.prototype.parent.constructor.children)
      this.prototype.parent.constructor.children.push(this);
    else
      this.prototype.parent.constructor.children = [ this ]; 
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

