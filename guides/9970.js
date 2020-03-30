// Ruinous Manor (Hard)

const {SpawnCircle} = require("../lib");

let player, entity, library, effect;

const FIRST_TIMER_DELAY = 40000;
const SECOND_TIMER_DELAY = 55000;
const EVENT_FOR_DEBUFFS = [
	{
		"type": "text",
		"sub_type": "message",
		"delay": FIRST_TIMER_DELAY,
		"message": "Debuff swap will happen soon",
		"message_RU": "Скоро смена дебаффа"
	},
	{
		"type": "text",
		"sub_type": "message",
		"delay": SECOND_TIMER_DELAY,
		"message": "Debuff swap will happen soon",
		"message_RU": "Скоро смена дебаффа"
	}
];

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS

	// Start(first debuff applied)
	// "ae-0-0-97000042": EVENT_FOR_DEBUFFS,
	// "ae-0-0-97000043": EVENT_FOR_DEBUFFS,
	// Debuff rotation happening
	//  "s-970-1000-1307":  ,
	// Meh, fill in with stop_timer id 1 below 70% hp, but cba


	// 2 BOSS

	"s-970-2000-2106-0": [{"type": "text","sub_type": "message","message_RU": "Стан","message": "STUN"}],


	// 3 BOSS

	"s-970-3000-1102-0": [{"type": "text","sub_type": "message","message_RU": "Левая рука","message": "Left Hand"}],
	"s-970-3000-2102-0": [{"type": "text","sub_type": "message","message_RU": "Левая рука","message": "Left Hand"}],

	// Right Hand
	"s-970-3000-1101-0": [{"type": "text","sub_type": "message","message_RU": "Правая рука","message": "Right Hand"}],
	"s-970-3000-2101-0": [{"type": "text","sub_type": "message","message_RU": "Правая рука","message": "Right Hand"}],

	// Tail Slam
	"s-970-3000-1103-0": [{"type": "text","sub_type": "message","message_RU": "Хвост","message": "Tail Slam"}],
	"s-970-3000-2103-0": [{"type": "text","sub_type": "message","message_RU": "Хвост","message": "Tail Slam"}],

	// FATE Avoid Circles
	"s-970-3000-1301-0": [{"type": "text","sub_type": "message","message_RU": "Круги","message": "FATE Avoid Circles"}],

	// Tail AOE (jump in front)
	"s-970-3000-2110-0": [{"type": "text","sub_type": "message","message_RU": "Хвост АОЕ (прыгать вперед)","message": "Tail AOE (jump in front)"}],
	"s-970-3000-1110-0": [{"type": "text","sub_type": "message","message_RU": "Хвост АОЕ (прыгать вперед)","message": "Tail AOE (jump in front)"}],

	// Get Ready! (for in out mechanic)
	"s-970-3000-1304-0": [{"type": "text","sub_type": "message","message_RU": "Готовность!","message": "Get Ready! (for in out mechanic)"}],
	"s-970-3000-1303-0": [{"type": "text","sub_type": "message","message_RU": "Готовность!","message": "Get Ready! (for in out mechanic)"}],

	// GO OUT then come in
	"s-970-3000-2113-0": [{"type": "text","sub_type": "message","message_RU": "ОТ НЕГО > К НЕМУ","message": "OUT -> IN"},{"type": "func","func": SpawnCircle.bind(null,553,0,0,15,300,0,5000)}],
	"s-970-3000-1113-0": [{"type": "text","sub_type": "message","message_RU": "ОТ НЕГО > К НЕМУ","message": "OUT -> IN"},{"type": "func","func": SpawnCircle.bind(null,553,0,0,15,300,0,5000)}],

	// STAY IN then go out
	"s-970-3000-2116-0": [{"type": "text","sub_type": "message","message_RU": "К НЕМУ > ОТ НЕГО","message": " IN -> OUT"},{"type": "func","func": SpawnCircle.bind(null,553,0,0,15,300,0,5000)}],
	"s-970-3000-1116-0": [{"type": "text","sub_type": "message","message_RU": "К НЕМУ > ОТ НЕГО","message": " IN -> OUT"},{"type": "func","func": SpawnCircle.bind(null,553,0,0,15,300,0,5000)}],

	// GET RED SKULL !!
	"s-970-3000-1318-0": [{"type": "text","sub_type": "message","message_RU": "Взять красную голову!","message": "GET RED SKULL!!"}],
	"s-970-3000-1317-0": [{"type": "text","sub_type": "message","message_RU": "Взять красную голову!","message": "GET RED SKULL!!"}],
	"s-970-3000-1319-0": [{"type": "text","sub_type": "message","message_RU": "Взять красную голову!","message": "GET RED SKULL!!"}],

	// DODGE the PATTERNS !
	"s-970-3000-1322-0": [{"type": "text","sub_type": "message","message_RU": "Эвейд!","message": "DODGE the PATTERNS!"}],

	// GATHER FOR CLEANSE ! !
	"s-970-3000-1311-0": [{"type": "text","sub_type": "message","message_RU": "Очищение","message": "GATHER FOR CLEANSE!"}]
};