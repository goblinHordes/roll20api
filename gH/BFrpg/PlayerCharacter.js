bf.PlayerCharacter = function (){
  
  var eRaces = {};
  var eClasses = {};
  var maxConcord;
  var pRaces;
  var pClasses;
  var hitPoints;
  var level = 0;

  this.sex = ['male', 'female'][(Math.floor(Math.random() * 2))];

  
  while(_.keys(eClasses).length == 0){
    this.statBlock = new bf.StatBlock();


    eRaces = this.eligibleRaces();
    maxConcord = _(eRaces).reduce( function(memo, concord){ return Math.max(memo, concord) }, 0);
    pRaces = _.chain(eRaces)
      .keys()   
      .filter( function(race) { return eRaces[race] == maxConcord } )
      .value();
    
    this.race = pRaces[Math.floor(Math.random() * pRaces.length)];
    this.race = _(bf.Race.races).find(function (race){return race.strings.name == this.race}, this); 
    this.name = this.race.generateName(this.sex);
    eClasses = this.eligibleClasses();
  }
  maxConcord = _(eClasses).reduce( function(memo, concord){ return Math.max(memo, concord) }, 0);
  pClasses =  _.chain(eClasses)
    .keys()   
    .filter( function(bfclass) { return eClasses[bfclass] == maxConcord } )
    .value();
   
  this.class = pClasses[Math.floor(Math.random() * pClasses.length)];
  this.class = _(bf.Class.classes).find(function (bfclass){return bfclass.strings.name == this.class}, this); 

  this.hitPoints = this.levelUp();

  this.toString = function (){
    pc =  this.fullname() + ", " + [this.sex.toProperCase(), this.race.strings.adjective.toProperCase(),
                                    this.class.strings.name.toProperCase()].join(' ') + "\n";
    pc += this.statBlock.toString();
    return pc
  }
}
bf.PlayerCharacter.prototype.levelUp = function (){
  this.level++;
  hitDie = this.race.maxHitDie ? Math.min(this.class.hitDie, this.race.maxHitDie) : this.class.hitDie;
  hitPointUpgrade = randomInteger(hitDie);
  if(this.level >= 10)
    hitDiePointUpgrade += ((this.level - 9) * this.class.hitDieBonusMultiplier);
  this.hitPoints += hitDie;
  return hitDie;
}
bf.PlayerCharacter.prototype.eligibleRaces = function (){
  races = {};
  stats = this.statBlock;
  _.each(bf.Race.races, function (race){
    if(concord = race.eligible(stats))
      races[race.strings.name] = concord;
  })
   
  return(races);
}
bf.PlayerCharacter.prototype.eligibleClasses = function (){
  var classes = {};
  stats = this.statBlock;
  permitted = this.race.permittedClasses;
  
  _.each(bf.Class.classes, function (bfclass){
    if((_(permitted).indexOf(bfclass.strings.name)>-1) && (concord = bfclass.eligible(stats)))
      classes[bfclass.strings.name] = concord;
  });
  
  
  return(classes);
}
bf.PlayerCharacter.prototype.fullname = function (){
  return(_(this.name).values().join(' '));
}

