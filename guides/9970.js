// Ruinous Manor (Hard)
//
// made by Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 3 BOSS
		"nd-970-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-970-3000-1102-0": [{ type: "text", sub_type: "message", message: "Left Hand", message_RU: "Левая рука" }],
		"s-970-3000-2102-0": [{ type: "text", sub_type: "message", message: "Left Hand", message_RU: "Левая рука" }],
		"s-970-3000-1101-0": [{ type: "text", sub_type: "message", message: "Right Hand", message_RU: "Правая рука" }],
		"s-970-3000-2101-0": [{ type: "text", sub_type: "message", message: "Right Hand", message_RU: "Правая рука" }],
		"s-970-3000-1103-0": [{ type: "text", sub_type: "message", message: "Tail Slam", message_RU: "Хвост" }],
		"s-970-3000-2103-0": [{ type: "text", sub_type: "message", message: "Tail Slam", message_RU: "Хвост" }],
		"s-970-3000-1301-0": [{ type: "text", sub_type: "message", message: "FATE Avoid Circles", message_RU: "Круги" }],
		"s-970-3000-1302-0": [{ type: "text", sub_type: "message", message: "FATE Avoid Circles", message_RU: "Круги" }],
		"s-970-3000-1106-0": [{ type: "text", sub_type: "message", message: "Front Swipe", message_RU: "Передний удар" }],
		"s-970-3000-2106-0": [{ type: "text", sub_type: "message", message: "Front Swipe", message_RU: "Передний удар" }],
		"s-970-3000-2110-0": [{ type: "text", sub_type: "message", message: "Tail AOE (jump in front)", message_RU: "Хвост АОЕ (прыгать вперед)" }],
		"s-970-3000-1110-0": [{ type: "text", sub_type: "message", message: "Tail AOE (jump in front)", message_RU: "Хвост АОЕ (прыгать вперед)" }],
		"s-970-3000-1304-0": [{ type: "text", sub_type: "message", message: "Get Ready! (for in out mechanic)", message_RU: "Готовность!" }],
		"s-970-3000-1303-0": [{ type: "text", sub_type: "message", message: "Get Ready! (for in out mechanic)", message_RU: "Готовность!" }],
		"s-970-3000-2113-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_RU: "От него > К нему" },
			{ type: "spawn_func", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-1113-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_RU: "От него > К нему" },
			{ type: "spawn_func", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-2116-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_RU: "К нему > От него" },
			{ type: "spawn_func", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-1116-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_RU: "К нему > От него" },
			{ type: "spawn_func", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] }
		],
		"s-970-3000-1318-0": [{ type: "text", sub_type: "message", message: "Get red skull!", message_RU: "Взять красную голову!" }],
		"s-970-3000-1317-0": [{ type: "text", sub_type: "message", message: "Get red skull!", message_RU: "Взять красную голову!" }],
		"s-970-3000-1319-0": [{ type: "text", sub_type: "message", message: "Get red skull!", message_RU: "Взять красную голову!" }],
		"s-970-3000-1322-0": [{ type: "text", sub_type: "message", message: "DODGE the PATTERNS!", message_RU: "Эвейд!" }],
		"s-970-3000-1311-0": [{ type: "text", sub_type: "message", message: "GATHER FOR CLEANSE!", message_RU: "Клинс!" }],
		"s-970-3000-1120-0": [{ type: "text", sub_type: "message", message: "Shooting skulls", message_RU: "Головы" }],
		"s-970-3000-2120-0": [{ type: "text", sub_type: "message", message: "Shooting skulls", message_RU: "Головы" }]
	};
};