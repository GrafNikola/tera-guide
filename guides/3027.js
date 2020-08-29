// Forbidden Arena [Hagufna]
//
// made by michengs / HSDN

const {HIGHLIGHT_ITEM, SpawnItem, SpawnMarker, SpawnVector, SpawnCircle} = require("../lib");

let player, entity, library, effect;
let timer1;
let timer2;
let timer3;
let notices = true;
let print = true;
let printHP = true;
let printMech = true;
let isHP_74_39 = false;

function skilld_event(skillid, handlers, event, entity, dispatch) {
	if ([351].includes(skillid)) { // щит
		if (notices) {
			clearTimeout(timer1);
			clearTimeout(timer2);
			notices = false;
			setTimeout(() => notices = true, 5000);
				timer1 = setTimeout(()=> {
				handlers['text']({
					"sub_type": "message",
					"message": isHP_74_39 ? "!" : "After 5s SHIELD!!!",
					"message_RU": isHP_74_39 ? "!" : "Через 5 сек. ЩИТ!!!"
				});
			}, 85000);
			timer2 = setTimeout(()=> {
				handlers['text']({
					"sub_type": "message",
					"message": isHP_74_39 ? "!" : "After 15s SHIELD!!!",
					"message_RU": isHP_74_39 ? "!" : "Через 15 сек. ЩИТ!!!"
				});
			}, 75000);
		}
	}
	if ([74,39].includes(skillid)) {
		if (printHP) {
			clearTimeout(timer1);
			clearTimeout(timer2);
			printHP = false;
			isHP_74_39 = true;
			setTimeout(() => printHP = true, 15000);
		}
	}
	if ([89,59,29].includes(skillid)) { // до щита
		if (print) {
			print = false;
			isHP_74_39 = false;
			setTimeout(() => print = true, 15000);
			handlers['text']({
				"sub_type": "notification",
				"message": "Ready for SHIELD",
				"message_RU": "Готовность ломать щит"
			});
		}
	}
	if ([350,357].includes(skillid)) { // до стяжки
		if (printMech) {
			clearTimeout(timer3);
			printMech = false;
			setTimeout(() => printMech = true, 15000);
			timer3 = setTimeout(()=> {
				handlers['text']({
					"sub_type": "notification",
					"message": "Mechanics soon",
					"message_RU": "Скоро стяжка"
				});
			}, 58000);
		}
	}
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"h-3027-1000-89": [{"type": "func","func": skilld_event.bind(null, 89)}],
	"h-3027-1000-59": [{"type": "func","func": skilld_event.bind(null, 59)}],
	"h-3027-1000-29": [{"type": "func","func": skilld_event.bind(null, 29)}],
	"h-3027-1000-74": [{"type": "func","func": skilld_event.bind(null, 74)}],
	"h-3027-1000-39": [{"type": "func","func": skilld_event.bind(null, 39)}],

	//"s-3027-1001-255-0": [{"type": "func","func": SpawnVector.bind(null,553,0,0,0,3000,0,5000)}], //0
	//"s-3027-1002-256-0": [{"type": "func","func": SpawnVector.bind(null,553,0,0,0,3000,0,5000)}], //60
	//"s-3027-1003-257-0": [{"type": "func","func": SpawnVector.bind(null,553,0,0,0,3000,0,5000)}], //0
	//"s-3027-1004-258-0": [{"type": "func","func": SpawnVector.bind(null,553,0,0,0,3000,0,5000)}], //60

	"s-3027-1000-108-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Strike (slow)","message_RU": "Меч (медленный)"}], // 101 121 122 -> 108
	//"s-3027-1000-355-0": [{"type": "text","sub_type": "message","message": "Eviscerate","message_RU": "Потрошение"}],                                 // 102 121 103 -> 355 -> 114
	"s-3027-1000-135-0": [{"type": "text","sub_type": "message","message": "Strike (slow)","message_RU": "Меч (медленный)"}],                         //         104 -> 135 -> 130
	"s-3027-1000-111-0": [{"type": "text","sub_type": "message","message": "Stun | Strike","message_RU": "Стан | Меч"}],                              //         104 -> 111 -> 130
	"s-3027-1000-112-0": [{"type": "text","sub_type": "message","message": "Back jump | Strike","message_RU": "Прыжок назад | Меч"}],                 //     121 102 -> 112 -> 130

	// прыжок
	"s-3027-1000-116-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "прыжок)"},{"type": "func","func": SpawnCircle.bind(null,true,413,0,180,8,560,0,1000)}],
	"s-3027-1000-116-1": [{"type": "text","sub_type": "message","message": "Dodge","message_RU": "Эвейд!"},{"type": "func","func": SpawnCircle.bind(null,true,912,0,180,8,480,0,3000)}],

	// 3 оборота -> прыжок (145 -> 139 -> 140)
	"s-3027-1000-145-0": [{"type": "text","sub_type": "message","message": "3x360 | Jump","message_RU": "3 оборота | Прыжок"}],
	"s-3027-1000-139-0": [{"type": "text","sub_type": "message","delay": 1000,"message": "Jump","message_RU": "прыжок)"},{"type": "func","func": SpawnCircle.bind(null,true,413,0,180,8,660,1000,1000)}],
	"s-3027-1000-140-0": [{"type": "text","sub_type": "message","message": "Dodge","message_RU": "Эвейд!"},{"type": "func","func": SpawnCircle.bind(null,true,912,0,180,8,480,0,3000)}],

	// 109 -> 402 -> 130
	"s-3027-1000-109-0": [{"type": "text","sub_type": "message","message": "Forward jump","message_RU": "Прыжок вперед"}],
	"s-3027-1000-402-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "Прыжок"}/*,{"type": "func","func": SpawnCircle.bind(null,true,912,0,180,20,120,0,3000)}*/],

	// 136 -> 144 -> 130
	"s-3027-1000-136-0": [{"type": "text","sub_type": "message","message": "2x360 | Strike","message_RU": "2 оборота | Меч"}],
	"s-3027-1000-144-0": [{"type": "text","sub_type": "message","message": "Strike","message_RU": "Меч"}],

	// 134 -> 147
	"s-3027-1000-134-0": [{"type": "text","sub_type": "message","message": "Turn around | Back","message_RU": "Поворот | Удар назад"}],
	"s-3027-1000-134-1": [{"type": "text","sub_type": "message","message": "Back","message_RU": "Удар назад"}],
	"s-3027-1000-147-0": [{"type": "text","sub_type": "message","message": "Strike","message_RU": "Меч"}],

	// 142 -> 143 114 130
	"s-3027-1000-142-0": [{"type": "text","sub_type": "message","message": "2x360 | Strike","message_RU": "2 оборота | Меч"}],
	"s-3027-1000-143-0": [{"type": "text","sub_type": "message","message": "Strike","message_RU": "Меч"}],

	"s-3027-1000-141-0": [{"type": "text","sub_type": "message","message": "2x360 | Eviscerate","message_RU": "2 оборота | Потрошение"}], // 141 -> 146 114 130
	"s-3027-1000-146-0": [{"type": "text","sub_type": "message","message": "Eviscerate | Strike","message_RU": "Потрошение | Меч"}],      // 146 ->         114 -> 130

	// стяжка -> бублики (350 -> 302)
	"s-3027-1000-350-0": [{"type": "text","sub_type": "message","message": "Red -> Donuts","message_RU": "Стяжка | Бублики"},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,240,0,5000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,8,480,0,5000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,3,950,0,5000)},
		{"type": "func","func": SpawnItem.bind(null,HIGHLIGHT_ITEM,0,0,3800,1000)},
		{"type": "func","func": SpawnMarker.bind(null,false,180,100,3800,1000,false,["CENTER","IN"])},
		{"type": "func","func": SpawnMarker.bind(null,false,0,100,3800,1000,false,["CENTER","IN"])},
		{"type": "func","func": SpawnMarker.bind(null,false,90,100,3800,1000,false,["CENTER","IN"])},
		{"type": "func","func": SpawnMarker.bind(null,false,270,100,3800,1000,false,["CENTER","IN"])},
		{"type": "func","func": skilld_event.bind(null, 350)}
	],
	// стяжка -> волна (357 -> 110)
	"s-3027-1000-357-0": [{"type": "text","sub_type": "message","message": "Purple -> Get OUT","message_RU": "Стяжка | От него"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,20,500,2000,5000)},
		{"type": "func","func": skilld_event.bind(null, 357)}
	],

	//"s-3027-1000-114-0": [{"type": "text","sub_type": "message","message": "Eviscerate (slow)","message_RU": "Потрошение (медленно)"}],
	//"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "Target","message_RU": "Таргет"}],
	"s-3027-1000-151-0": [{"type": "text","sub_type": "message","message": "Back teleport | Strike","message_RU": "Телепорт назад | Меч"}], // 151 149 148 -> 130
	"s-3027-1000-149-1": [{"type": "text","sub_type": "message","message": "Back teleport (target)","message_RU": "Телепорт назад (таргет)"}],
	"s-3027-1000-117-0": [{"type": "text","sub_type": "message","message": "Teleport (target)","message_RU": "Телепорт (таргет)"}],         //         117 -> 130
	"s-3027-1000-356-0": [{"type": "text","sub_type": "message","message": "Teleport (target)","message_RU": "Телепорт (таргет)"}],         //         356 -> 147
	"s-3027-1000-148-1": [{"type": "text","sub_type": "message","message": "Teleport (target)","message_RU": "Телепорт (таргет)"}],

	"s-3027-1000-351-0": [{"type": "text","sub_type": "message","message": "SHIELD!","message_RU": "ЩИТ!"},{"type": "func","func": skilld_event.bind(null, 351)}],
	"s-3027-1000-401-0": [{"type": "text","sub_type": "message","message": "30% AOE!","message_RU": "АОЕ"},
		{"type": "text","sub_type": "message","delay": 1600,"message": "Dodge!","message_RU": "Эвейд!"}
	]
};