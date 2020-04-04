// Gossamer Vault

const {SpawnCircle} = require("../lib");

let notice_guide = true;
let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS

	//"s-3101-1000-121-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_RU": "право"}],
	//"s-3101-1000-122-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_RU": "лево"}],
	"s-3101-1000-124-0": [{"type": "text","class_position":"tank","sub_type": "msgcg","message": "Stun attack","message_RU": "Стан (фаст)"}],
	"s-3101-1000-127-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "Back","message_RU": "|Полоса| (фаст)"},
						  {"type": "text","class_position":"heal","sub_type": "message","message": "Back","message_RU": "|Полоса| (фаст)"}],
	//"s-3101-1000-128-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Triple Attack","message_RU": "Комба"}],
	"s-3101-1000-131-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "Ranged DPS attention","message_RU": "Волна назад (фаст)"},
						  {"type": "text","class_position":"heal","sub_type": "message","message": "Ranged DPS attention","message_RU": "Волна назад (фаст)"}
	],
	//"s-3101-1000-132-0": [{"type": "text","sub_type": "message","message": "left right ←→","message_RU": "лево + право (фаст)"}],
	"s-3101-1000-133-0": [{"type": "text","sub_type": "message","message": "Jump (Fast)","message_RU": "Прыжок (фаст)"}],
	"s-3101-1000-138-0": [{"type": "text","sub_type": "message","message": "Jump P (Fast)","message_RU": "Прыжок (фаст)"}],
	"s-3101-1000-139-0": [{"type": "text","sub_type": "message","message": "Back + Front (Fast)","message_RU": "вперед + назад (фаст)"}],
	//"s-3101-1000-141-0": [{"type": "text","class_position":"tank","sub_type": "message","message_RU": "? (慢)" }],	
	//"s-3101-1000-142-0": [{"type": "text","class_position":"tank","sub_type": "message","message_RU": "правая + левая"}],
	"s-3101-1000-148-0": [{"type": "text","sub_type": "message","message": "Right hand (flying)","message_RU": "Правая рука (подлет)"}],
	"s-3101-1000-149-0": [{"type": "text","sub_type": "message","message": "Left hand (flying)","message_RU": "Левая рука (подлет)"}],
	"s-3101-1000-305-0": [{"type": "text","sub_type": "message","message": "Pizza","message_RU": "Pizza"}],
	"s-3101-1000-313-0": [{"type": "text","sub_type": "message","message": "Circles (Slow)","message_RU": "Кольцо"},{"type": "func","func": SpawnCircle.bind(null,false,553,0,75,10,300,0,6000)}],


	// 2 BOSS

	//"s-3101-2000-101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right left","message_RU": "правая левая"}],
	//"s-3101-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left right","message_RU": "левая правая"}],
	//"s-3101-2000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "spin","message_RU": "поворот"}],
	//"s-3101-2000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_RU": "правая"}],
	//"s-3101-2000-105-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_RU": "вперед"}],
	//"s-3101-2000-107-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_RU": "левая" }],
	"s-3101-2000-108-0": [{"type": "text","sub_type": "message","message": "Back attack!","message_RU": "Откид назад!" }],
	//"s-3101-2000-109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "quaternion Attack","message_RU": "4 комбо"}],
	//"s-3101-2000-110-0": [{"type": "text","sub_type": "message","message_RU": "?"}],
	//"s-3101-2000-114-0": [{"type": "text","sub_type": "message","message_RU": "??"}],
	//"s-3101-2000-116-0": [{"type": "text","sub_type": "message","message": "back","message_RU": "Назад" }],

	"s-3101-2000-150-0": [{"type": "text","sub_type": "message","message": "Phantom","message_RU": "Фантом"}],
	//"s-3101-2000-201-0": [{"type": "text","sub_type": "message","message": "back 8m","message_RU": "Движение назад 8 м" }],
	//"s-3101-2000-202-0": [{"type": "text","sub_type": "message","message": "front 8m","message_RU": "Движение вперед 8м" }],
	//"s-3101-2000-203-0": [{"type": "func","func": skilld_event.bind(null, 203)}],
	//"s-3101-2000-204-0": [{"type": "func","func": skilld_event.bind(null, 204)}],

	//"s-3101-2000-211-0": [{"type": "text","sub_type": "message","message": "front","message_RU": "???" }],
	//"s-3101-2000-226-0": [{"type": "text","sub_type": "message","message_RU": "????" }],
	"s-3101-2000-228-0": [{"type": "text","sub_type": "message","message": "Team up","message_RU": "Камни (вместе)!!!"}],
	"s-3101-2000-230-0": [{"type": "text","sub_type": "message","message": "AOE","message_RU": "AOE"}],

	"s-3101-2000-231-0": [{"type": "text","sub_type": "message","message": "OUT safe","message_RU": "ОТ НЕГО"},
						  {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,300,0,3000)}
	],
	"s-3101-2000-232-0": [{"type": "text","sub_type": "message","message": "IN safe","message_RU": "К НЕМУ"},
						  {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,300,0,3000)},
						  {"type": "func","func": SpawnCircle.bind(null,false,553,0,0,3,875,0,3000)}
	],

	"s-3101-2000-234-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_RU": "Дебаффы"}],
	"s-3101-2000-235-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_RU": "Дебаффы"}]
};