on("chat:message", function(msg) {
  if(msg.type == "api" && msg.content.indexOf("!random_pc") !== -1) {
    pc = new bf.PlayerCharacter;
    date = new Date;
    
    /*
    newChar = createObj('character', {name:pc.fullname()});
    newChar.set('gmnotes', 'New Character');
    
    createObj('attribute', { characterid: newChar.id, name: 'Race', current: pc.race.strings.name.toProperCase()});
    createObj('attribute', { characterid: newChar.id, name: 'Class', current: pc.class.strings.name.toProperCase()});
    createObj('attribute', { characterid: newChar.id, name: 'Sex', current: pc.sex.toProperCase()});
    
    createObj('attribute', { characterid: newChar.id, name: 'Str', current: pc.statBlock.strength});
    createObj('attribute', { characterid: newChar.id, name: 'Int', current: pc.statBlock.intelligence});
    createObj('attribute', { characterid: newChar.id, name: 'Wis', current: pc.statBlock.wisdom});
    createObj('attribute', { characterid: newChar.id, name: 'Dex', current: pc.statBlock.dexterity});
    createObj('attribute', { characterid: newChar.id, name: 'Con', current: pc.statBlock.constitution});
    createObj('attribute', { characterid: newChar.id, name: 'Cha', current: pc.statBlock.charisma});
    //*/
    sendChat(msg.who, '/me is rolling a new Player Character');
    sendChat(msg.who, '/direct <b>' + pc.fullname() + '</b> ' + pc.hitPoints + 'HP<br><i>' + pc.sex + ' ' + 
        pc.race.strings.name + ' ' + pc.class.strings.name + '</i><br>' + pc.statBlock);

  }
});

