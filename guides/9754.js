// Bathysmal Rise
//
// made by michengs / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"s-754-1000-1101-0": [{ type: "text", sub_type: "message", message_RU: "Лево", message: "Left" }],
		"s-754-1000-1102-0": [{ type: "text", sub_type: "message", message_RU: "Право", message: "Right" }],
		"s-754-1000-1103-0": [{ type: "text", sub_type: "message", message_RU: "Удар головой!", message: "Head Slam!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 200, 12, 275, 0, 4000] }
		],
		"s-754-1000-1105-0": [{ type: "text", sub_type: "message", message_RU: "К нему", message: "Get In" }],
		"s-754-1000-1106-0": [{ type: "text", sub_type: "message", message_RU: "Круг", message: "Random Circle" }],
		"s-454-1000-1108-0": [{ type: "text", sub_type: "message", message_RU: "Левая сторона", message: "Left Side" }],
		"s-454-1000-1109-0": [{ type: "text", sub_type: "message", message_RU: "Правая сторона", message: "Right Side" }],
		"s-754-1000-2101-0": "s-754-1000-1101-0",
		"s-754-1000-2102-0": "s-754-1000-1102-0",
		"s-754-1000-2103-0": "s-754-1000-1103-0",
		"s-754-1000-2105-0": "s-754-1000-1105-0",
		"s-754-1000-2106-0": "s-754-1000-1106-0",
		"s-454-1000-2108-0": "s-454-1000-1108-0",
		"s-454-1000-2109-0": "s-454-1000-1109-0",
		"s-754-1000-3101-0": [{ type: "text", sub_type: "message", message_RU: "Камни разрушены", message: "Rocks Destroyed" }],
		"s-754-1000-3103-0": [{ type: "text", sub_type: "message", message_RU: "Опрокинуть босса", message: "Knock Down Boss" }],

		// 2 BOSS
		//"s-754-1001-1101-0": [{ type: "text", sub_type: "message", message_RU: "Передняя", message: "Frontal Attack" }],
		//"s-754-1001-1102-0": [{ type: "text", sub_type: "message", message_RU: "Сальто назад (быстро)", message: "Back Flip (Fast)" }],
		"s-754-1001-1104-0": [{ type: "text", sub_type: "message", message_RU: "Передняя крутилка!", message: "Frontal Spin!" }],
		"s-754-1001-1105-0": [{ type: "text", sub_type: "message", message_RU: "Хвост", message: "Tail" }],
		"s-754-1001-1108-0": [{ type: "text", sub_type: "message", message_RU: "Яд", message: "Random Poison" }],
		"s-754-1001-1109-0": [{ type: "text", sub_type: "message", message_RU: "Притяжка + Яд", message: "Pull + Poison" },
			{ type: "text", sub_type: "message", "delay": 1500, message_RU: "Вспышка", message: "Flash" }
		],
		"s-754-1001-1110-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка! (медленно)", message: "Spin! (Slow)" }],
		"s-754-1001-1113-0": [{ type: "text", sub_type: "message", message_RU: "Лужа", message: "Slime Puddle" }],
		"s-754-1001-1111-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка с выпадом", message: "Spin Lunge Attack" }],
		"s-754-1001-2101-0": "s-754-1000-1101-0",
		"s-754-1001-2102-0": "s-754-1001-1102-0",
		"s-754-1001-2104-0": "s-754-1001-1104-0",
		"s-754-1001-2105-0": "s-754-1001-1105-0",
		"s-754-1001-2108-0": "s-754-1001-1108-0",
		"s-754-1001-2110-0": "s-754-1001-1110-0",
		"s-754-1001-2109-0": "s-754-1001-1109-0",
		"s-754-1001-2113-0": "s-754-1001-1113-0",
		"s-754-1001-2111-0": "s-754-1001-1111-0",

		"s-754-1001-3103-0": [{ type: "text", sub_type: "message", message_RU: "Опрокинуть босса", message: "Knock Down Boss" }],
		"s-754-1001-3105-0": [{ type: "text", sub_type: "message", message_RU: "Яд", message: "Poison" }],
		"s-754-1001-3102-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + Волна", message: "Big Jump + Wave" }],
		"s-754-403-1101-0": [{ type: "text", sub_type: "message", message_RU: "Водяная стена (разбить)", message: "Water Wall (Breake)" },
			{ type: "spawn", func: "marker", args: [false, 500, 180, 100, 9000] }
		],

		// 3 BOSS
		"s-754-1002-1102-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message: "Frontal Attack" }],
		"s-754-1002-1104-0": [{ type: "text", sub_type: "message", message_RU: "Бублик (внутрь)", message: "Donut (In)" }],
		"s-754-1002-1107-0": [{ type: "text", sub_type: "message", message_RU: "Задний удар (быстро)", message: "Back Hit! (Fast)" }],
		"s-754-1002-1108-0": [{ type: "text", sub_type: "message", message_RU: "Задний удар", message: "Back Hit" }],
		"s-754-1002-1112-0": [{ type: "text", sub_type: "message", message_RU: "Сальто (быстро)", message: "Jump (Fast)" }],
		"s-754-1002-1106-0": [{ type: "text", sub_type: "message", message_RU: "Левая атака", message: "Left Attack" }],
		"s-754-1002-1110-0": [{ type: "text", sub_type: "message", message_RU: "Шестерни", message: "Gear Sweep" }],
		"s-754-1002-2102-0": "s-754-1002-1102-0",
		"s-754-1002-2104-0": "s-754-1002-1104-0",
		"s-754-1002-2107-0": "s-754-1002-1107-0",
		"s-754-1002-2108-0": "s-754-1002-1108-0",
		"s-754-1002-2112-0": "s-754-1002-1112-0",
		"s-754-1002-2106-0": "s-754-1002-1106-0",
		"s-754-1002-2110-0": "s-754-1002-1110-0",

		"s-754-1002-3105-0": [{ type: "text", sub_type: "message", message_RU: "К нему", message: "Get In" }],
		"s-754-1002-3117-0": [{ type: "text", sub_type: "message", message_RU: "К нему - От него - К нему", message: "In - Out - In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 290, 0, 10000] }
		],
		"s-754-1002-3106-0": [{ type: "text", sub_type: "message", message_RU: "Резка завершена (выйти)", message: "Cut Completed (Get Out)" }],
		"s-754-1002-3113-0": [{ type: "text", sub_type: "message", message_RU: "СЛОМАТЬ ЩИТ", message: "BREAKE SHIELD" }],

		"s-754-1002-3119-0": [{ type: "text", sub_type: "message", message_RU: "Волна (на центр)", message: "Wave Attack (Go Center)" }],
		"qb-754-1002-754001": [{ type: "text", sub_type: "alert", message_RU: "Электрическая сфера", message: "Electric Ball" },
			{ type: "text", sub_type: "alert", "delay": 45000, message_RU: "Электрическая сфера готова", message: "Electric Ball Ready" }
		],
		// Special attacks
		"s-754-100-1101-0": [{ type: "text", sub_type: "notification", message_RU: "Сфера (держить дальше)", message: "Ball (Stay Away)" },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 100, 3000] }
		]
	};
};