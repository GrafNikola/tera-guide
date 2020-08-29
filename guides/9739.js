// Red Refuge
//
// made by multarix

const {SpawnVector, SpawnCircle} = require("../lib");

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	"s-739-1000-1105-0": [{"type": "text","sub_type": "message","message": "Turn + Breath","message_RU": "Поворот + дыхание"}],
	"s-739-1000-2105-0": [{"type": "text","sub_type": "message","message": "Turn + Breath","message_RU": "Поворот + дыхание"}],

	"s-739-1000-1308-0": [{"type": "text","sub_type": "message","message": "In > Out","message_RU": "К нему > От него"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,300,0,7500)}
	],
	"s-739-1000-1308-1": [{"type": "text","sub_type": "message","message": "Out","message_RU": "От него"}],
	"s-739-1000-1112-0": [{"type": "text","sub_type": "message","message": "Back spray","message_RU": "Волна назад"}],
	"s-739-1000-2112-0": [{"type": "text","sub_type": "message","message": "Back spray","message_RU": "Волна назад"}],
	"s-739-1000-1107-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "Прыжок"}],
	"s-739-1000-2107-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "Прыжок"}],
	"s-739-1000-1306-0": [{"type": "text","sub_type": "message","message": "Out > In","message_RU": "От него > К нему"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,300,0,7500)}
	],
	"s-739-1000-1306-1": [{"type": "text","sub_type": "message","message": "In","message_RU": "К нему"}],

	// 2 BOSS
	"s-739-2000-1105-0": [{"type": "text","sub_type": "message","message": "360","message_RU": "360"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,300,0,2500)},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,510,0,2500)}
	],
	"s-739-2000-2105-0": [{"type": "text","sub_type": "message","message": "360","message_RU": "360"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,300,0,2500)},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,510,0,2500)}
	],
	"s-739-2000-1113-0": [{"type": "text","sub_type": "message","message": "Stun","message_RU": "Стан"}],
	"s-739-2000-2113-0": [{"type": "text","sub_type": "message","message": "Stun","message_RU": "Стан"}],
	"s-739-2000-1108-0": [{"type": "text","sub_type": "message","message": "Clense","message_RU": "Клинс", "class_position": "heal"}],
	"s-739-2000-2108-0": [{"type": "text","sub_type": "message","message": "Clense","message_RU": "Клинс", "class_position": "heal"}],
	"s-739-2000-1115-0": [{"type": "text","sub_type": "message","message": "Whirlwind","message_RU": "Вихрь"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,360,0,6500)}
	],
	"s-739-2000-2115-0": [{"type": "text","sub_type": "message","message": "Whirlwind","message_RU": "Вихрь"},
	{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,360,0,6500)}
	],
	"s-739-2000-1119-0": [{"type": "text","sub_type": "message","message": "Front","message_RU": "Спереди"}],
	"s-739-2000-2119-0": [{"type": "text","sub_type": "message","message": "Front","message_RU": "Спереди"}],
	"s-739-2000-1120-0": [{"type": "text","sub_type": "message","message": "Back","message_RU": "Сзади"}],
	"s-739-2000-2120-0": [{"type": "text","sub_type": "message","message": "Back","message_RU": "Сзади"}],
	"s-739-2000-1303-0": [{"type": "text","sub_type": "message","message": "Whip","message_RU": "Кнут"}],
	"s-739-2000-2303-0": [{"type": "text","sub_type": "message","message": "Whip","message_RU": "Кнут"}],

	// 3 BOSS
	"h-739-3001-30": [{"type": "text","sub_type": "message","message": "Reveal soon","message_RU": "Скоро разоблачение"}],
	"s-739-3000-1201-0": [{"type": "text","sub_type": "message","delay": 3600,"message": "Dodge!","message_RU": "Эвейд!"}],
	"s-739-3000-2201-0": [{"type": "text","sub_type": "message","delay": 3600,"message": "Dodge!","message_RU": "Эвейд!"}],
	"s-739-3000-1107-0": [{"type": "text","sub_type": "message","message": "Many hits","message_RU": "Кнут"}],
	"s-739-3000-2107-0": [{"type": "text","sub_type": "message","message": "Many hits","message_RU": "Кнут"}],
	"s-739-3000-1115-0": [{"type": "text","sub_type": "message","delay": 1750,"message": "Dodge!","message_RU": "Эвейд!"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,630,0,4000)}
	],
	"s-739-3000-2115-0": [{"type": "text","sub_type": "message","delay": 1750,"message": "Dodge!","message_RU": "Эвейд!"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,630,0,4000)}
	],
	"s-739-3000-1118-0": [{"type": "text","sub_type": "message","message": "Spin","message_RU": "Крутилка"}],
	"s-739-3000-2118-0": [{"type": "text","sub_type": "message","message": "Spin","message_RU": "Крутилка"}],
	// Revealed Argog
	"s-739-3000-1167-0": [{"type": "text","sub_type": "message","message": "Many hits","message_RU": "Несколько ударов"}],
	"s-739-3000-2167-0": [{"type": "text","sub_type": "message","message": "Many hits","message_RU": "Несколько ударов"}],
	"s-739-3000-1175-0": [{"type": "text","sub_type": "message","delay": 1750,"message": "Dodge!","message_RU": "Эвейд!"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,630,0,4000)}
	],
	"s-739-3000-2175-0": [{"type": "text","sub_type": "message","delay": 1750,"message": "Dodge!","message_RU": "Эвейд!"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,10,630,0,4000)}
	],
	"s-739-3000-1178-0": [{"type": "text","sub_type": "message","message": "Spin","message_RU": "Крутилка"}],
	"s-739-3000-2178-0": [{"type": "text","sub_type": "message","message": "Spin","message_RU": "Крутилка"}]
};