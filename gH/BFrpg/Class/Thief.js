bf.Class.Thief = new bf.Class;
bf.Class.Thief.strings = {
  name: 'thief',
  shortname: 'T',
}
bf.Class.Thief.reqs = [ {stat: 'dexterity', min: 9 } ];
bf.Class.Thief.hitDie = 4;
bf.Class.Thief.hitDieBonusMultiplier = 2;
bf.Class.xpToLevel = [
  0, 1250, 2500, 5000, 10000, 20000, 40000, 75000, 150000, 225000, 300000, 
  375000, 450000, 525000, 600000, 675000, 750000, 825000, 900000, 975000
]
bf.Class.abilities={
  "openLocks":    [ 25, 30, 35, 40, 45, 50, 55, 60, 65, 68, 71, 74, 77, 80, 83, 84, 85, 86, 87, 88 ],
  "removeTraps":  [ 20, 25, 30, 35, 40, 45, 50, 55, 60, 63, 66, 69, 72, 75, 78, 79, 80, 81, 82, 83 ],
  "pickPockets":  [ 30, 35, 40, 45, 50, 55, 60, 65, 70, 74, 78, 82, 86, 90, 94, 95, 96, 97, 98, 99 ],
  "moveSilently": [ 25, 30, 35, 40, 45, 50, 55, 60, 65, 68, 71, 74, 77, 80, 83, 85, 87, 89, 91, 93 ],
  "climbWalls":   [ 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99 ],
  "hide":         [ 10, 15, 20, 25, 30, 35, 40, 45, 50, 53, 56, 59, 62, 65, 68, 69, 70, 71, 72, 73 ],
  "listen":       [ 30, 34, 38, 42, 46, 50, 54, 58, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95 ]
}




