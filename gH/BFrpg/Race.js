bf.Race = {}

bf.Race = function (){ /* bf.Race */
   this.constructor.races.push(this);
}
bf.Race.races = [];
bf.Race.prototype.eligible = function (stats){
  concordance = this.baseConcordance;  
  eligible = true;
  
  _(this.reqs).each(function (req){
    if(req.stat){
      if(req.min){
        concordance += (stats[req.stat] - req.min);        
        if(stats[req.stat] < req.min)
          eligible = false;
      }
      if(req.max){
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
bf.Race.prototype.generateName = function (sex){
  sex = sex || 'male';
  names = this.names;
  fullname = [];
  
  nameParts = [];
  _(names.forename[sex]).each( function (nameSet) {
    while((nextPart = nameSet[(Math.floor(Math.random() * nameSet.length))]) == nameParts[nameParts.length]);
    nameParts.push(nextPart);
  });
  fullname['forename'] = nameParts.join('');
  
  nameParts = [];
  _(names.surname).each( function (nameSet) {
    while((nextPart = nameSet[(Math.floor(Math.random() * nameSet.length))]) == nameParts[nameParts.length]);
    nameParts.push(nextPart);
  });
  fullname['surname'] = nameParts.join('');

  return(fullname);
}
bf.Race.prototype.baseConcordance = 0;
bf.Race.prototype.maxHitDie = undefined;
bf.Race.prototype.permittedClasses = bf.Class.classes;
bf.Race.prototype.bonuses = [];
bf.Race.prototype.reqs = {}
bf.Race.prototype.strings = { name: 'undefined Race' }
bf.Race.prototype.toString = function(){ return this.strings.name }
bf.Race.prototype.names={
  forename: {
    male: [
      ["Joe", "John", "Jack"],
    ],
    female: [
      ["Mary", "Sue", "Jane"],
    ]
  },

  surname: [
    ['Smith', 'Doe', 'Wilson', 'Donner'],
  ],
}
