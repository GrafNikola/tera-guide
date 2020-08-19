// Draakon Arena
//
// made by Kuroine / HSDN

let player, entity, library, effect;

const {SpawnMarker, SpawnVector, SpawnCircle, SpawnSemicircle} = require("../lib");

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// Ress bait / range check
	"s-3102-1000-107-0": [{"type": "text","sub_type": "message","message": 'Spectral throw (Bait)',"message_RU": "Спектральный бросок (байт)"}],

	// Basic attacks
	"s-3102-1000-103-0": [{"type": "text","sub_type": "message","message": '2 Hits | Bleed',"message_RU": "2 удара | Кровоток"}],
	"s-3102-1000-113-0": [{"type": "text","sub_type": "message","message": '4 Hits Combo',"message_RU": "4 удара комба"}],
	"s-3102-1000-105-0": [{"type": "text","sub_type": "message","message": 'Uppercut | Stun',"message_RU": "Удар снизу | Стан"}],
	"s-3102-1000-106-0": [{"type": "text","sub_type": "message","message": 'Stun',"message_RU": "Стан"},
		{"type": "func","func": SpawnCircle.bind(null,true,553,0,20,8,200,100,2000)}
	],
	// 120 > 114
	"s-3102-1000-120-0": [{"type": "text","sub_type": "message","message": 'Many Pokes | Stun',"message_RU": "Несколько ударов | Стан"}],
	"s-3102-1000-114-0": [{"type": "text","sub_type": "message","message": 'Stun (AOE)',"message_RU": "Стан (AOE)"},
		{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,12,420,0,3000)}
	],
	"s-3102-1000-111-0": [{"type": "text","sub_type": "message","message": 'Leap (Stun)',"message_RU": "Прыжок (стан)"},
		//{"type": "func","func": SpawnCircle.bind(null,true,553,0,0,12,300,0,2000)}
	],
	"s-3102-1000-115-0": [{"type": "text","sub_type": "message","message": 'AOE Bombs (gather)',"message_RU": "AOE бомбы (вместе)"},
		{"type": "text","sub_type": "message","delay": 3000,"message": 'Gather!',"message_RU": "Собраться!"}
	],
	"s-3102-1000-112-0": [{"type": "text","sub_type": "message","message": 'Front-Back Kick',"message_RU": "Разворот | Удар назад"},
		{"type": "func","func": SpawnVector.bind(null,553,90,120,160,300,0,3000)},
		{"type": "func","func": SpawnVector.bind(null,553,270,120,-160,300,0,3000)}
	],
	"s-3102-1000-110-0": [{"type": "text","sub_type": "message","message": 'Jump (In-out-wave)',"message_RU": "Прыжок | Волны"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,8,650,0,4000)}
	],
	"s-3102-1000-109-0": [{"type": "text","sub_type": "message","message": 'Knockdown | Spin',"message_RU": "Удар | Крутилка"},
		{"type": "func","func": SpawnCircle.bind(null,true,553,0,100,10,420,0,1000)},
		{"type": "func","func": SpawnCircle.bind(null,true,553,0,150,10,420,1000,2000)}
	],
	"s-3102-1000-304-0": [{"type": "text","sub_type": "message","message": 'Shield!',"message_RU": "ЩИТ!"}],
	"ab-3102-1000-31021006": [{"type": "text","sub_type": "message","message": 'Plague/Regress',"message_RU": "Чума/регресс"}],

	// Pizza boi
	"s-3102-1000-121-0": [{"type": "text","sub_type": "message","message": 'Right Foot',"message_RU": "Правая нога"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,50,8,550,0,5000)},
		{"type": "func","func": SpawnSemicircle.bind(null,130,250,912,0,50,8,450,0,3900)},
		{"type": "func","func": SpawnSemicircle.bind(null,-50,65,912,0,50,8,450,0,3900)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,245,450,0,3900)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,305,450,0,3900)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,65,450,0,3900)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,125,450,0,3900)},
		{"type": "text","sub_type": "message","delay": 1900,"message": 'Dodge!',"message_RU": "Эвейд!"}
	],
	"s-3102-1000-122-0": [{"type": "text","sub_type": "message","message": 'Front + Back',"message_RU": "Передняя + задняя"},
		{"type": "func","func": SpawnMarker.bind(null,false,0,200,500,3000,true,null)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,295,550,500,2500)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,85,550,500,2500)},
		{"type": "func","func": SpawnSemicircle.bind(null,85,295,912,0,50,6,550,500,2500)}
	],
	"s-3102-1000-123-0": [{"type": "text","sub_type": "message","message": 'Back',"message_RU": "Задняя"}],
	//
	"s-3102-1000-124-0": [{"type": "text","sub_type": "message","message": 'Left Foot',"message_RU": "Левая нога"},
		{"type": "func","func": SpawnCircle.bind(null,false,553,0,50,8,550,0,5000)},
		{"type": "func","func": SpawnSemicircle.bind(null,130,250,912,0,50,8,450,0,3900)},
		{"type": "func","func": SpawnSemicircle.bind(null,-50,65,912,0,50,8,450,0,3900)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,245,450,0,3900)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,305,450,0,3900)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,65,450,0,3900)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,125,450,0,3900)},
		{"type": "text","sub_type": "message","delay": 1900,"message": 'Dodge!',"message_RU": "Эвейд!"}
	],
	"s-3102-1000-125-0": [{"type": "text","sub_type": "message","message": 'Front + Back',"message_RU": "Передняя + задняя"},
		{"type": "func","func": SpawnMarker.bind(null,false,0,200,500,3000,true,null)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,295,550,500,2500)},
		{"type": "func","func": SpawnVector.bind(null,912,0,50,85,550,500,2500)},
		{"type": "func","func": SpawnSemicircle.bind(null,85,295,912,0,50,6,550,500,2500)}
	],
	"s-3102-1000-126-0": [{"type": "text","sub_type": "message","message": 'Back',"message_RU": "Задняя"}]
};