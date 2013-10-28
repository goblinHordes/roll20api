bf.Race.Elf = new bf.Race;
bf.Race.Elf.permittedClasses = [
  'cleric', 'figher', 'magic-user', 'thief'
]
bf.Race.Elf.maxHitDie = 6;
bf.Race.Elf.reqs = [ 
  {
    stat: 'intelligence',
    min:  '9'
  },
  {
    stat: 'constitution',
    max:  '17'
  },
]
bf.Race.Elf.bonuses = {
  saveVs: {
    paralysis: 1,
    magicWands: 2,
    spells: 2,
  }
}
bf.Race.Elf.strings = {
  name: "elf",
  plural: "elves",
  adjective: "elven",
}
bf.Race.Elf.names={
  forename: {
    male: [
      ["Abadda", "Abarat", "Adamar", "Adorellan", "Adresin", "Aduce", "Aelrindel", "Aerendyl", "Aermhar", "Aesar", "Aeson", "Afamrail", "Agis", "Aglanthol", "Ainésilver", "Aithlin", "Ajaar", "Akhelbhen", "Akkar", "Alabyran", "Albondiel", "Alinar", "Allain", "Alok", "Alosrin", "Althidon", "Amrynn", "Anarallath", "Andaerean", "Andrathath", "Anfalen", "Anlyth", "Aolis", "Aquilan", "Araevin", "Arandron", "Aravilar", "Arbane", "Ardreth", "Ardryll", "Argus", "Arkhun", "Arkiem", "Arl", "Arlen", "Arun", "Ascal", "Athtar", "Aubric", "Aubron", "Aulathar", "Aulauthar", "Aumanas", "Aumrauth", "Avourel", "Baerdelcoam", "Baerithryn", "Belanor", "Beldroth", "Bellas", "Belstram", "Beluar", "Bhyrindaar", "Biafyndar", "Bialaer", "Braern", "Brindarry", "Buttorwyr", "Cameron", "Chaalmyth", "Chathanglas", "Cheyrth", "Chozzaster", "Chylnoth", "Cluhurach", "Cluym", "Cohnal", "Conall", "Connak", "Cornaith", "Corym", "Cymbiir", "Cystenn", "Dakath", "Dalyor", "Dannyd", "Daratrine", "Darcassan", "Darfin", "Darthoridan", "Deldrach", "Delmuth", "Delsaran", "Dhoelath", "Divisav", "Drannor", "Droth", "Druindar", "Durlan", "Durothil", "Dyffros", "Earynspieir", "Edansyr", "Edicûve", "Edwyrd", "Edyrm", "Ehlark", "Ehrendil", "Eilauver", "Elaethan", "Elaith", "Elandorr", "Elanjar", "Elashor", "Elbauthin", "Elbereth", "Eldaernth", "Eldar", "Eldrin", "Elenshaer", "Elephon", "Elhieardacil", "Elidyr", "Elion", "Elkhazel", "Ellisar", "Elorfindar", "Elorshin", "Elpaerae", "Eltaor", "Eltargrim", "Elénaril", "Emmyth", "Entrydal", "Erendriel", "Erglareo", "Eriladar", "Erlan", "Erlathan", "Eroan", "Erolith", "Eschallus", "Estelar", "Ethlando", "Ettrian", "Euchoé", "Evindal", "Eyrynnhv", "Faahresc", "Faelar", "Faelyn", "Faeranduil", "Falael", "Faoraar", "Felaern", "Fenian", "Fflar", "Fhaornik", "Fhociin", "Filarion", "Filvendor", "Filverel", "Finufaranell", "Flardryn", "Flinar", "Foxfire", "Fylson", "Gaeleath", "Gaelin", "Galaeron", "Galan", "Galather", "Ganamede", "Gantar", "Garrik", "Garynnon", "Giilvas", "Giullio", "Glarald", "Glorandal", "Goronyyv", "Grathgor", "Haalaari", "Hachaam", "Haemir", "Haladavar", "Halafarin", "Halamar", "Haldreithen", "Halflar", "Halgondas", "Halpaeril", "Halueth", "Halueve", "Haryk", "Hastos", "Hatharal", "Hiflanyl", "Hoccar", "Horith", "Hubyr", "Iefyr", "Ievos", "Ihimbraskar", "Ilbryn", "Ilimitar", "Iliphar", "Ilitharath", "Illianaro", "Illithor", "Illitran", "Ilphas", "Ilrune", "Ilthuryn", "Ilyndrathyl", "Inchel", "Inialos", "Injros", "Intevar", "Iolas", "Iolrath", "Itham", "Ithraides", "Ivlisar", "Ivran", "Ivósaar", "Iymbryl", "Iyrandrar", "Iyriklaunavan", "Jandar", "Jannalor", "Jaonos", "Jassin", "Jhaan", "Jhaartael", "Jhaeros", "Jharak", "Jharym", "Jhuvik", "Jonas", "Jonik", "Jorildyn", "Josidiah", "Juppar", "Kahvoerm", "Kalaerede", "Katar", "Katyr", "Keletheryl", "Kelvhan", "Kendel", "Kerym", "Keryth", "Kesefehon", "Khaalindaan", "Kharis", "Khatar", "Khidell", "Khiiral", "Khilseith", "Khuumal", "Khyrmn", "Khyssoun", "Kindroth", "Kivessin", "Kiyuigh", "Klaern", "Kolvar", "Korrigash", "Kroloth", "Kuornos", "Kuskyn", "Kuskyn", "Kymil", "Kyrtaar", "Laeroth", "Lafarallin", "Lamruil", "Laosx", "Larongar", "Larrel", "Lashul", "Lathai", "Lathlaeril", "Leayonadas", "Leojym", "Lhombaerth", "Lhoris", "Lianthorn", "Llarm", "Llewellenar", "Llombaerth", "Lorsan", "Luirlan", "Luthais", "Luvon", "Lyari", "Lyklor", "Lysanthir", "Maasli", "Maendellyn", "Maeraddyth", "Maeral", "Maiele", "Malgath", "Mardeiym", "Marikoth", "Marlevaur", "Melandrach", "Melisander", "Merellien", "Merith", "Methild", "Mhaenal", "Mihangyl", "Miilaethorn", "Miirphys", "Mirthal", "Mirthal", "Mi’tilarro", "Mlartlar", "Mlossae", "Molonym", "Molostroi", "Montagor", "Morgan", "Morthil", "Mothrys", "Mourn", "Myrddin", "Myriil", "Myrin", "Myronthilar", "Mythanthar", "Naertho", "Naeryndam", "Naeryndam", "Napraeleon", "Narbeth", "Nardual", "Nelaeryn", "Nelaeryn", "Neldor", "Neldor", "Nesterin", "Nevarth", "Nhamashal", "Nieven", "Nindrol", "Ninthalor", "Nlossae", "Nopos", "Norlorn", "Nremyn", "Nuvian", "Nyaalsir", "Nylian", "Nym", "Nyvorlas", "Oacenth", "Oenel", "Ohmbryn", "Olaurae", "Olinsivver", "Olithir", "Onas", "Oncith", "Ondabrar", "Ondroth", "Onvyr", "Orist", "Orlpar", "Orndacil", "Ornthalas", "Ornthalas", "Ortauré", "Orym", "Oslarelar", "Otaehryn", "Otaerhyn", "Othorion", "Paeral", "Paeris", "Passilorris", "Paulorin", "Phaendar", "Pharom", "Phraan", "Pirphal", "Pleufan", "Purtham", "Pyrder", "Pyrravym", "Pywaln", "Pyxaanthal,", "Qildor", "Quastarte", "Quynn", "Raeranthur", "Raibyr", "Ralikanthae", "Ralnor", "Rathal", "Raunaeril", "Rauthomyr", "Rauvelore", "Reluraun", "Reluvethel", "Rennyn", "Reptar", "Respen", "Rhaac'var", "Rhalyf", "Rhangyl", "Rhenalyrr", "Rhespen", "Rhistel", "Rhothomir", "Rhys", "Rilitar", "Riluaneth", "Rolim", "Rotheloe", "Rothilion", "Ruardh", "Ruehar", "Ruith", "Rumathil", "Ruvaen", "Ruven", "Ruvyn", "Rychell", "Ryfon", "Ryul", "Ryvvik,", "Sadalymn", "Saelethil", "Saevel", "Saevel", "Sakrattars", "Sakrattars", "Samblar", "Sandevv", "Seanchai", "Seith", "Seiveril", "Selanlar", "Selgauth", "Shael", "Shammath", "Sharian", "Sharian", "Sharlario", "Shaundyl", "Shevarash", "Shonassir", "Shyrrik", "Siirist", "Silvyr", "Simimar", "Sinaht", "Sinaht", "Skalanis", "Skalanis", "Sontar", "Srindin", "Strohm", "Sudryl", "Sudryl", "Sundamar", "Sylvar", "Symkalr", "Sythaeryn", "Sythaeryn", "Taanyth", "Taegen", "Taeglyn", "Taenaran", "Taeral", "Taerntym", "Taleisin", "Tammson", "Tamnaeuth", "Tamnaeuth", "Tamsin", "Tanithil", "Tannivh", "Tannivh", "Tannyll", "Tanseril", "Tanyl", "Tanyl", "Taranath", "Tarathiel", "Tarathiel", "Taredd", "Tarosspur", "Tarron", "Tasar", "Tassarion", "Tathaln", "Tehlmar", "Teirist", "Tenyajn", "Tethir", "Thalanil", "Thallan", "Thatoryl", "Thiilthan", "Thurdan", "Thurruvyn", "Tiarshus", "Tlannatar", "Tolthe", "Tolthe", "Tordynnar", "Toross", "Traeliorn", "Traeliorn", "Travaran", "Triandal", "Triktappic", "Tsaer", "Tsiilmas", "Tyvollus", "T’karon", "Ualair", "Uevareth", "Uldreiyn", "Uldreiyn", "Urddusk", "Usunaar", "Uthorim", "Vaalyun", "Vaeril", "Valmaxian", "Vander", "Vartan", "Velethuil", "Venali", "Vesperr", "Vesryn", "Vesstan", "Vhoadan", "Vhoorhin", "Vhoori", "Volodar", "Voron", "Waernas", "Wistari", "Wylchyr", "Wylym", "Wyn", "Wyndelleu", "Wyqhael", "Wyrran", "Xalph", "Xanotter", "Xhalh", "Xhalth", "Xharlion", "Yalathanil", "Yeschant", "Yhendorn", "Ylyndar", "Ynloeth", "Zabbas", "Zaltarish", "Zandro", "Zaor", "Zaos", "Zelphar", "Zhoron", "Zulae"]
      
    ],
    female: [
      ["Aelieyeeva", "Aelrue", "Aelynthi", "Aerilaya", "Ahrendaaria", "Ahrendue", "Ahskahala", "Ajhalanda", "Alaglossa", "Alais", "Alauthshaee", "Alavara", "Alea", "Alerathla", "Allannia", "Allisa", "Alloralla", "Allynna", "Almithara", "Aloevan", "Aluendalee", "Alvaerele", "Alyndra", "Amara", "Amaranthae", "Amkissra", "Amlaruil", "Amnestria", "Amra", "Anaharae", "Anarzee", "Aneirin", "Anhaern", "Anyllan", "Ara", "Araushnee", "Aravae", "Arcaena", "Arielimnda", "Arlayna", "Arnarra", "Artin", "Ashemmi", "Aubaudameira", "Auluua", "Aurae", "Ava", "Axilya", "Ayaeqlarune", "Azariah", "Bhuraelea", "Blythswana", "Bonnalurie", "Braerindra", "Caerthynna", "Calarel", "Cauladra", "Chaenath", "Chalsarda", "Chandrelle", "Chasianna", "Chichlandra", "Chin’nesstre", "Chomylla", "Cilivren", "Ciyradyl", "Claire", "Csharynn", "Daenalaia", "Daratrine", "Darshee", "Dasyra", "Dathlue", "Dathlue", "Dathlue", "Delimbiyra", "Delshandra", "Deularla", "Duilya", "Eallyrl", "Ecaeris", "Edraele", "Elanalue", "Elanil", "Elasha", "Eldratha", "Eletha", "Ellarian", "Ellifain", "Eloen", "Elora", "Elvandaruil", "Elénaril", "Embrae", "Emvorele", "Enajharas", "Eshenesra", "Essaerae", "Esta", "Ester", "Esyae", "Faranni", "Faunalyn", "Fhaertala", "Fieryat", "Filaurel", "Filauria", "Fildaerae", "Fox-at-Twilight", "Francessca", "Gaelira", "Gaerradh", "Gaylia", "Gemstarzah", "Ghilanna", "Glynnii", "Gweyr", "Gwynnestri", "Gylledha", "Haalija", "Hacathra", "Halaema", "Halaema", "Halama", "Halanaestra", "Hamalitia", "Haramara", "Helartha", "Hhora", "Holone", "Huquethae", "Hycis", "Iahalae", "Ialantha", "Ikeshia", "Ildilyntra", "Ilmadia", "Ilsevel", "Ilyrana", "Ilyrana", "Ilythyrra", "Imdalace", "Imizael", "Immianthe", "Immianthe", "Imra", "Imramarthree", "Imryll", "Innovindil", "Ioelena", "Irhaal", "Isciira", "Isilfarrel", "Ithrythra", "Itiireae", "Itylra", "Jastra", "Jeardra", "Jhaer", "Jhalass", "Jhanandra", "Jhaumrithe", "Jhiilsraa", "Kavrala", "Kaylessa", "Keerla", "Keishara", "Kethryllia", "Keya", "Khiipaera", "Kileontheal", "Kythaela", "Laamtora", "Laerdya", "Laerune", "Laurlaethee", "Lazziar", "Leilatha", "Liluth", "Llamryl", "Lorelei", "Lydi’aleera", "Lyraesel", "Maaleshiira", "Maelyrra", "Maeralya", "Maith", "Makaela", "Malruthiia", "Mariona", "Marissa", "Martainn", "Meira", "Melarue", "Merethyl", "Merialeth", "Meriel", "Merlara", "Mistale", "Mladris", "Mnuvae", "Morgwais", "Moryggan", "Muerlara", "Mylaela", "Mylaerla", "Myriani", "Naevys", "Nakiasha", "Nambra", "Namyriitha", "Nanalethalee", "Nanthee", "Nanthleene", "Naumys", "Nlaea", "Nuala", "Nueleth", "Nuovis", "Nushala", "Nylaathria", "Ochyllyss", "Oluevaera", "Phaerl", "Phantyni", "Phelorna", "Phuingara", "Phyrra", "Pollae", "Puorlaas", "Qemba", "Quamara", "Raejiisa", "Raerauntha", "Rathiain", "Renestrae", "Roanmara", "Ruavia", "Rubrae", "Ryllae", "Saelihn", "Saida", "Sakaala", "Sariandi", "Sarya", "Saélihn", "Schimae", "Seirye", "Seldanna", "Selussa", "Shadowmoon", "Shael", "Shalana", "Shalantha", "Shalendra", "Shalheira", "Shandalar", "Shanyrria", "Sharaera", "Sheedra", "Sheera", "Shialaevar", "Shialaevar", "Shi’larra", "Shoulree", "Shyael", "Shyael", "Shyllisyrr", "Sinnafain", "Soliania", "Soora", "Sorsasta", "Susklahava", "Sylmae", "Symrustar", "Syndra", "Synnorha", "Syrune", "Syviis", "Séonais", "Taenya", "Takari", "Talaedra", "Talanashta", "Talila", "Talindra", "Tamara", "Tarasynora", "Teharissa", "Teryani", "Thalaera", "Thalanil", "Thaola", "Thasitalia", "Throleatha", "Tiatha", "Tira’allara", "Tiriara", "Tisharu", "Tsarra", "Tyllaetha,", "Ulelesse", "Unae", "Urmicca", "Uschymna", "Vaervenshalice", "Valindra", "Vashti", "Velaethaunyl", "Velatha", "Veluthil", "Verrona", "Vestele", "Viansola", "Winterflower", "Xiiltharra", "Yaereene", "Yalanilue", "Yathlanae", "Yeshelné", "Yghiilra", "Ygrainne", "Ynshael", "Yrlissa", "Yrneha", "Yrthraethra", "Ysmyrlda", "Ytharra", "Yulmanda", "Zhuirentel", "Zoastria", "Z’Beryl"]
      
    ]
  },

  surname: [
    ["Aelasar", "Aelorothi", "Aendryr", "Aerasumé", "Aeravansel", "Agayous", "Agrivar", "Ahmaquissar", "Alaenree", "Alantar", "Alastrarra", "Alavara", "Alenuath", "Alerothi", "Alluth", "Aloevan", "Aluianti", "Aluviirsaan", "Amalith", "Amarallis", "Amaratharr", "Amarthen", "Ammath", "Amrallatha", "Anuaer", "Argentaamn", "Arren", "Ash", "Ashgrove", "Audark", "Auglamyr", "Auglathla", "Aunglor", "Autumnfire", "Bellas", "Berethryl", "Berilan", "Bharaclaiev", "Bhephel", "Blackhelm", "Braegen", "Briarbosk", "Brightcloak", "Brightsong", "Brightwing", "Caersaelk", "Calaudra", "Calauth", "Camusiil", "Cathdeiryn", "Ceretlan", "Chaadren", "Chamaranthe", "Clatharla", "Cormyth", "Coudoarluth", "Craulnober", "Crystalembers", "Dahast", "Dawnhorn", "Dhorinshyl", "Dlardrageth", "Doedance", "Donnathlascen", "Dracoseir", "Dree", "Duirsar", "Durothil", "Duskmere", "Duthjuth", "Ealoeth", "Echorn", "Elassidil", "Elaéyadar", "Elian", "Ellarian", "Elond", "Eluarshee", "Ereuvyn", "Erkowe", "Erladden", "Erlshade", "Eroth", "Estelda", "Evanara", "Eveningfall", "Everlove", "Evioro", "Eyriendor", "Faerondaerl", "Faerondarl", "Falanae", "Felinaun", "Fellmirr", "Fenmarel", "Fflannidan", "Floshin", "Fynnasla", "Gildenguard", "Goadulphyn", "Goldenleaf", "Gourael", "Greencloak", "Gwaelon", "Haell", "Haerlgent", "Haevaul", "Haladar", "Halavanthlarr", "Hawksong", "Hlarr", "Hyshaanth", "Iazymnal", "Ibryiil", "Ilbaereth", "Ilbenalu", "Ildacer", "Ildroun", "Iliathor", "Iliathor", "Iliathorr", "Ilnatar", "Immeril", "Ipyllasc", "Irian", "Irithyl", "Irithyl", "Ithruen", "Iydril", "Jaglene", "Kadelaryn", "Kelerandri", "Kelpor’ral", "Keove", "Kevanarial", "Korianthil", "Kraok", "Laelithar", "Laralytha", "Larenthanil", "Larethian", "Laughingwater", "Leafbower", "Leafsigil", "Le’Quella", "Lharithlyn", "Lhoril", "Lightshiver", "Llundlar", "Loceath", "M'Haaren", "Maendellyn", "Maerdrym", "Meirityn", "Melruth", "Miritar", "Mistrivvin", "Mistwinter", "Mithalvarin", "Moonbow", "Moondown", "Moonflower", "Moonglade", "Moonglamaer", "Moonsnow", "Moonweather", "Morningdove", "Mornmist", "Mrhulaedir", "Nacnar", "Naelgrath", "Narlbeth", "Narlbeth", "Neirdre", "Nelnueve", "Never", "Nhachashaal", "Nharimlur", "Nhaéslal", "Nierde", "Nightmeadow", "Nightstar", "Nightwing", "Nihmedu", "Nimesin", "Ni’Tessine", "Nlossae", "Nlossae", "Nolbrae", "Nyamtharsar", "Nyntynel", "Oakstaff", "Oakwood", "Olortynnal", "Olyrnn", "Omberdawn", "Ongluth", "Orama", "Orbryn", "Orbryn", "Ortauré", "Oumryn", "Phenthae", "Pholont", "Presrae", "Q'Naepp,", "Rachiilstar", "Raedrimn", "Raryndur", "Reithel", "Revven", "Rhaevaern", "Rhothomir", "Rhuidhen", "Rhyllgallohyr", "Rivleam", "Rivvikyn", "Runemaster", "Sarsantyr", "Selakiir", "Selmer", "Selorn", "Shadowmantle", "Shadowwater", "Shaeremae", "Shaethe", "Shalandalan", "Sharrith", "Shaurlanglar", "Shraiee", "Shyr", "Sicafei", "Siltral", "Silverbow", "Silverhand", "Silveroak", "Silverspear", "Sinaran", "Slenderbow", "Soryn", "Spellstalker", "Srinshee", "Starbrow", "Starglance", "Starglow", "Starnar", "Starym", "Stillhawk", "Stilmyst", "Straeth", "Strongbow", "Suldusk", "Sultaasar", "Summerstars", "Sunweaver", "Swordstar", "Symbaern", "Talandren", "Talesspur", "Tamlyranth", "Tanagathor", "Tarnruth", "Tarsap", "Tarsis", "Tassarion", "Taurntyrith", "Tellynnan", "Teshurr", "Thea", "Tlanbourn", "Tohrthaal", "Toralynnsyr", "Tornglara", "Tornglara", "Torthtan", "Toryvhallen", "Trueshot", "Tsornyl", "Tyrneladhelu", "Uirthur", "Ulondarr", "Ulongyr", "Vandiir", "Veverell", "Vispasial", "Vyshaan", "Waelvor", "Whitethistle", "Windstar", "Windwalker", "Xantrani", "Yeschant", "Yhendorn", "Yraueme", "Yridnae", "Yundraer"]
    
  ],
}