// Forbidden Arena [Nightmare Undying Warlord]
//
// made by HSDN

// Stub

const {SpawnCircle, SpawnVector} = require("../lib");

let player, entity, library, effect;

let print = false;

function start_boss() {
	print = true;
}

function print_thirty(handlers) {
	if (print) {
		handlers['text']({
			"sub_type": "message",
			"message": "30%",
			"message_RU": "30%"
		});
	}
	print = false;
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"h-3203-1000-99": [{"type": "func","func": start_boss}],
	"h-3203-1000-30": [{"type": "func","func": print_thirty}],

	//"s-3203-1000-101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Punch","message_RU": "Серия ударов"}],
	"s-3203-1000-113-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Roundhouse kick","message_RU": "Удар с разворота"}],
	//"s-3203-1000-120-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Knockdown","message_RU": "Опрокид"}], // 08-01
	"s-3203-1000-121-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Flip kick (Stun)","message_RU": "Удар в воздухе (стан)"}],
	"s-3203-1000-111-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Knockdown","message_RU": "Опрокид"}],
	"s-3203-1000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Combo","message_RU": "Комба"}], // 102 153/154 115/116
	"s-3203-1000-115-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Front kick","message_RU": "Удар вперед"}],
	"s-3203-1000-153-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Two kicks","message_RU": "Два удара"}], // 153 108
	//"s-3203-1000-108-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Floor punch","message_RU": "Удар о землю"}],
	//"s-3203-1000-127-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Many kicks","message_RU": "Несколько ударов"}],

	"s-3203-1000-107-0": [{"type": "text","sub_type": "message","message": "Target (Bait)","message_RU": "Байт (таргет)"}],
	"s-3203-1000-110-0": [{"type": "text","sub_type": "message","message": "Spin","message_RU": "Крутилка"},{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,12,420,0,3000)}],
	"s-3203-1000-114-0": [{"type": "text","sub_type": "message","message": "Leap (Knockdown)","message_RU": "Прыжок (опрокид)"},{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,12,240,0,2000)}],
	//"s-3203-1000-154-0": [{"type": "text","sub_type": "message","message": "Jumping kick","message_RU": "Удар в прыжке"}], // 154 310 116
	"s-3203-1000-310-0": [{"type": "text","sub_type": "message","message": "Back flip | Kick","message_RU": "Сальто назад | Удар"}], // 310 116
	"s-3203-1000-116-0": [{"type": "text","sub_type": "message","message": "Kick","message_RU": "Мощный удар"}],
	"s-3203-1000-131-0": [{"type": "text","sub_type": "message","message": "Rhythmic Blows","message_RU": "Ураганная серия"}], // 131 132 133
	"s-3203-1000-146-0": [{"type": "text","sub_type": "message","message": "Back kick","message_RU": "Откид назад"}, // 116 146
		{"type": "func","func": SpawnVector.bind(null,553,90,120,170,600,0,3000)},
		{"type": "func","func": SpawnVector.bind(null,553,270,120,-170,600,0,3000)}
	],

	// Shield
	"qb-3203-1000-32031006": [{"type": "text","sub_type": "message","message": "SHIELD!","message_RU": "ЩИТ!"}],

	// Target 308 32031007 125
	"qb-3203-1000-32031007": [{"type": "text","sub_type": "message","message": "Target","message_RU": "Таргет"}],
	"s-3203-1000-124-0": [{"type": "text","sub_type": "message","message": "Kick","message_RU": "Удар"}], // 305 124
	"s-3203-1000-125-0": [{"type": "text","sub_type": "message","message": "Kick","message_RU": "Удар"}],

	// Donuts
	"qb-3203-1000-32031008": [{"type": "text","sub_type": "message","message": "Donuts: Out > In > Dodge","message_RU": "Бублики: От него > К нему > Эвейд"}], // 32031008 303/304 117 155
	"qb-3203-1000-32031009": [{"type": "text","sub_type": "message","message": "Donuts: In > Out > Dodge","message_RU": "Бублики: К нему > От него > Эвейд"}], // 32031009 303/304 118 155
	"s-3203-1000-303-0": [
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,630,0,7000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,250,0,5000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,8,480,0,5000)}
	],
	"s-3203-1000-304-0": [
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,630,0,7000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,250,0,5000)},
		{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,8,480,0,5000)}
	],
	"s-3203-1000-155-0": [{"type": "text","sub_type": "message","delay": 400,"message": "Dodge","message_RU": "Эвейд"}],

	// Stun 142 148 129
	"s-3203-1000-142-0": [{"type": "text","sub_type": "message","message": "Stun | Back wave","message_RU": "Стан | Волна назад"}],
	"s-3203-1000-148-0": [{"type": "func","func": SpawnCircle.bind(null,true,912,0,0,12,300,0,3000)}],
	"s-3203-1000-129-0": [{"type": "text","sub_type": "message","message": "Back wave","message_RU": "Волна назад (откид)"},
		{"type": "func","func": SpawnVector.bind(null,912,90,200,390,300,0,2000)},
		{"type": "func","func": SpawnVector.bind(null,912,90,140,380,350,0,2000)},
		{"type": "func","func": SpawnVector.bind(null,912,90,70,370,400,0,2000)},
		{"type": "func","func": SpawnVector.bind(null,912,90,0,0,400,0,2000)},
		{"type": "func","func": SpawnVector.bind(null,912,270,70,-370,400,0,2000)},
		{"type": "func","func": SpawnVector.bind(null,912,270,140,-380,350,0,2000)},
		{"type": "func","func": SpawnVector.bind(null,912,270,200,-390,300,0,2000)}
	],

	// Jump 143-0 143-1
	"s-3203-1000-143-0": [{"type": "text","sub_type": "message","message": "Jump (Stun)","message_RU": "Прыжок (стан)"}],
	"s-3203-1000-143-1": [{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,14,240,0,2000)}],

	// AoE 313 314
	"s-3203-1000-313-0": [{"type": "text","sub_type": "message","message": "AOE","message_RU": "AOE"}],
	"s-3203-1000-314-0": [{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,20,460,0,4000)}],

	// Debuff
	"ae-0-0-32031011": [{"type": "text","sub_type": "notification","message": "Debuff stack","message_RU": "Дебафф (стаки)"}],
	"am-3203-1000-32031011": [{"type": "text","sub_type": "notification","message": "Debuff stack","message_RU": "Дебафф (стаки)"}],
	"am-3203-1000-32031012": [{"type": "text","sub_type": "notification","message": "Debuff stack","message_RU": "Дебафф (стаки)"}],
};