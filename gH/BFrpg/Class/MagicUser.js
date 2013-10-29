bf.Class.MagicUser = new bf.Class; 
bf.Class.MagicUser.strings = {
  name: 'magic-user',
  shortname: 'Mu',
}
bf.Class.MagicUser.reqs = [ {stat: 'intelligence', min: 9 } ];
bf.Class.MagicUser.hitDie = 4;
bf.Class.MagicUser.hitDieBonusMultiplier = 1;
bf.Class.MagicUser.spellsPerLevel = [
  [1, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0],
  [2, 1, 0, 0, 0, 0],
  [2, 2, 0, 0, 0, 0],
  [2, 2, 1, 0, 0, 0],
  [3, 2, 2, 0, 0, 0],
  [3, 2, 2, 1, 0, 0],
  [3, 3, 2, 2, 0, 0],
  [3, 3, 2, 2, 1, 0],
  [4, 3, 3, 2, 2, 0],
  [4, 4, 3, 2, 2, 1],
  [4, 4, 3, 3, 2, 2],
  [4, 4, 4, 3, 2, 2],
  [4, 4, 4, 3, 3, 2],
  [5, 4, 4, 3, 3, 2],
  [5, 5, 4, 3, 3, 2],
  [5, 5, 4, 4, 3, 3],
  [6, 5, 4, 4, 3, 3],
  [6, 5, 5, 4, 3, 3],
  [6, 5, 5, 4, 4, 3]
]

