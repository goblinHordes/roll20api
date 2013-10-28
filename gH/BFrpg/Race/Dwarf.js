bf.Race.Dwarf = new bf.Race;
bf.Race.Dwarf.permittedClasses = [
  'cleric', 'fighter', 'thief'
]
bf.Race.Dwarf.reqs = [ 
  {
    stat: 'strength',
    min:  '9'
  },
  {
    stat: 'charisma',
    max:  '17'
  },
]
bf.Race.Dwarf.bonuses = {
  saveVs : {
    deathRay: 4,
    magicWands: 4,
    paralysis: 4,
    spells: 4,
    dragonBreath: 3,
  },
}
bf.Race.Dwarf.strings = {
  name: "dwarf",
  plural: "dwarves",
  adjective: "dwarven",
}
bf.Race.Dwarf.names={
  forename: {
    male: [
      ["B", "L", "D", "M", "F", "N", "G", "R", "G", "S", "H", "T", "K", "V"],
      ["a", "o", "e", "oi", "i", "u"],
      ["bur","mli","fur","nar","gan","nus","gnus","rin","gnar","ran","li","sin","lin","sil","lir","sur"]
    ],
    female: [
      ["Al","L","Br","M","C","Mer","Cl","N","D","R","El","S","Gw","Ys","J"],
      ["a","o","ae","u","e","y","ea","w","i"],
      ["brylla","ngwen","cla","niver","dda","noic","ll","ra","lla","rka","llyra","ryan","lonna","ssa","lyan","vyan","na"]
    ]
  },

  surname: [
    ['Iron', 'Copper', 'Bronze', 'Silver', 'Gold', 'Opal', 'Diamond', 'Hammer', 'Mine', 'Fire', 'Forge'],
    ['smith', 'hammer', 'beard', 'forge', 'brow', 'arm', 'fist', 'leg', 'nose']
  ],
}
