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

  this.modifier = function (stat){
    switch(this[stat]) {
    case 3:
      return(-3);
      break;
    case 4:
    case 5:
      return(-2);
      break;
    case 6:
    case 7:
    case 8:
      return(-1);
      break;
    case 9:
    case 10:
    case 11:
    case 12:
      return(0);
      break;
    case 13:
    case 14:
    case 15:  
      return(1);
      break;
    case 16:
    case 17:
      return(2);
      break;
    case 18:
      return(3);
      break;
    }
    return(undefined);
  }
}

