// Draakon Arena (Hard)
//
// made by Kuroine

let player, entity, library, effect;

const {HIGHLIGHT_ITEM_RED, SpawnItem, SpawnVector, SpawnCircle} = require("../lib");

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// RESS Bait //Range Check
	"s-3202-1000-107-0": [{"type": "text","sub_type": "message","message": 'Spectral Throw',"message_RU": "Спектральный бросок"}],

	// Basic Attacks
	"s-3202-1000-103-0": [{"type": "text","sub_type": "message","message": '2 Hits | Bleed',"message_RU": "2 удара | Кровоток"}],
	"s-3202-1000-113-0": [{"type": "text","sub_type": "message","message": '4 Hits Combo',"message_RU": "4 удара комба"}],
	"s-3202-1000-105-0": [{"type": "text","sub_type": "message","message": 'Uppercut | Stun (INC)',"message_RU": "Передний стан"}],
	"s-3202-1000-106-0": [{"type": "text","sub_type": "message","message": 'Stun',"message_RU": "Стан"}],

	"s-3202-1000-120-0": [{"type": "text","sub_type": "message","message": 'Many Pokes | Stun',"message_RU": "Несколько ударов | Стан"}],
	"s-3202-1000-114-0": [{"type": "text","sub_type": "message","message": 'Stun (AOE)',"message_RU": "Стан (AOE)"}],

	// Leap
	"s-3202-1000-111-0": [{"type": "text","sub_type": "message","message": 'Leap (Stun)',"message_RU": "Прыжок (стан)"}],

	"s-3202-1000-115-0": [{"type": "text","sub_type": "message","message": 'AOE Bombs (SPREAD IF NO NINJA)',"message_RU": "AOE бомбы"},
						 {"type": "text","sub_type": "message","delay": 3000,"message": 'Gather!',"message_RU": "Собраться!"}],

	"s-3202-1000-112-0": [{"type": "text","sub_type": "message","message": 'Front-Back Kick',"message_RU": "Удар спереди"}],

	"s-3202-1000-110-0": [{"type": "text","sub_type": "message","message": 'Jump (In-out-wave)',"message_RU": "Прыжок (к-от волна)"}],

	"s-3202-1000-109-0": [{"type": "text","sub_type": "message","message": 'Knockdown-Spin',"message_RU": "Удар - Крутилка"},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,457,0,5000)}],
	
	"s-3202-1000-304-0": [{"type": "text","sub_type": "message","message": 'Shield!',"message_RU": "ЩИТ!"}],
	"ab-3202-1000-32021006": [{"type": "text","sub_type": "message","message": 'Plague/Regress',"message_RU": "Чума/регресс"}],

	// Pizza Boi
	"s-3202-1000-121-0": [{"type": "text","sub_type": "message","message": 'Right Foot | IN (OUT waves)',"message_RU": "Правая нога | К НЕМУ (волны ОТ)"},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,707,0,5000)},
						 // LEFT MARKERS
						 {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,707,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,912,0,0,245,400,0,4000)},
						 {"type": "func","func": SpawnVector.bind(null,912,0,0,305,400,0,4000)},
						 // RIGHT MARKERS
						 {"type": "func","func": SpawnVector.bind(null,912,0,0,65,400,0,4000)},
						 {"type": "func","func": SpawnVector.bind(null,912,0,0,125,400,0,4000)},
						 {"type": "text","sub_type": "message","delay": 1900,"message": 'Dodge!',"message_RU": "Эвейд!"}],
	"s-3202-1000-122-0": [{"type": "text","sub_type": "message","message": 'Front-back pizza',"message_RU": "Пицца спереди назад"},
						 {"type": "func","func": SpawnItem.bind(null,HIGHLIGHT_ITEM_RED,0,200,100,4000)}],
	"s-3202-1000-123-0": [{"type": "text","sub_type": "message","message": 'Back pizza',"message_RU": "Задняя пицца"},
						 {"type": "text","sub_type": "message","delay":100,"message": 'IN (OUT waves)',"message_RU": "К НЕМУ (волны ОТ)"}],
						//127
	"s-3202-1000-127-0": [{"type": "text","sub_type": "message","message": 'IN (OUT waves)',"message_RU": "К НЕМУ (волны ОТ)"},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,18,157,0,5000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,307,0,5000)}],

	"s-3202-1000-124-0": [{"type": "text","sub_type": "message","message": 'Left Foot | OUT (IN waves)',"message_RU": "Левая нога | ОТ НЕГО (волны К)"},
						{"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,707,0,5000)},
						// LEFT MARKERS
						{"type": "func","func": SpawnVector.bind(null,912,0,0,245,400,0,4000)},
						{"type": "func","func": SpawnVector.bind(null,912,0,0,305,400,0,4000)},
						// RIGHT MARKERS
						{"type": "func","func": SpawnVector.bind(null,912,0,0,65,400,0,4000)},
						{"type": "func","func": SpawnVector.bind(null,912,0,0,125,400,0,4000)},
						{"type": "text","sub_type": "message","delay": 1900,"message": 'Dodge!',"message_RU": "Эвейд!"}],
	"s-3202-1000-125-0": [{"type": "text","sub_type": "message","message": 'Front-back pizza',"message_RU": "Пицца спереди назад"},
	  					 {"type": "func","func": SpawnItem.bind(null,HIGHLIGHT_ITEM_RED,0,200,100,4000)}],
	"s-3202-1000-126-0": [{"type": "text","sub_type": "message","message": 'Back pizza',"message_RU": "Задняя пицца"},
						{"type": "text","sub_type": "message","delay":100,"message": 'OUT (IN waves)',"message_RU": "ОТ НЕГО (волны К)"}],
						//128
	"s-3202-1000-128-0": [{"type": "text","sub_type": "message","message": 'OUT (IN waves)',"message_RU": "ОТ НЕГО (волны К)"},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,18,143,0,5000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,293,0,5000)}]
};