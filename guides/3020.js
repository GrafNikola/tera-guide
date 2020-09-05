// Sea of Honor
//
// made by michengs
// updated by HSDN

const {SpawnMarker, SpawnVector, SpawnCircle, applyDistance} = require("../lib");

let player, entity, library, effect;
let green = false;
let purple = false;
let boss_thirty = false;
let party_makers = [];

function skilld_event(skillid, handlers, event, ent, dispatch) {
	// (зеленый) "Ближе!"
	if (skillid == 121) {
		green  = true;
		// круг перед боссом
		SpawnCircle(true, 553,0,170,8,290,3000,2000,handlers,event,ent,dispatch); // 1
		// бублик вокруг босса
		SpawnCircle(true, 553,0,0,8,280,4000,3000,handlers,event,ent,dispatch); // 2
		SpawnCircle(true, 553,0,0,4,570,4000,3000,handlers,event,ent,dispatch); // 2
	}

	// (фиолетовый) "Проваливай!"
	if (skillid == 122) {
		purple = true;
		// бублик вокруг босса
		SpawnCircle(true, 553,0,0,8,280,3000,2000,handlers,event,ent,dispatch); // 1
		SpawnCircle(true, 553,0,0,4,570,3000,2000,handlers,event,ent,dispatch); // 1
		// круг перед боссом
		SpawnCircle(true, 553,0,170,8,290,4000,3000,handlers,event,ent,dispatch); // 2
	}

	// "Упади в бездну"
	if (skillid == 120) {
		// Проваливай! - Упади в бездну
		// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> к нему (бублик перед боссом)
		if (purple && !boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT > IN","message_RU": "К нему > От него > К нему"});

			// бублик перед боссом
			SpawnCircle(true, 912,0,150,8,280,5000,3000,handlers,event,ent,dispatch); // 3
			SpawnCircle(true, 912,0,150,4,570,5000,3000,handlers,event,ent,dispatch); // 3

			dispatch.setTimeout(() => purple = false, 2000);

		// < 30%
		// Проваливай! - Упади в бездну
		// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> [волны] -> к нему (бублик перед боссом)
		} else if (purple && boss_thirty) { 
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT","message_RU": "К нему > От него > (К нему)"});
			handlers['text']({"type": "text","sub_type": "message","delay": 5000,"message": "IN","message_RU": "К нему"});

			// бублик перед боссом
			SpawnCircle(true, 912,0,150,8,280,5000,5000,handlers,event,ent,dispatch); // 3
			SpawnCircle(true, 912,0,150,4,570,5000,5000,handlers,event,ent,dispatch); // 3

			dispatch.setTimeout(() => purple = false, 2000);
		}
	}

	// "Ощути силу взрыва"
	if (skillid == 123) {
		// Ближе! - Ощути силу взрыва
		// от него (круг перед боссом) -> к нему (бублик вокруг босса) -> от него (большой круг перед боссом)
		if (green && !boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "OUT > IN > OUT","message_RU": "От него > К нему > От него"});

			// большой круг перед боссом
			SpawnCircle(true, 912,0,200,8,450,5000,3000,handlers,event,ent,dispatch); // 3

			dispatch.setTimeout(() => green = false, 2000);

		// Проваливай - Ощути силу взрыва
		// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> от него (большой круг перед боссом)
		} else if (purple && !boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT > OUT","message_RU": "К нему > От него > От него"});
			
			// большой круг перед боссом
			SpawnCircle(true, 912,0,200,8,450,5000,3000,handlers,event,ent,dispatch); // 3

			dispatch.setTimeout(() => purple = false, 2000);

		// < 30%
		// Ближе! - Ощути силу взрыва
		// от него (круг перед боссом) -> к нему (бублик вокруг босса) -> [волны] -> от него (большой круг перед боссом)
		} else if (green && boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "OUT > IN","message_RU": "От него > К нему > (От него)"});
			handlers['text']({"type": "text","sub_type": "message","delay": 5000,"message": "OUT","message_RU": "От него"});

			// большой круг перед боссом
			SpawnCircle(true, 912,0,200,8,450,5000,5000,handlers,event,ent,dispatch); // 3

			dispatch.setTimeout(() => purple = false, 2000);

		// < 30%
		// Проваливай! - Ощути силу взрыва
		// к нему (бублик вокруг босса) -> от него (круг перед боссом) -> [волны] -> от него (большой круг перед боссом)
		} else if (purple && boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT","message_RU": "К нему > От него > (От него)"});
			handlers['text']({"type": "text","sub_type": "message","delay": 5000,"message": "OUT","message_RU": "От него"});

			// большой круг перед боссом
			SpawnCircle(true, 912,0,200,8,450,5000,5000,handlers,event,ent,dispatch); // 3

			dispatch.setTimeout(() => purple = false, 2000);
		}
	}

	// Прыжок
	if (skillid == 127) {
		if (boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "Jump","message_RU": "Прыжок | От него"});
		} else {
			handlers['text']({"type": "text","sub_type": "message","message": "Jump","message_RU": "Прыжок | К нему"});

			SpawnCircle(true, 553,0,0,15,200,250,1000,handlers,event,ent,dispatch);
			SpawnCircle(true, 553,0,0,10,300,1000,4000,handlers,event,ent,dispatch);
		}
	}
}

function boss_start_event() {
	boss_thirty = false;
}

function boss_thirty_event() {
	boss_thirty = true;
}

let debuff_tracker_started = false;
let debuffs_targe = {
	30209101: {msgt: 'Lightning', msg: 'Молния (эвейд)'},
	30209102: {msgt: 'Witch',     msg: 'Ведьма (эвейд)'}
};

let debuff_call_event = null;
function start_dungeon_event(handlers, event, ent, dispatch) {
	const abnormality_change = (added, event) => {
		if (debuffs_targe[event.id]) {
			party_makers.push({
				color: 2, // 0. red, 1. yellow, 2. blue
				target: event.target
			});

			updateMarkers(dispatch);

			dispatch.setTimeout(() => {
				party_makers = [];
				updateMarkers(dispatch);
			}, 3500);

			if (player.isMe(event.target.toString()) || player.playersInParty.includes(event.target.toString())) {
				if (added) {
					if (debuff_call_event) {
						dispatch.clearTimeout(debuff_call_event);
					}
					debuff_call_event = dispatch.setTimeout(() => {
						handlers['text']({
							"sub_type": "alert",
							"message": debuffs_targe[event.id].msgt,
							"message_RU": debuffs_targe[event.id].msg
						});
						debuff_call_event = null;
					}, 1500);
				}
			}
		}
	};

	if (!debuff_tracker_started) {
		dispatch.hook('S_ABNORMALITY_BEGIN', 4, abnormality_change.bind(null, true));
		dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));
		debuff_tracker_started = true;
	}
}

function updateMarkers(dispatch) {
	if (dispatch._dispatch.settings.stream) return;

	dispatch.send('S_PARTY_MARKER', 1, {
		markers: party_makers
	});
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"dm-0-0-30209203": [{"type": "func","func": start_dungeon_event}],
	"dm-0-0-30209204": [{"type": "func","func": start_dungeon_event}],

	// 1 BOSS
	"s-3020-1900-104-0": [{"type": "text","sub_type": "message","message": "Suction (Dodge)","message_RU": "Высасывание (Выйти)"},{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,15,450,200,6000)}],

	// 2 BOSS
	"s-3020-1200-103-0": [{"type": "text","sub_type": "message","message": "Suction (Dodge)","message_RU": "Высасывание"}],

	// 3 BOSS
	"s-3020-2200-108-0": [{"type": "text","sub_type": "message","message": "Front stun","message_RU": "Стан"},{"type": "func","func": SpawnCircle.bind(null,true,553,0,170,20,120,200,2000)}],
	"h-3020-2200-99": [{"type": "func","func": boss_start_event}],
	"h-3020-2200-30": [{"type": "text","sub_type": "message","message": "30%","message_RU": "30%"},{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-29": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-28": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-27": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-26": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-25": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-24": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-23": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-22": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-21": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-20": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-19": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-18": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-17": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-16": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-15": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-14": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-13": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-12": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-11": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-10": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-9": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-8": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-7": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-6": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-5": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-4": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-3": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-2": [{"type": "func","func": boss_thirty_event}],
	"h-3020-2200-1": [{"type": "func","func": boss_thirty_event}],

	"s-3020-2200-121-0": [{"type": "func","func": skilld_event.bind(null, 121)}], // "Ближе!" (зеленый)
	"s-3020-2200-122-0": [{"type": "func","func": skilld_event.bind(null, 122)}], // "Проваливай!" (фиолетовый)
	"s-3020-2200-120-0": [{"type": "func","func": skilld_event.bind(null, 120)}], // "Упади в бездну"
	"s-3020-2200-123-0": [{"type": "func","func": skilld_event.bind(null, 123)}], // "Ощути силу взрыва"

	//"s-3020-9101-122-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "强袭"}],
	//"s-3020-9101-124-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "前砸"}],
	//"s-3020-9101-125-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "转圈"}],
	//"s-3020-9101-126-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大前砸"}],
	//"s-3020-2201-121-0": [{"type": "text","sub_type": "message","message": 'Left swipe',"message_TW": "2201-121"},{"type": "func","func": SpawnMarker.bind(null,false,0,0,100,2000,true,null)}], 
	//"s-3020-2201-125-0": [{"type": "text","sub_type": "message","message": 'Left swipe',"message_TW": "2201-125"},{"type": "func","func": SpawnMarker.bind(null,false,0,0,100,2000,true,null)}], 
	//"s-3020-2201-126-0": [{"type": "text","sub_type": "message","message": 'Left swipe',"message_TW": "2201-126"},{"type": "func","func": SpawnMarker.bind(null,false,0,0,100,2000,true,null)}], 
	//"s-3020-2201-201-0": [{"type": "func","func": SpawnMarker.bind(null,false,0,0,100,2000,true,null)}],
	//"s-3020-6103-203-0": [{"type": "text","sub_type": "message","message": 'Left swipe',"message_TW": "6103-203"},{"type": "func","func": SpawnMarker.bind(null,false,0,0,100,2000,true,null)}], 
	//"s-3020-6103-202-0": [{"type": "text","sub_type": "message","message": 'Left swipe',"message_TW": "6103-202"},{"type": "func","func": SpawnMarker.bind(null,false,0,0,100,2000,true,null)}], 
	//"s-3020-6103-201-0": [{"type": "text","sub_type": "message","message": 'Left swipe',"message_TW": "6103-201"},{"type": "func","func": SpawnMarker.bind(null,false,0,0,100,2000,true,null)}],  
	"s-3020-2200-127-0": [{"type": "func","func": skilld_event.bind(null, 127)}],
	"s-3020-2200-128-0": [{"type": "text","sub_type": "message","message": "Upper cut (Knock up)","message_RU": "Черкаш (подлет)"}],
	"s-3020-2200-129-0": [{"type": "text","sub_type": "message","message": "Hammer Toss ~ Skull","message_RU": "Полоса в цель"},
						  {"type": "func","func": SpawnVector.bind(null,553,90,100,0,500,200,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,270,100,0,500,200,2000)}
	],
	//"s-3020-2200-131-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "Прыжок"}],
	"s-3020-2200-133-1": [{"type": "text","sub_type": "message","message": "Donuts","message_RU": "Бублики"},
						  {"type": "func","func": SpawnCircle.bind(null,true,445,0,0,10,300,200,5000)},
						  {"type": "func","func": SpawnCircle.bind(null,true,445,0,0,6,600,200,5000)},
						  {"type": "func","func": SpawnCircle.bind(null,true,445,0,0,4,900,200,5000)}
	],
	"s-3020-2200-135-0": [{"type": "text","sub_type": "message","message": "Puddles Inc (Jump)","message_RU": "Волны х5"}],

	"s-3020-2200-137-0": [{"type": "text","sub_type": "message","message": "Outward Pluse","message_RU": "Волна от"}],
	"s-3020-2200-139-0": [{"type": "text","sub_type": "message","message": "Inward Succ","message_RU": "Волна к"}],

	"s-3020-2200-202-0": [{"type": "text","sub_type": "message","message": "Defence 3sec.","message_RU": "Защита 3 сек."}],
	"s-3020-2200-203-0": [{"type": "text","sub_type": "message","message": "Defence 10sec.","message_RU": "Защита 10 сек."}],
	"s-3020-2200-204-0": [{"type": "text","sub_type": "message","message": "30% transformation","message_RU": "30% видоизменение"}]
};