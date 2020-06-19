// Draakon  Arena
//
// made by Kuroine

let player, entity, library, effect;

const {SpawnItem, SpawnVector, SpawnCircle} = require("../lib");

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	//RESS Bait //Range Check
	"s-3102-1000-107-0": [{"type": "text","sub_type": "message","message": 'Spectral Throw',"message_RU": "Спектральный бросок"}],

	//Basic Attacks
	"s-3102-1000-103-0": [{"type": "text","sub_type": "message","message": '2 Hits > Bleed',"message_RU": "2 удара комба (кровоток)"}],
	"s-3102-1000-113-0": [{"type": "text","sub_type": "message","message": '4 Hits Combo',"message_RU": "4 удара комба"}],
	"s-3102-1000-105-0": [{"type": "text","sub_type": "message","message": 'Uppercut > Stun (INC)',"message_RU": "Передний стан"}],
	"s-3102-1000-106-0": [{"type": "text","sub_type": "message","message": 'Stun',"message_RU": "Стан"}],

	"s-3102-1000-120-0": [{"type": "text","sub_type": "message","message": 'Many Pokes > Stun',"message_RU": "Стан 120"}],
	"s-3102-1000-114-0": [{"type": "text","sub_type": "message","message": 'Stun (AOE)',"message_RU": "Стан (AOE)"}],
	
	//Leap
	"s-3102-1000-111-0": [{"type": "text","sub_type": "message","message": 'Leap (Stun)',"message_RU": "Прыжок (стан)"}],

	"s-3102-1000-115-0": [{"type": "text","sub_type": "message","message": 'AOE Bombs (SPREAD IF NO NINJA)',"message_RU": "AOE бомбы"},
						 {"type": "text","sub_type": "message","delay": 3000,"message": 'Gather!',"message_RU": "Собраться!"}],

	"s-3102-1000-112-0": [{"type": "text","sub_type": "message","message": 'Front-Back Kick',"message_RU": "Удар спереди"}],

	"s-3102-1000-110-0": [{"type": "text","sub_type": "message","message": 'Jump (In-out-wave)',"message_RU": "Прыжок (к-от волна)"}],

	"s-3102-1000-109-0": [{"type": "text","sub_type": "message","message": 'Knockdown-Spin',"message_RU": "Удар - Крутилка"},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,0,0,12,457,0,5000)}],
	
	"s-3102-1000-304-0": [{"type": "text","sub_type": "message","message": 'Shield!',"message_RU": "ЩИТ!"}],
	"ab-3102-1000-31021006": [{"type": "text","sub_type": "message","message": 'Plague/Regress',"message_RU": "Чума/регресс"}],

	// Pizza Boi
	"s-3102-1000-121-0": [{"type": "text","sub_type": "message","message": 'Right Foot - incoming Stomp',"message_RU": "Правая нога - входящий удар"},
						 // LEFT MARKERS
						 {"type": "func","func": SpawnVector.bind(null,912,0,0,255,400,0,4000)},
						 {"type": "func","func": SpawnVector.bind(null,912,0,0,295,400,0,4000)},
						 // RIGHT MARKERS
						 {"type": "func","func": SpawnVector.bind(null,912,0,0,75,400,0,4000)},
						 {"type": "func","func": SpawnVector.bind(null,912,0,0,115,400,0,4000)},
						 {"type": "text","sub_type": "message","delay": 1900,"message": 'Dodge!',"message_RU": "Эвейд!"}],
	"s-3102-1000-122-0": [{"type": "text","sub_type": "message","message": 'Front-back pizza',"message_RU": "Пицца спереди назад"},
						 {"type": "func","func": SpawnItem.bind(null,89544,0,200,100,4000)}],
	"s-3102-1000-123-0": [{"type": "text","sub_type": "message","message": 'Back pizza',"message_RU": "Задняя пицца"}],

	"s-3102-1000-124-0": [{"type": "text","sub_type": "message","message": 'Left Foot - incoming Stomp',"message_RU": "Левая нога - входящий удар"},
						// LEFT MARKERS
						{"type": "func","func": SpawnVector.bind(null,912,0,0,255,400,0,4000)},
						{"type": "func","func": SpawnVector.bind(null,912,0,0,295,400,0,4000)},
						// RIGHT MARKERS
						{"type": "func","func": SpawnVector.bind(null,912,0,0,75,400,0,4000)},
						{"type": "func","func": SpawnVector.bind(null,912,0,0,115,400,0,4000)},
						 {"type": "text","sub_type": "message","delay": 1900,"message": 'Dodge!',"message_RU": "Эвейд"}],
	"s-3102-1000-125-0": [{"type": "text","sub_type": "message","message": 'Front-back pizza',"message_RU": "Пицца спереди назад"},
						 {"type": "func","func": SpawnItem.bind(null,89544,0,200,100,4000)}],
	"s-3102-1000-126-0": [{"type": "text","sub_type": "message","message": 'Back pizza',"message_RU": "Задняя пицца"}]
};