dbg.info("state:"+state);

token1 = new R20.Object('graphic', {_subtype:'token', name:'token1'});
token1.set("gmnotes", "<pre>{\"native_height\":70, \"native_width\":70}</pre>");
dbg.info(token1.get("gmnotes"));

ao = new AO.ActiveObject('f216c0b4-2ca6-4aa7-ad17-dc91d99fa277');
dbg.info(ao.id);

ad = new AO.ActiveDoor();
console.log(ad.state);


