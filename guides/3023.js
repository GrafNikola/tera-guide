// Akalath Quarantine
//
// made by michengs

let lastboss = false;
let player, entity, library, effect;
let	print = true;
let debuff = 0;
let timer1;
let timer2;
let timer3;
let timer4;
let timer5;
let counter = 0;

function  applyDistance(loc, distance, degrees) {
	let r = loc.w; //(loc.w / 0x8000) * Math.PI;
	let rads = (degrees * Math.PI/180);
	let finalrad = r - rads;
	loc.x += Math.cos(finalrad) * distance;
	loc.y += Math.sin(finalrad) * distance;
	return loc;
}

function Spawnitem2(item,degrees,distance, intervalDegrees, radius, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	applyDistance(shield_loc, distance, degrees);
	for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
		handlers['spawn']({
			"id": item,
			"sub_delay": times,
			"distance": radius,
			"offset": angle
		}, {loc: shield_loc});
	}
}

function Spawnitemsp2(d1,d2,item,degree,distance, intervalDegrees, radius, delay, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	let degrees = 360 - degree;
	applyDistance(shield_loc, distance, degrees);
	for (let angle = -Math.PI/ d1; angle <= Math.PI/ d2; angle +=  Math.PI * intervalDegrees / 180) {
		handlers['spawn']({
			"id": item,
			"delay": delay,
			"sub_delay": times,
			"distance": radius,
			"offset": angle
		}, {loc: shield_loc});
	}
}

function Spawnitem1(item,degree,distance,angles, maxRadius, times, handlers, event, entity) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	let degrees = 360 - degree;
	applyDistance(shield_loc, distance, degrees);
	let angle = angles * Math.PI/180
	for (let radius=50 ; radius<=maxRadius; radius+=50) {
		handlers['spawn']({
			"id": item,
			"sub_delay": times,
			"distance": radius,
			"offset": angle
		}, {loc: shield_loc});
	}
}

function skilld_event(skillid, handlers, event, ent, dispatch) {
	if (skillid === 99020020) { //死亡解除debuff
		debuff = 0;
		clearTimeout(timer2);
		clearTimeout(timer1);
	}
	if (skillid === 185) { //死亡解除debuff
		clearTimeout(timer5);
		timer5 = setTimeout(()=> {
			handlers['text']({
				"sub_type": "message",
				"message": "Big jump coming soon！",
				"message_RU": "Скоро прыжок!"
			});
		}, 110000);
	}
	if (skillid === 3119 && debuff === 1 ) {    //紅色气息判断
		handlers['text']({
			"sub_type": "message",
			"message": "OUT",
			"message_RU": "ОТ НЕГО"
		});
	} else if (skillid === 3119 && debuff === 2 ) {    //紅色气息判断
		handlers['text']({
			"sub_type": "message",
			"message": "IN",
			"message_RU": "К НЕМУ"
		});
	} else if (skillid === 3220 && debuff === 1 ) {    //蓝色气息判断
		handlers['text']({
			"sub_type": "message",
			"message": "IN",
			"message_RU": "К НЕМУ"
		});
	} else if (skillid === 3220 && debuff === 2 ) {    //蓝色气息判断
		handlers['text']({
			"sub_type": "message",
			"message": "OUT",
			"message_RU": "ОТ НЕГО"
		});
	}
	if ([30231000, 1000].includes(skillid)) {   //debuff为红色
		debuff = 1;
		clearTimeout(timer1);
		clearTimeout(timer2);
		timer1 = setTimeout(()=> {
			handlers['text']({
				"sub_type": "message",
				"message": "!",
				"message_RU": "!"
			});
			debuff = 0;
		}, 70000);
	}
	if ([30231001, 1001].includes(skillid)) {    //debuff为蓝色
		debuff = 2;
		clearTimeout(timer2);
		clearTimeout(timer1);
		timer2 = setTimeout(()=> {
			handlers['text']({
				"sub_type": "message",
				"message": "!",
				"message_RU": "!"
			});
			debuff = 0;
		}, 70000);
	}
	if ([1113, 1114].includes(skillid)) { //4连挥刀预判
		clearTimeout(timer3);
		counter++;
		if(counter >= 4) {
			clearTimeout(timer4);
			timer4 = setTimeout(()=> {
				handlers['text']({
					"sub_type": "message",
					"message": "4 !!!",
					"message_RU": "4 полосы!!!"
				});
			}, 70000);
		}
		timer3 = setTimeout(()=> {
		counter = 0;
		}, 20000);
	}
}
function start_boss() {
	let print = true;
	debuff = 0;
}
function start_1boss80(handlers) {
	if(print) {
		handlers['text']({
			"sub_type": "message",
			"message": "80%",
			"message_RU": "4 полосы!!!"
		});
	}
	print = false;
	setTimeout(() => print = true, 10000);
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	"h-3023-1000-99": [{"type": "func","func": start_boss}],
	"h-3023-1000-80": [{"type": "func","func": start_1boss80}],
	"s-3023-1000-104-0": [{"type": "text","sub_type": "message","message": 'Jump',"message_RU": "Прыжок + Стан"}],
	"s-3023-1000-105-0": [{"type": "text","sub_type": "message","message": 'Back',"message_RU": "Удар назад"}],
	"s-3023-1000-110-0": [{"type": "text","sub_type": "message","message": 'Stun',"message_RU": "Передний стан"},
						  {"type": "func","func": Spawnitem2.bind(null,553,0,175,10,225,6000)}
	],
	"s-3023-1000-111-0": [{"type": "text","sub_type": "message","message": '↓ Left pull',"message_RU": "| Левая полоса"},
						  {"type": "func","func": Spawnitem1.bind(null,553,270,200,180,500,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,270,200,0,300,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,0,180,500,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,0,0,300,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,300,270,200,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,180,500,270,200,2000)}
	],
	"s-3023-1000-112-0": [{"type": "text","sub_type": "message","message": 'Right pull ↓',"message_RU": "Правая полоса |"},
						  {"type": "func","func": Spawnitem1.bind(null,553,90,200,180,500,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,90,200,0,300,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,0,180,500,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,0,0,300,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,300,90,200,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,180,500,90,200,2000)}
	],
	"s-3023-1000-113-0": [{"type": "text","sub_type": "message","message": '↓ Left pull',"message_RU": "| Левая полоса"},
						  {"type": "func","func": skilld_event.bind(null, 1113)},
						  {"type": "func","func": Spawnitem1.bind(null,553,270,200,180,500,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,270,200,0,300,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,0,180,500,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,0,0,300,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,300,270,200,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,180,500,270,200,2000)}
	],
	"s-3023-1000-114-0": [{"type": "text","sub_type": "message","message": 'Right pull ↓',"message_RU": "Правая полоса |"},
						  {"type": "func","func": skilld_event.bind(null, 1114)},
						  {"type": "func","func": Spawnitem1.bind(null,553,90,200,180,500,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,90,200,0,300,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,0,180,500,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,0,0,300,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,300,90,200,2000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,180,500,90,200,2000)}
	],
	"s-3023-1000-115-0": [{"type": "text","sub_type": "message","message": 'Back attack',"message_RU": "Удар назад"},
						  {"type": "func","func": Spawnitemsp2.bind(null,1,-2,553,0,0,20,160,100,2000)},
						  {"type": "func","func": Spawnitemsp2.bind(null,-2,1,553,0,0,20,160,100,2000)},
						  {"type": "func","func": Spawnitemsp2.bind(null,1,-2,553,0,0,12,220,100,2000)},
						  {"type": "func","func": Spawnitemsp2.bind(null,-2,1,553,0,0,12,220,100,2000)},
						  {"type": "func","func": Spawnitemsp2.bind(null,1,-2,553,0,0,10,300,100,2000)},
						  {"type": "func","func": Spawnitemsp2.bind(null,-2,1,553,0,0,10,300,100,2000)}
	],
	"s-3023-1000-116-0": [{"type": "text","sub_type": "message","message": 'Get out',"message_RU": "Взрыв (Кайя)!!!"},
						  {"type": "func","func": Spawnitem2.bind(null,553,0,0,8,500,6000)}
	],
	"am-3023-1000-30231001": [{"type": "func","func": skilld_event.bind(null, 1001)}],
	"am-3023-1000-30231000": [{"type": "func","func": skilld_event.bind(null, 1000)}],
	"ae-0-0-99020020": [{"type": "func","func": skilld_event.bind(null, 99020020)}], //复生
	"ae-0-0-30231000": [{"type": "func","func": skilld_event.bind(null, 30231000)}], //开始红色
	"ae-0-0-30231001": [{"type": "func","func": skilld_event.bind(null, 30231001)}], //开始蓝色
	"s-3023-1000-3107-0": [{"type": "text","sub_type": "message","message": 'Smash',"message_RU": "Конус вперед"},
						   {"type": "func","func": Spawnitem1.bind(null,553,90,80,10,1000,4000)},
						   {"type": "func","func": Spawnitem1.bind(null,553,270,80,350,1000,4000)}
	],
	"s-3023-1000-3115-0": [{"type": "text","sub_type": "message","message": 'Spin',"message_RU": "Крутилка"},
						   {"type": "func","func": Spawnitem2.bind(null,553,0,0,10,320,3500)}],
	"s-3023-1000-3116-0": [{"type": "text","sub_type": "message","message": 'Spin',"message_RU": "Круги + Крутилка"},
						   {"type": "func","func": Spawnitem2.bind(null,553,0,0,10,320,5000)}
	],
	"s-3023-1000-3119-0": [{"type": "func","func": skilld_event.bind(null, 3119)},
						   {"type": "func","func": Spawnitem2.bind(null,553,0,0,10,270,4000)},
						   {"type": "func","func": Spawnitem2.bind(null,553,0,0,8,575,4000)}
	],
	"s-3023-1000-3220-0": [{"type": "func","func": skilld_event.bind(null, 3220)},
						   {"type": "func","func": Spawnitem2.bind(null,553,0,0,10,270,4000)},
						   {"type": "func","func": Spawnitem2.bind(null,553,0,0,8,575,4000)}
	],
	//"s-3023-1000-3223-0": [{"type": "text","sub_type": "message","message_RU": "Красный дебаф"}],

	// 2 BOSS
	"s-3023-2000-164-0": [{"type": "text","sub_type": "message","message": 'Counter attack (bleeding)',"message_RU": "Отпрыжка (Кровоток)"}],
	"s-3023-2000-166-0": [{"type": "text","sub_type": "message","message": 'Turn-back',"message_RU": "Оборот назад"}],
	"s-3023-2000-175-0": [{"type": "text","sub_type": "message","message": 'Debuff',"message_RU": "Рёв (Эвейд)!!!"}],
	"s-3023-2000-178-0": [{"type": "text","sub_type": "message","message": 'Scratching',"message_RU": "Крутилка (Кровоток)"}],
	"s-3023-2000-181-0": [{"type": "text","sub_type": "message","message": 'Insert the floor',"message_RU": "Полоса вперед"},
						  {"type": "func","func": Spawnitem1.bind(null,553,90,80,10,1000,4000)},
						  {"type": "func","func": Spawnitem1.bind(null,553,270,80,350,1000,4000)}
	],
	"s-3023-2000-182-0": [{"type": "text","sub_type": "message","message": 'Knock down',"message_RU": "Опрокид"}],
	"s-3023-2000-185-0": [{"type": "text","sub_type": "message","message": 'Big jump',"message_RU": "Взрыв (Кайя)!!!"},
						  {"type": "func","func": skilld_event.bind(null, 185)},
						  {"type": "func","func": Spawnitem2.bind(null,553,0,0,10,500,6000)},
						  {"type": "func","func": Spawnitem2.bind(null,553,0,0,8,750,6000)}
	],
	"s-3023-2000-202-0": [{"type": "text","sub_type": "message","message": 'BACKSTAB',"message_RU": "Назад + Вперед"},
						  {"type": "func","func": Spawnitem1.bind(null,553,0,-500,0,500,3000)}
						  //{"type": "func","func": Spawnitem1.bind(null,553,90,-500,0,500,3000)},
						  //{"type": "func","func": Spawnitem1.bind(null,553,270,-500,360,500,3000)}

	],
	"s-3023-2000-207-0": [{"type": "text","sub_type": "message","message": 'Phantom x5 (bleed)',"message_RU": "Прыжки x5 (Кровоток)"}],
	"s-3023-2000-212-0": [{"type": "text","sub_type": "message","message": 'Flash (bleed)',"message_RU": "Байт (Кровоток)"}],
};