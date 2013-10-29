bf.Class = function (){ /* bf.Class */
  this.constructor.classes.push(this);
}
bf.Class.classes = [];
bf.Class.prototype.eligible = function (stats){
  concordance = this.baseConcordance;  
  eligible = true;
  
  _(this.reqs).each(function (req){
    if(req.stat){
      if(req.min) {
        concordance += (stats[req.stat] - req.min);                
        if(stats[req.stat] < req.min)
          eligible = false;
      }
      if(req.max) {
        concordance += (req.max - stats[req.stat]);        
        if(stats[req.stat] > req.max)
          eligible = false;
      }
    }
  })
  //*/
  if(eligible)
    return(concordance);
   else
    return(false);
};
bf.Class.prototype.baseConcordance = 0;
bf.Class.prototype.hitDieBonusMultipler = 1;
bf.Class.prototype.bonuses = {}
bf.Class.prototype.reqs = {};
bf.Class.prototype.strings = { name: 'undefined Class' };
bf.Class.prototype.toString = function(){ return this.strings.name }
bf.Class.prototype.xpToLevel = [];
bf.Class.prototype.spellsAtLevel = [];
bf.Class.prototype.abilities = [];


