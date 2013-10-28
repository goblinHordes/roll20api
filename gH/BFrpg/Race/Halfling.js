bf.Race.Halfling = new bf.Race; 
bf.Race.Halfling.permittedClasses = [
  'cleric', 'fighter', 'thief'
]
bf.Race.Halfling.maxHitDie = 6;
bf.Race.Halfling.reqs = [ 
  {
    stat: 'dexterity',
    min:  '9'
  },
  {
    stat: 'strength',
    max:  '17'
  },
]
bf.Race.Halfling.bonuses = {
  toHit: 1,
  initiative: 1,
  saveVs : {
    deathRay: 4,
    magicWands: 4,
    paralysis: 4,
    spells: 4,
    dragonBreath: 3,
  },
}
bf.Race.Halfling.strings = {
  name: "halfling",
  plural: "halflings",
  adjective: "halfling",
}
bf.Race.Halfling.names={
  forename: {
    male: [
      ["Adalgrim", "Adelard", "Andwise", "Balbo", "Bandobras", "Berilac", "Bilbo", "Bingo", "Bodo", "Bowman", "Bungo", "Deagol", "Dinodas", "Doderick", "Drogo", "Dudo", "Erling", "Everard", "Fastolph", "Fastred", "Ferdibrand", "Ferdinard", "Ferumbras", "Filibert", "Flambard", "Folco", "Fosco", "Fredegar", "Frodo", "Gerontius", "Gorbadoc", "Gorbulas", "Gorhendad", "Gormadoc", "Griffo", "Gundabald", "Halfred", "Hamfast", "Hamson", "Hending", "Hildibrand", "Hildifons", "Hildigrim", "Hobson", "Hugo", "Ilberic", "Isembold", "Isengar", "Isengrim", "Isumbras", "Largo", "Longo", "Lotho", "Madoc", "Marmadas", "Marmadoc", "Marroc", "Matta", "Meriadoc", "Merimac", "Merimas", "Milo", "Minto", "Moro", "Mosco", "Moto", "Mungo", "Odo", "Odovacar", "Olo", "Orgulas", "Otho", "Paladin", "Peregrin", "Pippin", "Polo", "Ponto", "Porto", "Posco", "Reginard", "Robin", "Rorimac", "Rudigar", "Rufus", "Sadoc", "Samwise", "Sancho", "Saradas", "Saradoc", "Seredic", "Sigismond", "Smeagol", "Togo", "Tolman", "Tomba", "Wilcome", "Wilibald", "Bebo", "Bedo", "Beffo", "Bibu", "Bidu", "Biffu", "Bebdu", "Bobdo", "Bodo", "Bodu", "Boffin", "Dedo", "Dedu", "Diffu", "Dudo", "Febo", "Febu", "Figo", "Figu", "Fiffu", "Frado", "Frago", "Fralo", "Fredo", "Frego", "Frelo", "Frido", "Frigo", "Frilo", "Frudi", "Frugo", "Frulo", "Fubo", "Fubdo", "Gebu", "Gedo", "Geffin", "Odo", "Odu", "Olo", "Olu", "Pedo", "Pidu", "Pudo", "Tedo", "Tedu", "Tibu", "Tidu", "Todo", "Togo"]
          ],
    female: [
      ["Adaldrida", "Amranth", "Amaryllis", "Angelica", "Aspodel", "Belba", "Belladonna", "Berylla", 
       "Camellia", "Carissa", "Celandine", "Charmaine", "Cora", "Crystal", "Daisy", "Diamond",
       "Donamira", "Dora", "Eglantine", "Elanor", "Esmerelda", "Euphemia", "Gilly", "Gwiston", "Hilda",
       "Jillian", "Lavinia", "Lily", "Lidda", "Lobelia", "Malva", "Marigold", "May", "Melindy", "Mentha",
       "Merla", "Mimosa", "Mirabella", "Myrtle", "Pansy", "Pearl", "Pedderee", "Peony", "Petrilly",
       "Poppy", "Portia", "Primula", "Prisca", "Rose", "Ruby", "Seraphina", "Susannah", "Verna", "Viloet"]
    ]
  },

  surname: [
    ["Apple", "Barn", "Boffin", "Brace", "Brandy", "Broad", "Brocks", "Brown", "Bun", "Bunce", "Burrow", "Bush", "Butter", "Chubb", "Cotton", "Crumble", "Darns", "Digger", "Digs", "Fallo", "Farrow", "Fine", "Fleam", "Furry", "Goat", "Gold", "Good", "Green", "Grubb", "Handy", "Har", "Hay", "Heather", "Hedge", "Hemp", "Hilly", "Hole", "Horn", "Jumps", "Leather", "Light", "Long", "Mangle", "Mill", "More", "Mud", "Mug", "Neer", "Ness", "New", "Odd", "Old", "Over", "Park", "Patch", "Pick", "Prim", "Proud", "Puddi", "Red", "Root", "Rope", "Rumble", "Rush", "Sack", "Sand", "Sandy", "Shuffle", "Small", "Spinner", "Stone", "Tea", "Thistle", "Top", "Two", "Under", "Whit", "Worry"],
    ["back", "bar", "beam", "belly", "belt", "berry", "body", "buck", "bucket", "buff", "bur", "burrow", "by", "child", "cleve", "closet", "corn", "dore", "down", "fettle", "foot", "gather", "girdle", "hand", "heaver", "hide", "hill", "holm", "house", "leaf", "light", "lock", "mould", "petal", "pie", "pond", "ruffin", "sack", "smith", "stone", "thistle", "thorn", "toes", "ville", "ward", "well", "wise", "wool", "wort", "worthy"]
    
  ],
}

