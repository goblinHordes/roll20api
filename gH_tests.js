token1 = new R20.Object('graphic', {_subtype:'token', name:'token1'});
token1.set("gmnotes", "<pre>{\"native_height\":70, \"native_width\":70}</pre>");

aoo1 = new AO.Object({obj:token1});

dbg.info(token1.get("gmnotes"));
dbg.info(aoo1.getState());
dbg.info('info');
dbg.warn('warn');
dbg.error('error');


