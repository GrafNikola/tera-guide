// Desolarus Testing Grounds
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		"nd-3107-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// "s-3107-1000-101-0": [{ type: "text", sub_type: "message", message: "Wide Attack", message_RU: "Полосы" }],
		// "s-3107-1000-102-0": [{ type: "text", sub_type: "message", message: "Wide Attack", message_RU: "Полосы" }],
		// "s-3107-1000-106-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Передние" }],
		// "s-3107-1000-107-0": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Задние" }],
		// "s-3107-1000-108-0": [{ type: "text", sub_type: "message", message: "Right", message_RU: "Правые" }],
		// "s-3107-1000-109-0": [{ type: "text", sub_type: "message", message: "Left", message_RU: "Левые" }],
		"s-3107-1000-112-0": [{ type: "text", sub_type: "message", message: "Inner + Outer Bombs", message_RU: "Ближние + дальние бомбы" }],
		"s-3107-1000-113-0": [{ type: "text", sub_type: "message", message: "Inner Bombs", message_RU: "Ближние бомбы" }],
		"s-3107-1000-302-0": [{ type: "text", sub_type: "message", message: "Shield", message_RU: "Щит" }], // 302 -> 303 / 304 -> 305
		"s-3107-1000-304-0": [{ type: "text", sub_type: "message", message: "Break Failure", message_RU: "Щит не пробит" }],
		"s-3107-1000-310-0": [{ type: "text", sub_type: "message", message: "Break Stones", message_RU: "Разбить пилоны" }], // spawn ghosts
		"s-3107-1000-311-0": [{ type: "text", sub_type: "message", message: "Break Stones", message_RU: "Разбить пилоны" }],
		"s-3107-1000-320-0": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_RU: "Пицца (откид)" }], // half forward
		"s-3107-1000-321-0": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_RU: "Пицца (откид)" }], // half reverse
		"s-3107-1000-322-0": [{ type: "text", sub_type: "message", message: "Pizza Spin (Pushback)", message_RU: "Пицца по кругу (откид)" }], // spin forward
		"s-3107-1000-323-0": [{ type: "text", sub_type: "message", message: "Pizza Spin (Pushback)", message_RU: "Пицца по кругу (откид)" }], // spin reverse
		"s-3107-1000-336-0": [{ type: "text", sub_type: "message", message: "180 (Front)", message_RU: "Полукруг (спереди)" }],
		"s-3107-1000-337-0": [{ type: "text", sub_type: "message", message: "180 (Right)", message_RU: "Полукруг (справа)" }],
		"s-3107-1000-338-0": [{ type: "text", sub_type: "message", message: "180 (Back)", message_RU: "Полукруг (сзади)" }],
		"s-3107-1000-339-0": [{ type: "text", sub_type: "message", message: "180 (Left)", message_RU: "Полукруг (слева)" }],
		"s-3107-1000-370-0": [{ type: "text", sub_type: "message", message: "Cross (Target)", message_RU: "Кресты (таргет)" }],

		"qb-3107-1000-31070003": [{ type: "text", sub_type: "message", message: "Circles (Target) | Dodge", message_RU: "Круги (таргет) | Эвейд" }],
		"qb-3107-1000-31070010": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_RU: "Пицца (откид)" }] // 324 - 335
	};
};