bf.StatBlock = function (){
  function roll(){
    return randomInteger(6) + randomInteger(6) + randomInteger(6);
  }
  this.strength = roll();
  this.intelligence = roll();
  this.wisdom = roll();
  this.dexterity = roll();
  this.constitution = roll();
  this.charisma = roll();

  this.toString = function (){
    return( ["Str:" + this.strength, "Int:" + this.intelligence, "Wis:" + this.wisdom,
              "Dex:" + this.dexterity, "Con:" + this.constitution, "Cha:" + this.charisma].join(' ')); 
  }
}

