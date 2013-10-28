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

String.prototype.toProperCase = function () {
    return this.replace(/([^\W_]+[^\s-]*) */g,
        function(txt){ 
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); 
        });
};
