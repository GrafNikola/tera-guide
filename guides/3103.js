// Forbidden Arena [Undying Warlord]
//
// made by HSDN

// Stub

let player, entity, library, effect;

const {SpawnCircle, SpawnVector} = require("../lib");

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 775
	//"s-3103-1000-101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "_","message_RU": "101 удар вперед"}],
	//"s-3103-1000-102-0": [{"type": "text","sub_type": "message","message": "_","message_RU": "102 разворот"}],
	//"s-3103-1000-107-0": [{"type": "text","sub_type": "message","message": "_","message_RU": "107"}], // 08-16
	//"s-3103-1000-108-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "_","message_RU": "108 полукруг вперед"}],
	//"s-3103-1000-111-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "_","message_RU": "111 круг вперед"}], // 07-40
	//"s-3103-1000-113-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "_","message_RU": "113 удар ногой | кувырок"}], // 113 121
	//"s-3103-1000-120-0": [{"type": "text","sub_type": "message","message": "_","message_RU": "120"}], // 08-01
	//"s-3103-1000-121-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "_","message_RU": "121 кувырок"}], // 07-52
	//"s-3103-1000-124-0": [{"type": "text","sub_type": "message","message": "_","message_RU": "124"}], // 07-34
	//"s-3103-1000-125-0": [{"type": "text","sub_type": "message","message": "_","message_RU": "125"}], // 07-25
	//"s-3103-1000-127-0": [{"type": "text","sub_type": "message","message": "_","message_RU": "127"}], // 07-22
	//"s-3103-1000-153-0": [{"type": "text","sub_type": "message","message": "_","message_RU": "153 удар левой правой"}], // 07-26
	//"s-3103-1000-154-0": [{"type": "text","sub_type": "message","message": "_","message_RU": "154 удар в прыжке"}], // 08-30

	"s-3103-1000-110-0": [{"type": "text","sub_type": "message","message": "Spin","message_RU": "Крутилка"},{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,12,420,0,3000)}], // 08-13
	"s-3103-1000-114-0": [{"type": "text","sub_type": "message","message": "Jump (Knockdown)","message_RU": "Прыжок (опрокид)"},{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,12,230,0,2000)}],
	"s-3103-1000-115-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Front","message_RU": "Удар вперед"}],
	"s-3103-1000-116-0": [{"type": "text","sub_type": "message","message": "Target (Bait)","message_RU": "Удар (таргет)"}],
	"s-3103-1000-146-0": [{"type": "text","sub_type": "message","message": "Back kick","message_RU": "Откид назад"},
		{"type": "func","func": SpawnVector.bind(null,553,90,120,170,600,0,3000)},
		{"type": "func","func": SpawnVector.bind(null,553,270,120,-170,600,0,3000)}
	],

	// Shield
	"qb-3103-1000-31031006": [{"type": "text","sub_type": "message","message": "SHIELD!","message_RU": "ЩИТ!"}],

	// Donuts // 09-50
	"qb-3103-1000-31031008": [{"type": "text","sub_type": "message","message": "Donuts: Out > In > Dodge","message_RU": "Бублики: От него > К нему > Эвейд"}], // 31031008 303/304 117 155
	"qb-3103-1000-31031009": [{"type": "text","sub_type": "message","message": "Donuts: In > Out > Dodge","message_RU": "Бублики: К нему > От него > Эвейд"}], // 31031009 303/304 118 155
	"s-3103-1000-303-0": [
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,630,0,8000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,250,0,5000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,8,480,0,5000)}
	],
	"s-3103-1000-304-0": [
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,630,0,8000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,250,0,5000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,8,480,0,5000)}
	],

	// Stun 142 148 129 // 09-30
	"s-3103-1000-142-0": [{"type": "text","sub_type": "message","message": "Stun | Back wave","message_RU": "Стан | Волна назад"}],
	"s-3103-1000-148-0": [{"type": "func","func": SpawnCircle.bind(null,true,912,0,0,12,300,0,3000)}],
	"s-3103-1000-129-0": [{"type": "text","sub_type": "message","message": "Back wave","message_RU": "Волна назад (откид)"},
		{"type": "func","func": SpawnVector.bind(null,912,90,200,390,250,0,3000)},
		{"type": "func","func": SpawnVector.bind(null,912,270,200,-390,250,0,3000)}
	],

	// Jump 143-0 143-1 // 09-23
	"s-3103-1000-143-0": [{"type": "text","sub_type": "message","message": "Jump (Stun)","message_RU": "Прыжок (стан)"}],
	"s-3103-1000-143-1": [{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,14,230,0,2000)}],

	// Target 31031007 308 // 10-25
	"qb-3103-1000-31031007": [{"type": "text","sub_type": "message","message": "Target","message_RU": "Таргет"}],

	// AoE 313 314
	"s-3103-1000-313-0": [{"type": "text","sub_type": "message","message": "AOE","message_RU": "AOE"}],
	"s-3103-1000-314-0": [{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,20,460,0,4000)}],
};