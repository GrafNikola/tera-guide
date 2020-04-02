// Forbidden Arena
//
// made by michengs
// updated by HSDN

const {SpawnVector, SpawnCircle} = require("../lib");

let player, entity, library, effect;
let timer1;
let timer2;
let timer3;
let notices = true;
let print = true;
let printHP = true;
let printMech = true;
let isHP_69_39 = false;

function skilld_event(skillid, handlers, event, ent, dispatch) {
	if ([351].includes(skillid)) { // щит
		if (notices) {
			clearTimeout(timer1);
			clearTimeout(timer2);
			notices = false;
			setTimeout(() => notices = true, 5000);
				timer1 = setTimeout(()=> {
				handlers['text']({
					"sub_type": "message",
					"message": isHP_69_39 ? "!" : "After 5s SHIELD!!!!",
					"message_RU": isHP_69_39 ? "!" : "Через 5 сек. ЩИТ!!!"
				});
			}, 85000);
			timer2 = setTimeout(()=> {
				handlers['text']({
					"sub_type": "message",
					"message": isHP_69_39 ? "!" : "After 15s SHIELD!!!!",
					"message_RU": isHP_69_39 ? "!" : "Через 15 сек. ЩИТ!!!"
				});
			}, 75000);
		}
	}
	if ([69,39].includes(skillid)) {
		if (printHP) {
			clearTimeout(timer1);
			clearTimeout(timer2);
			printHP = false;
			isHP_69_39 = true;
			setTimeout(() => printHP = true, 15000);
		}
	}
	if ([90,60,30].includes(skillid)) { // до щита
		if (print) {
			print = false;
			isHP_69_39 = false;
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

	"h-3027-1000-90": [{"type": "func","func": skilld_event.bind(null, 90)}],
	"h-3027-1000-60": [{"type": "func","func": skilld_event.bind(null, 60)}],
	"h-3027-1000-30": [{"type": "func","func": skilld_event.bind(null, 30)}],
	"h-3027-1000-69": [{"type": "func","func": skilld_event.bind(null, 69)}],
	"h-3027-1000-39": [{"type": "func","func": skilld_event.bind(null, 39)}],

	"s-3027-1001-255-0": [{"type": "func","func": SpawnVector.bind(null,553,0,0,0,3000,0,5000)}], //0
	"s-3027-1002-256-0": [{"type": "func","func": SpawnVector.bind(null,553,0,0,0,3000,0,5000)}], //60
	"s-3027-1003-257-0": [{"type": "func","func": SpawnVector.bind(null,553,0,0,0,3000,0,5000)}], //0
	"s-3027-1004-258-0": [{"type": "func","func": SpawnVector.bind(null,553,0,0,0,3000,0,5000)}], //60

	"s-3027-1000-108-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Strike (slow)","message_RU": "Меч (медленный)"}],

	"s-3027-1000-112-0": [{"type": "text","sub_type": "message","message": "Back | Strike","message_RU": "Прыжок назад | Меч"}],
"s-3027-1000-112-1": [{"type": "func","func": SpawnVector.bind(null,445,90,0,0,500,100,2000)}],

	//"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "random aggro","message_RU": "Таргет"}],
	"s-3027-1000-134-0": [{"type": "text","sub_type": "message","message": "Turn around","message_RU": "Поворот | Удар назад"}],
	"s-3027-1000-134-1": [{"type": "text","sub_type": "message","message": "Back","message_RU": "Удар назад"}],
	"s-3027-1000-147-0": [{"type": "text","sub_type": "message","message": "Back","message_RU": "Удар"}],
	//"s-3027-1000-355-0": [{"type": "text","sub_type": "message","message": "Eviscerate","message_RU": "Потрошение"}],
	"s-3027-1000-114-0": [{"type": "text","sub_type": "message","message": "Split strike","message_RU": "Разделяющий удар"}],

	// стяжка -> бублики
	"s-3027-1000-350-0": [{"type": "text","sub_type": "message","message": "Donuts","message_RU": "Стяжка | Бублики"},
		{"type": "text","sub_type": "message","delay": 3750,"message":  'Waves',"message_RU": "Волны"},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,240,100,5000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,8,480,100,5000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,3,950,100,5000)},
		{"type": "func","func": skilld_event.bind(null, 350)}
	],
	// стяжка -> волна
	"s-3027-1000-357-0": [{"type": "text","sub_type": "message","message": "Get out","message_RU": "Стяжка | От него"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,20,500,2000,5000)},
		{"type": "func","func": skilld_event.bind(null, 357)}
	],

	"s-3027-1000-135-0": [{"type": "text","sub_type": "message","message": "Overhand Strike","message_RU": "Меч (медленный)"}],
	"s-3027-1000-111-0": [{"type": "text","sub_type": "message","message": "Stun | Strike","message_RU": "Стан | Меч (медленный)"}],

	"s-3027-1000-136-0": [{"type": "text","sub_type": "message","message": "2x360°","message_RU": "2 удара | Меч (медленный)"}],
	"s-3027-1000-144-0": [{"type": "text","sub_type": "message","message": "Sword","message_RU": "Меч"}],

	"s-3027-1000-356-0": [{"type": "text","sub_type": "message","message": "Teleport","message_RU": "Телепорт (таргет)"}],
	"s-3027-1000-117-0": [{"type": "text","sub_type": "message","message": "Teleport","message_RU": "Телепорт (таргет)"}],

	// 3 удара -> прыжок
	"s-3027-1000-145-0": [{"type": "text","sub_type": "message","message": "3x360°","message_RU": "3 удара | Прыжок"}],
	"s-3027-1000-139-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "прыжок)"},{"type": "func","func": SpawnCircle.bind(null,false,413,0,180,8,660,1000,2000)}],
	"s-3027-1000-140-0": [{"type": "text","sub_type": "message","message": "Dodge","message_RU": "Эвейд!"},{"type": "func","func": SpawnCircle.bind(null,false,912,0,180,8,460,0,3000)}],

	"s-3027-1000-151-0": [{"type": "text","sub_type": "message","message": "Three chop | Strike","message_RU": "3 удара | Меч"}],

	//"s-3027-1000-149-0": [{"type": "text","sub_type": "message","message": "Random aggro","message_RU": "Таргет"}],
	"s-3027-1000-149-1": [{"type": "text","sub_type": "message","message": "Back teleport","message_RU": "Телепорт назад"}],
	//"s-3027-1000-148-0": [{"type": "text","sub_type": "message","message": "Random aggro","message_RU": "Таргет"}],
	"s-3027-1000-148-1": [{"type": "text","sub_type": "message","message": "Teleport","message_RU": "Телепорт"}],

	"s-3027-1000-141-0": [{"type": "text","sub_type": "message","message": "Round | Strike ","message_RU": "Круговая | Меч"}],
	"s-3027-1000-146-0": [{"type": "text","sub_type": "message","message": "Eviscerate | Strike","message_RU": "Потрошение | Меч"}],
	"s-3027-1000-142-0": [{"type": "text","sub_type": "message","message": "Eviscerate | Strike","message_RU": "Потрошение | Меч"}],
	"s-3027-1000-143-0": [{"type": "text","sub_type": "message","message": "Overhand Strike","message_RU": "Меч"}],

	// прыжок
	"s-3027-1000-116-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "прыжок)"},{"type": "func","func": SpawnCircle.bind(null,false,413,0,180,8,560,0,1000)}],
	"s-3027-1000-116-1": [{"type": "text","sub_type": "message","message": "Dodge","message_RU": "Эвейд!"},{"type": "func","func": SpawnCircle.bind(null,false,912,0,180,8,460,0,3000)}],

	"s-3027-1000-402-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "Прыжок"}],
	"s-3027-1000-109-0": [{"type": "text","sub_type": "message","message": "Forward Jump","message_RU": "Прыжок вперед"}],

	"s-3027-1000-351-0": [{"type": "text","sub_type": "message","message": "SHIELD!","message_RU": "Щит!!"},
		{"type": "func","func": skilld_event.bind(null, 351)}
	],
	"s-3027-1000-401-0": [{"type": "text","sub_type": "message","message": "AOE","message_RU": "АОЕ!!!!"}]
};