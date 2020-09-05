// Akalath Quarantine
//
// made by michengs

const {SpawnVector, SpawnCircle, SpawnSemicircle} = require("../lib");

let player, entity, library, effect;

let debuff = 0;
let counter = 0;
let timer1;
let timer2;
let timer3;
let timer4;

function skilld_event(skillid, handlers, event, ent, dispatch) {
	if (skillid === 99020020) { // Debuff removed
		debuff = 0;
		dispatch.clearTimeout(timer1);
		dispatch.clearTimeout(timer2);
	}
	if (skillid === 3119 && debuff === 1) { // Red aura
		handlers['text']({
			"sub_type": "message",
			"message": "OUT",
			"message_RU": "ОТ НЕГО"
		});
	} else if (skillid === 3119 && debuff === 2) { // Red aura
		handlers['text']({
			"sub_type": "message",
			"message": "IN",
			"message_RU": "К НЕМУ"
		});
	} else if (skillid === 3220 && debuff === 1) { // Blue aura
		handlers['text']({
			"sub_type": "message",
			"message": "IN",
			"message_RU": "К НЕМУ"
		});
	} else if (skillid === 3220 && debuff === 2) { // Blue aura
		handlers['text']({
			"sub_type": "message",
			"message": "OUT",
			"message_RU": "ОТ НЕГО"
		});
	}
	if ([30231000,1000].includes(skillid)) { // Red debuff
		debuff = 1;
		dispatch.clearTimeout(timer1);
		dispatch.clearTimeout(timer2);
		timer1 = dispatch.setTimeout(()=> {
			/*handlers['text']({
				"sub_type": "message",
				"message": "!",
				"message_RU": "!"
			});*/
			debuff = 0;
		}, 70000);
	}
	if ([30231001,1001].includes(skillid)) { // Blue debuff
		debuff = 2;
		dispatch.clearTimeout(timer2);
		dispatch.clearTimeout(timer1);
		timer2 = dispatch.setTimeout(()=> {
			/*handlers['text']({
				"sub_type": "message",
				"message": "!",
				"message_RU": "!"
			});*/
			debuff = 0;
		}, 70000);
	}
	if ([1113,1114].includes(skillid)) { // x4 slash
		dispatch.clearTimeout(timer3);
		counter++;
		if(counter >= 4) {
			/*dispatch.clearTimeout(timer4);
			timer4 = dispatch.setTimeout(()=> {
				handlers['text']({
					"sub_type": "message",
					"message": "4x slash",
					"message_RU": "4 полосы"
				});
			}, 70000);*/
		}
		timer3 = dispatch.setTimeout(()=> {
			counter = 0;
		}, 20000);
	}
}

function firstboss_start_event() {
	debuff = 0;
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	"h-3023-1000-99": [{"type": "func","func": firstboss_start_event}],
	"h-3023-1000-80": [{"type": "text","sub_type": "message","message": "80%","message_RU": "80%"}],
	"s-3023-1000-104-0": [{"type": "text","sub_type": "message","message": 'Random jump',"message_RU": "Прыжок + Стан"}],
	"s-3023-1000-105-0": [{"type": "text","sub_type": "message","message": 'Back',"message_RU": "Поворот назад"}],
	"s-3023-1000-110-0": [{"type": "text","sub_type": "message","message": 'Stun',"message_RU": "Передний стан"},
						  {"type": "func","func": SpawnCircle.bind(null,false,553,0,175,10,225,0,6000)}
	],
	"s-3023-1000-111-0": [{"type": "text","sub_type": "message","message": 'Left slash',"message_RU": "Левая полоса"},
						  {"type": "func","func": SpawnVector.bind(null,553,270,200,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,270,200,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,0,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,0,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,300,270,200,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,180,500,270,200,0,2000)}
	],
	"s-3023-1000-112-0": [{"type": "text","sub_type": "message","message": 'Right slash',"message_RU": "Правая полоса"},
						  {"type": "func","func": SpawnVector.bind(null,553,90,200,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,90,200,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,0,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,0,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,300,90,200,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,180,500,90,200,0,2000)}
	],
	"s-3023-1000-113-0": [{"type": "text","sub_type": "message","message": 'Left slash',"message_RU": "Левая полоса"},
						  {"type": "func","func": skilld_event.bind(null, 1113)},
						  {"type": "func","func": SpawnVector.bind(null,553,270,200,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,270,200,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,0,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,0,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,300,270,200,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,180,500,270,200,0,2000)}
	],
	"s-3023-1000-114-0": [{"type": "text","sub_type": "message","message": 'Right slash',"message_RU": "Правая полоса"},
						  {"type": "func","func": skilld_event.bind(null, 1114)},
						  {"type": "func","func": SpawnVector.bind(null,553,90,200,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,90,200,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,0,180,500,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,0,0,300,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,0,300,90,200,0,2000)},
						  {"type": "func","func": SpawnVector.bind(null,553,180,500,90,200,0,2000)}
	],
	"s-3023-1000-115-0": [{"type": "text","sub_type": "message","message": 'Back attack',"message_RU": "Удар назад"},
						  {"type": "func","func": SpawnSemicircle.bind(null,90,270,553,0,0,20,160,100,2000)},
						  {"type": "func","func": SpawnSemicircle.bind(null,90,270,553,0,0,12,220,100,2000)},
						  {"type": "func","func": SpawnSemicircle.bind(null,90,270,553,0,0,10,300,100,2000)}
	],
	"s-3023-1000-116-0": [{"type": "text","sub_type": "message","message": 'Get out',"message_RU": "Взрыв (Кайя)!!!"},
						  {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,500,0,6000)}
	],
	"am-3023-1000-30231001": [{"type": "func","func": skilld_event.bind(null, 1001)}],
	"am-3023-1000-30231000": [{"type": "func","func": skilld_event.bind(null, 1000)}],
	"ae-0-0-99020020": [{"type": "func","func": skilld_event.bind(null, 99020020)}], //复生
	"ae-0-0-30231000": [{"type": "func","func": skilld_event.bind(null, 30231000)}], //开始红色
	"ae-0-0-30231001": [{"type": "func","func": skilld_event.bind(null, 30231001)}], //开始蓝色
	"s-3023-1000-3107-0": [{"type": "text","sub_type": "message","message": 'Smash',"message_RU": "Конус вперед"},
						   {"type": "func","func": SpawnVector.bind(null,553,90,80,10,1000,0,4000)},
						   {"type": "func","func": SpawnVector.bind(null,553,270,80,350,1000,0,4000)}
	],
	"s-3023-1000-3115-0": [{"type": "text","sub_type": "message","message": 'Spin',"message_RU": "Крутилка"},
						   {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,320,0,3500)}],
	"s-3023-1000-3116-0": [{"type": "text","sub_type": "message","message": 'Spin',"message_RU": "Круги + Крутилка"},
						   {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,320,0,5000)}
	],
	"s-3023-1000-3119-0": [{"type": "func","func": skilld_event.bind(null, 3119)},
						   {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,270,0,4000)},
						   {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,575,0,4000)}
	],
	"s-3023-1000-3220-0": [{"type": "func","func": skilld_event.bind(null, 3220)},
						   {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,270,0,4000)},
						   {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,575,0,4000)}
	],
	//"s-3023-1000-3223-0": [{"type": "text","sub_type": "message","message_RU": "Красный дебаф"}],

	// 2 BOSS
	"s-3023-2000-164-0": [{"type": "text","sub_type": "message","message": 'Counter attack (bleed)',"message_RU": "Отпрыжка (Кровоток)"}],
	"s-3023-2000-166-0": [{"type": "text","sub_type": "message","message": 'Turn-back',"message_RU": "Оборот назад"}],
	"s-3023-2000-175-0": [{"type": "text","sub_type": "message","message": 'Debuff',"message_RU": "Рёв"},
						  {"type": "text","sub_type": "message","delay": 1500,"message": 'Dodge',"message_RU": "Эвейд"}
	],
	"s-3023-2000-178-0": [{"type": "text","sub_type": "message","message": 'Scratching (bleed)',"message_RU": "Крутилка (Кровоток)"}],
	"s-3023-2000-181-0": [{"type": "text","sub_type": "message","message": 'Insert the floor',"message_RU": "Полоса вперед"},
						  {"type": "func","func": SpawnVector.bind(null,553,90,80,10,1000,0,4000)},
						  {"type": "func","func": SpawnVector.bind(null,553,270,80,350,1000,0,4000)}
	],
	"s-3023-2000-182-0": [{"type": "text","sub_type": "message","message": 'Knock down',"message_RU": "Опрокид"}],
	"s-3023-2000-185-0": [{"type": "text","sub_type": "message","message": 'Kaia/Thrall of Protection',"message_RU": "Взрыв (Кайя)!!!"},
						  {"sub_type": "message","delay": 110000,"message": "Big jump soon","message_RU": "Скоро прыжок!"},
						  {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,500,0,6000)},
						  {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,750,0,6000)}
	],
	"s-3023-2000-202-0": [{"type": "text","sub_type": "message","message": 'BACKSTAB',"message_RU": "Назад + Вперед"},
						  {"type": "func","func": SpawnVector.bind(null,553,90,80,180,500,0,3000)},
						  {"type": "func","func": SpawnVector.bind(null,553,270,80,180,500,0,3000)}
	],
	"s-3023-2000-207-0": [{"type": "text","sub_type": "message","message": 'Phantom x5 (bleed)',"message_RU": "Прыжки x5 (Кровоток)"}],
	"s-3023-2000-212-0": [{"type": "text","sub_type": "message","message": 'Flash (bleed)',"message_RU": "Байт (Кровоток)"}],
};