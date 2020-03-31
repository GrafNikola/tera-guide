// Sea of Honor
//
// made by michengs

const {SpawnMarker, SpawnVector, SpawnCircle, applyDistance} = require("../lib");

let player, entity, library, effect;
let green = false;
let purple = false;
let boss_thirty = false;
let print = false;

function skilld_event(skillid, handlers, event, ent, dispatch) {
	if (skillid == 121) green = true;
	if (skillid == 122) purple = true;

	if (skillid == 120) {
		if (purple && !boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT > IN","message_RU": "К нему > От него > К нему"});
			setTimeout(() => purple = false, 2000);
		} else if (purple && boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT","message_RU": "К нему > От него"}); 
			handlers['text']({"type": "text","sub_type": "message","delay": 6000,"message": "IN","message_RU": "К нему"});
			setTimeout(() => purple = false, 2000);
		}
	}
	if (skillid == 123) {
		if (green && !boss_thirty){
			handlers['text']({"type": "text","sub_type": "message","message": "OUT > IN > OUT","message_RU": "От него > К нему > От него"});
			setTimeout(() => green = false, 2000);
		} else if (purple && !boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT > OUT","message_RU": "К нему > От него > От него"});
			setTimeout(() => purple = false, 2000);
		} else if (green && boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "OUT > OUT","message_RU": "От него > От него"}); 
			handlers['text']({"type": "text","sub_type": "message","delay":6000,"message": "OUT","message_RU": "От него"});
			setTimeout(() => purple = false, 2000);
		} else if (purple && boss_thirty) {
			handlers['text']({"type": "text","sub_type": "message","message": "IN > OUT","message_RU": "К нему > От него"}); 
			handlers['text']({"type": "text","sub_type": "message","delay": 6000,"message": "OUT","message_RU": "От него"});
			setTimeout(() => purple = false, 2000);
		}
	}
}

function start_boss() {
	if (print) return;
	boss_thirty = true;
	print = true;
}

let debuff_tracker_started = false;
let debuffs_targe = {
	30209101: {msgt: 'Lightning', msg: 'Молния (эвейд)'},
	30209102: {msgt: 'Witch',     msg: 'Ведьма (эвейд)'}
};

let debuff_call_event = null;
function start_Sailing_Instance(handlers, event, entity, dispatch) {
	const abnormality_change = (added, event) => {
		if ((player.isMe(event.target) || player.playersInParty.includes(event.target.toString())) && debuffs_targe[event.id]) {
			if (added) {
				if (debuff_call_event) {
					clearTimeout(debuff_call_event);
				}
				debuff_call_event = setTimeout(() => {
					handlers['text']({
						"sub_type": "message",
						"message": debuffs_targe[event.id].msgt,
						"message_RU": debuffs_targe[event.id].msg
					});
					debuff_call_event = null;
				}, 1500);
			}
		}
	};

	if (!debuff_tracker_started) {
		dispatch.hook('S_ABNORMALITY_BEGIN', 4, abnormality_change.bind(null, true));
		dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));
		debuff_tracker_started = true;
	}
}

function SpawnCircleD(item, offsetAngle, offsetDistance, interval, radius, delay, duration, handlers, event, entity) {
	let shield_loc   = entity['dest'].clone();
	    shield_loc.w = entity['loc'].w;

	applyDistance(shield_loc, offsetDistance, 360 - offsetAngle);

	for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * interval / 180) {
		handlers['spawn']({
			id: item,
			delay: delay,
			sub_delay: duration,
			distance: radius,
			offset: angle
		}, {
			loc: shield_loc
		});
	}
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	"s-3020-1900-104-0": [{"type": "text","sub_type": "message","message": "Suction (Dodge)","message_RU": "Высасывание (Выйти)"},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,0,15,300,200,3000)}
	],

	// 2 BOSS
	"s-3020-1200-103-0": [{"type": "text","sub_type": "message","message": "Suction (Dodge)","message_RU": "Высасывание (Выйти)"},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,0,15,200,200,3000)}
	],

	// 3 BOSS
	"s-3020-2200-108-0": [{"type": "text","sub_type": "message","message": "Front stun","message_RU": "Стан"},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,170,20,120,200,2000)}
	],
	//121 123  Вперед, разбить, вращение, вперед, разбить, зеленый
	//122 120  Вращение, вперед разбить, вращение, фиолетовый, вперед
	//122 123  Вращение, удар вперед, большой удар вперед, фиолетовый -зеленый, второе движение вперед-вниз
	//
	"ae-0-0-4030": [{"type": "func","func": start_Sailing_Instance}],
	"ae-0-0-4020": [{"type": "func","func": start_Sailing_Instance}],
	"h-3020-2200-30": [{"type": "func","func": start_boss}],
	"h-3020-2200-29": [{"type": "func","func": start_boss}],
	"h-3020-2200-28": [{"type": "func","func": start_boss}],
	"h-3020-2200-27": [{"type": "func","func": start_boss}],
	"h-3020-2200-26": [{"type": "func","func": start_boss}],
	"h-3020-2200-25": [{"type": "func","func": start_boss}],
	"h-3020-2200-24": [{"type": "func","func": start_boss}],
	"h-3020-2200-23": [{"type": "func","func": start_boss}],
	"h-3020-2200-22": [{"type": "func","func": start_boss}],
	"h-3020-2200-21": [{"type": "func","func": start_boss}],
	"h-3020-2200-20": [{"type": "func","func": start_boss}],
	"h-3020-2200-19": [{"type": "func","func": start_boss}],
	"h-3020-2200-18": [{"type": "func","func": start_boss}],
	"h-3020-2200-17": [{"type": "func","func": start_boss}],
	"h-3020-2200-16": [{"type": "func","func": start_boss}],
	"h-3020-2200-15": [{"type": "func","func": start_boss}],
	"h-3020-2200-14": [{"type": "func","func": start_boss}],
	"h-3020-2200-13": [{"type": "func","func": start_boss}],
	"h-3020-2200-12": [{"type": "func","func": start_boss}],
	"h-3020-2200-11": [{"type": "func","func": start_boss}],
	"h-3020-2200-10": [{"type": "func","func": start_boss}],
	"h-3020-2200-9": [{"type": "func","func": start_boss}],
	"h-3020-2200-8": [{"type": "func","func": start_boss}],
	"h-3020-2200-7": [{"type": "func","func": start_boss}],
	"h-3020-2200-6": [{"type": "func","func": start_boss}],
	"h-3020-2200-5": [{"type": "func","func": start_boss}],
	"h-3020-2200-4": [{"type": "func","func": start_boss}],
	"h-3020-2200-3": [{"type": "func","func": start_boss}],
	"h-3020-2200-2": [{"type": "func","func": start_boss}],
	"h-3020-2200-1": [{"type": "func","func": start_boss}],
	// зеленый
	"s-3020-2200-121-0": [{"type": "func","func": skilld_event.bind(null, 121)},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,170,8,290,200,3000)},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,170,8,280,3000,5000)},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,170,4,570,3000,5000)}
	],
	// фиолетовый
	"s-3020-2200-122-0": [{"type": "func","func": skilld_event.bind(null, 122)},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,0,8,280,200,3000)},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,0,4,570,200,3000)},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,170,8,290,3000,5000)}
	],
	// комба
	"s-3020-2200-120-0": [{"type": "func","func": skilld_event.bind(null, 120)},{"type": "func","func": SpawnCircle.bind(null,553,0,150,8,280,(boss_thirty ? 7000:5000),(boss_thirty ? 9000:7000))}],
	"s-3020-2200-123-0": [{"type": "func","func": skilld_event.bind(null, 123)},{"type": "func","func": SpawnCircle.bind(null,553,0,200,8,450,(boss_thirty ? 7000:5000),(boss_thirty ? 9000:7000))}],
	//
	//"s-3020-9101-122-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "强袭"}],
	//"s-3020-9101-124-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "前砸"}],
	//"s-3020-9101-125-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "转圈"}],
	//"s-3020-9101-126-0": [{"type": "text","sub_type": "message","message": "Jump","message_TW": "大前砸"}],
	// "s-3020-2201-121-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "2201-121" },{"type": "func","func": SpawnMarker.bind(null,0,0,100,2000,true,null)}], 
	//"s-3020-2201-125-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "2201-125" },{"type": "func","func": SpawnMarker.bind(null,0,0,100,2000,true,null)}], 
	// "s-3020-2201-126-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "2201-126" },{"type": "func","func": SpawnMarker.bind(null,0,0,100,2000,true,null)}], 
	//"s-3020-2201-201-0": [{"type": "func","func": SpawnMarker.bind(null,0,0,100,2000,true,null)}],
	// "s-3020-6103-203-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "6103-203" },{"type": "func","func": SpawnMarker.bind(null,0,0,100,2000,true,null)}], 
	// "s-3020-6103-202-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "6103-202" },{"type": "func","func": SpawnMarker.bind(null,0,0,100,2000,true,null)}], 
	// "s-3020-6103-201-0": [{"type": "text","sub_type": "message","message":  'Left swipe',"message_TW": "6103-201" },{"type": "func","func": SpawnMarker.bind(null,0,0,100,2000,true,null)}],  
	"s-3020-2200-127-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "Прыжок | К нему"},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,0,15,200,250,1000)},
						  {"type": "func","func": SpawnCircle.bind(null,553,0,0,10,300,1000,4000)}
	],
	"s-3020-2200-128-0": [{"type": "text","sub_type": "message","message": "Upper cut (Knock up)","message_RU": "Черкаш (подлет)"}],
	"s-3020-2200-129-0": [{"type": "text","sub_type": "message","message": "Hammer Toss ~ Skull","message_RU": "Полоса в цель"},
						  {"type": "func","func": SpawnVector.bind(null,553,90,100,0,500,100,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,270,100,0,500,100,2000)}
	],
	"s-3020-2200-131-0": [{"type": "text","sub_type": "message","message": "Jump | OUT","message_RU": "Прыжок | От него"}],
	"s-3020-2200-133-1": [{"type": "text","sub_type": "message","message": "Donuts","message_RU": "Бублики"},
						  {"type": "func","func": SpawnCircleD.bind(null,553,0,0,8,300,0,4000)},
						  {"type": "func","func": SpawnCircleD.bind(null,553,0,0,6,600,0,4000)},
						  {"type": "func","func": SpawnCircleD.bind(null,553,0,0,4,900,0,4000)}
	],
	"s-3020-2200-135-0": [{"type": "text","sub_type": "message","message": "Puddles Inc (Jump)","message_RU": "Волны х5"}],
	"s-3020-2200-137-0": [{"type": "text","sub_type": "message","message": "Outward Pluse","message_RU": "Волна от"}],
	"s-3020-2200-139-0": [{"type": "text","sub_type": "message","message": "Inward Succ","message_RU": "Волна к"}],

	"s-3020-2200-202-0": [{"type": "text","sub_type": "message","message": "Defence 3sec.","message_RU": "Защита 3 сек."}],
	"s-3020-2200-203-0": [{"type": "text","sub_type": "message","message": "Defence 10sec.","message_RU": "Защита 10 сек."}],
	"s-3020-2200-204-0": [{"type": "text","sub_type": "message","message": "30% transformation","message_RU": "Видоизменение"}]
};