// Ruinous Manor
//
// made by Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"nd-770-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-1000-1206-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_RU: "Прыжок назад" }],
		"s-770-1000-2206-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_RU: "Прыжок назад" }],
		"s-770-1000-1106-0": [{ type: "text", sub_type: "message", message: "Stun Frontal (Dodge)", message_RU: "Передний стан" }],
		"s-770-1000-2106-0": [{ type: "text", sub_type: "message", message: "Stun Frontal (Dodge)", message_RU: "Передний стан" }],
		"s-770-1000-1107-0": [{ type: "text", sub_type: "message", message: "Front Push", message_RU: "Передний удар" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		"s-770-1000-2107-0": [{ type: "text", sub_type: "message", message: "Front Push", message_RU: "Передний удар" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		"s-770-1000-1117-0": [{ type: "text", sub_type: "message", message: "Crush Front", message_RU: "Удары" }],
		"s-770-1000-2117-0": [{ type: "text", sub_type: "message", message: "Crush Front", message_RU: "Удары" }],

		// 2 BOSS
		"nd-770-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-2000-1103-0": [{ type: "text", sub_type: "message", message: "Frontal Attack", message_RU: "Передняя атака" }],
		"s-770-2000-2103-0": [{ type: "text", sub_type: "message", message: "Frontal Attack", message_RU: "Передняя атака" }],
		"s-770-2000-1105-0": [{ type: "text", sub_type: "message", message: "Random Target", message_RU: "Таргет" }],
		"s-770-2000-2105-0": [{ type: "text", sub_type: "message", message: "Random Target", message_RU: "Таргет" }],
		"s-770-2000-1106-0": [{ type: "text", sub_type: "message", message: "Stun (Dodge)", message_RU: "Стан (эвейд)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 13, 180, 0, 2000] }
		],
		"s-770-2000-2106-0": [{ type: "text", sub_type: "message", message: "Stun (Dodge)", message_RU: "Стан (эвейд)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 40, 13, 180, 0, 2000] }
		],
		"s-770-2000-1111-0": [{ type: "text", sub_type: "message", message: "Many Hits (Target)", message_RU: "Множество ударов (таргет)" }],
		"s-770-2000-2111-0": [{ type: "text", sub_type: "message", message: "Many Hits (Target)", message_RU: "Множество ударов (таргет)" }],

		// 3 BOSS
		"nd-770-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-3000-1102-0": [{ type: "text", sub_type: "message", message: "Left Hand", message_RU: "Левая рука" }],
		"s-770-3000-2102-0": [{ type: "text", sub_type: "message", message: "Left Hand", message_RU: "Левая рука" }],
		"s-770-3000-1101-0": [{ type: "text", sub_type: "message", message: "Right Hand", message_RU: "Правая рука" }],
		"s-770-3000-2101-0": [{ type: "text", sub_type: "message", message: "Right Hand", message_RU: "Правая рука" }],
		"s-770-3000-1103-0": [
			{ type: "text", sub_type: "message", message: "Tail Slam", message_RU: "Хвост" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] }
		],
		"s-770-3000-2103-0": [
			{ type: "text", sub_type: "message", message: "Tail Slam", message_RU: "Хвост" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] }
		],
		"s-770-3000-1301-0": [{ type: "text", sub_type: "message", message: "Circles", message_RU: "Круги" }],
		"s-770-3000-2301-0": [{ type: "text", sub_type: "message", message: "Circles", message_RU: "Круги" }],
		"s-770-3000-1106-0": [{ type: "text", sub_type: "message", message: "Front Swipe", message_RU: "Передний удар" }],
		"s-770-3000-2106-0": [{ type: "text", sub_type: "message", message: "Front Swipe", message_RU: "Передний удар" }],
		"s-770-3000-1110-0": [
			{ type: "text", sub_type: "message", message: "Tail AOE (jump in front)", message_RU: "Хвост АОЕ (прыгать вперед)" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }
		],
		"s-770-3000-2110-0": [
			{ type: "text", sub_type: "message", message: "Tail AOE (jump in front)", message_RU: "Хвост АОЕ (прыгать вперед)" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }
		],
		"s-770-3000-1304-0": [{ type: "text", sub_type: "message", message: "Get Ready!", message_RU: "Готовность!" }],
		"s-770-3000-1303-0": [{ type: "text", sub_type: "message", message: "Get Ready!", message_RU: "Готовность!" }],
		"s-770-3000-1113-0": [
			{ type: "text", sub_type: "alert", message: "Out", message_RU: "От него" },
			{ type: "text", sub_type: "message", message: "In", message_RU: "К нему", delay: 1300 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 300, 0, 5000] }
		],
		"s-770-3000-1116-0": [
			{ type: "text", sub_type: "alert", message: "In", message_RU: "К нему" },
			{ type: "text", sub_type: "message", message: " Out", message_RU: "От него", delay: 1300 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 300, 0, 5000] }
		],
		"s-770-3000-1108-0": [
			{ type: "text", sub_type: "message", message: "Tail", message_RU: "Удар хвостом" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],
		"s-770-3000-2108-0": [
			{ type: "text", sub_type: "message", message: "Tail", message_RU: "Удар хвостом" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],
		"s-770-3000-1322-0": [
			{ type: "text", sub_type: "message", message: "Dodge!", message_RU: "Эвейд!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 230, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 430, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 630, 0, 5000] }
		],
		"s-770-3000-1311-0": [{ type: "text", sub_type: "message", message: "Gather for Cleanse!", message_RU: "Клинс!" }],
		"s-770-3000-1120-0": [{ type: "text", sub_type: "message", message: "Shooting Skulls (Triple)", message_RU: "Лазеры (тройные)" }],
		"s-770-3000-2120-0": [{ type: "text", sub_type: "message", message: "Shooting Skulls (Triple)", message_RU: "Лазеры (тройные)" }],
		"s-770-3000-1121-0": [{ type: "text", sub_type: "message", message: "Shooting Skulls (Doble)", message_RU: "Лазеры (двойные)" }],
		"s-770-3000-2121-0": [{ type: "text", sub_type: "message", message: "Shooting Skulls (Doble)", message_RU: "Лазеры (двойные)" }]
	};
};