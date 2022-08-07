// Bathysmal Rise (Hard)
//
// made by michengs / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"s-454-1000-1101-0": [{ type: "text", sub_type: "message", message_RU: "Лево", message: "Left" }],
		"s-454-1000-1102-0": [{ type: "text", sub_type: "message", message_RU: "Право", message: "Right" }],
		"s-454-1000-1103-0": [{ type: "text", sub_type: "message", message_RU: "Удар головой!", message: "Head Slam!" }, //
			{ type: "spawn", func: "circle", args: [false, 553, 0, 200, 12, 275, 0, 4000] }
		],
		"s-454-1000-1104-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка (медленно)", message: "Spin get out (Slow)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 200, 0, 5000] }
		],
		"s-454-1000-1105-0": [{ type: "text", sub_type: "message", message_RU: "К нему", message: "Get In" }],
		"s-454-1000-1106-0": [{ type: "text", sub_type: "message", message_RU: "Круг", message: "Random Circle" }], //
		"s-454-1000-1107-0": [{ type: "text", sub_type: "message", message_RU: "Действие", message: "Action Turtle" }],
		"s-454-1000-1108-0": [{ type: "text", sub_type: "message", message_RU: "Левая сторона", message: "left side" }],
		"s-454-1000-1109-0": [{ type: "text", sub_type: "message", message_RU: "Правая сторона", message: "right side" }],
		"s-454-1000-1201-0": [{ type: "text", sub_type: "message", message_RU: "Бросок!", message: "Body Slam!" }],
		"s-454-1000-1202-0": [{ type: "text", sub_type: "message", message_RU: "Призыв черепах", message: "Turtles Summon" }],
		"s-454-1000-1203-0": [{ type: "text", sub_type: "message", message_RU: "Головокружение, прыжок", message: "Dizzy, Jump" }],
		"s-454-1000-1204-0": [{ type: "text", sub_type: "message", message_RU: "Напоминание", message: "Turtle Mode Reminder" }],
		"s-454-1000-1205-0": [{ type: "text", sub_type: "message", message_RU: "Побег черепахи", message: "Scape Turtle" }],
		"s-454-1000-1206-0": [{ type: "text", sub_type: "message", message_RU: "Кислотная атмосфера", message: "Acid Atmosphere" }],
		"s-454-1000-2101-0": "s-454-1000-1101-0",
		"s-454-1000-2102-0": "s-454-1000-1102-0",
		"s-454-1000-2103-0": "s-454-1000-1103-0",
		"s-454-1000-2104-0": "s-454-1000-1104-0",
		"s-454-1000-2105-0": "s-454-1000-1105-0",
		"s-454-1000-2106-0": "s-454-1000-1106-0",
		"s-454-1000-2107-0": "s-454-1000-1107-0",
		"s-454-1000-2108-0": "s-454-1000-1108-0",
		"s-454-1000-2109-0": "s-454-1000-1109-0",
		"s-454-1000-2201-0": "s-454-1000-1201-0",
		"s-454-1000-2202-0": "s-454-1000-1202-0",
		"s-454-1000-2203-0": "s-454-1000-1203-0",
		"s-454-1000-2204-0": "s-454-1000-1204-0",
		"s-454-1000-2205-0": "s-454-1000-1205-0",
		"s-454-1000-2206-0": "s-454-1000-1206-0",
		"s-454-1000-3101-0": [{ type: "text", sub_type: "message", message_RU: "Камни разрушены", message: "Rocks Destroyed" }],
		"s-454-1000-3102-0": [{ type: "text", sub_type: "message", message_RU: "Кислотная рвота", message: "Random Acid Puke" }], //
		"s-454-1000-3103-0": [{ type: "text", sub_type: "message", message_RU: "Опрокинуть босса", message: "Knock Down Boss" }],
		"s-454-1000-3104-0": [{ type: "text", sub_type: "message", message_RU: "СЛОМАТЬ ЩИТ!", message: "BREAKE SHIELD!" }],

		// 2 BOSS
		//"s-454-1001-1101-0": [{ type: "text", sub_type: "message", message_RU: "Передняя", message: "Frontal Attack" }],
		//"s-454-1001-1102-0": [{ type: "text", sub_type: "message", message_RU: "Сальто назад (быстро)", message: "Back Flip (Fast)" }],
		"s-454-1001-1104-0": [{ type: "text", sub_type: "message", message_RU: "Передняя крутилка!", message: "Frontal Spin!" }],
		"s-454-1001-1105-0": [{ type: "text", sub_type: "message", message_RU: "Хвост", message: "Tail" }],
		"s-454-1001-1108-0": [{ type: "text", sub_type: "message", message_RU: "Яд", message: "Random Poison" }],
		"s-454-1001-1109-0": [{ type: "text", sub_type: "message", message_RU: "Притяжка + Яд", message: "Pull + Poison" },
			{ type: "text", sub_type: "message", "delay": 1500, message_RU: "Вспышка", message: "Flash" }
		],
		"s-454-1001-1110-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка! (медленно)", message: "Spin! (Slow)" }],
		"s-454-1001-1113-0": [{ type: "text", sub_type: "message", message_RU: "Лужа", message: "Slime Puddle" }],
		"s-454-1001-1111-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка с выпадом", message: "Spin Lunge Attack" }],
		"s-454-1001-2101-0": "s-454-1000-1101-0",
		//"s-454-1001-2102-0": "s-454-1001-1102-0",
		"s-454-1001-2104-0": "s-454-1001-1104-0",
		"s-454-1001-2105-0": "s-454-1001-1105-0",
		"s-454-1001-2108-0": "s-454-1001-1108-0",
		"s-454-1001-2110-0": "s-454-1001-1110-0",
		"s-454-1001-2109-0": "s-454-1001-1109-0",
		"s-454-1001-2113-0": "s-454-1001-1113-0",
		"s-454-1001-2111-0": "s-454-1001-1111-0",
		"s-454-1001-3103-0": [{ type: "text", sub_type: "message", message_RU: "Опрокинуть босса", message: "Knock Down Boss" }],
		"s-454-1001-3105-0": [{ type: "text", sub_type: "message", message_RU: "Яд", message: "Poison" }],
		"s-454-1001-3102-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + Волна", message: "Big Jump + Wave" }],
		"s-454-403-1101-0": [{ type: "text", sub_type: "message", message_RU: "Водяная стена (разбить)", message: "Water Wall (Breake)" },
			{ type: "spawn", func: "marker", args: [false, 500, 180, 100, 9000] }
		],

		// 3BOSS
		"s-454-1002-1102-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message: "Frontal Attack" }],
		"s-454-1002-1103-0": [{ type: "text", sub_type: "message", message_RU: "Таргет", message: "Random Target" }],
		"s-454-1002-1104-0": [{ type: "text", sub_type: "message", message_RU: "Бублик (внутрь)", message: "Donut (In)" }],
		"s-454-1002-1107-0": [{ type: "text", sub_type: "message", message_RU: "Задний удар (быстро)", message: "Back Hit! (Fast)" }],
		"s-454-1002-1108-0": [{ type: "text", sub_type: "message", message_RU: "Задний удар", message: "Back Hit" }],
		"s-454-1002-1112-0": [{ type: "text", sub_type: "message", message_RU: "Сальто (быстро)", message: "Jump (Fast)" }],
		"s-454-1002-1106-0": [{ type: "text", sub_type: "message", message_RU: "Левая атака", message: "Left Attack" }],
		"s-454-1002-1110-0": [{ type: "text", sub_type: "message", message_RU: "Шестерни", message: "Gear Sweep" }],
		"s-454-1002-2102-0": "s-454-1002-1102-0",
		"s-454-1002-2103-0": "s-454-1002-1103-0",
		"s-454-1002-2104-0": "s-454-1002-1104-0",
		"s-454-1002-2107-0": "s-454-1002-1107-0",
		"s-454-1002-2108-0": "s-454-1002-1108-0",
		"s-454-1002-2112-0": "s-454-1002-1112-0",
		"s-454-1002-2106-0": "s-454-1002-1106-0",
		"s-454-1002-2110-0": "s-454-1002-1110-0",
		"s-454-1002-3105-0": [{ type: "text", sub_type: "message", message_RU: "К нему", message: "Get In" }],
		"s-454-1002-3117-0": [{ type: "text", sub_type: "message", message_RU: "К нему", message: "In" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 290, 0, 10000] },
			{ type: "text", sub_type: "message", message_RU: "От него", message: "Out", delay: 3500 },
			{ type: "text", sub_type: "message", message_RU: "К нему", message: "In", delay: 5500 }
		],
		"s-454-1002-3110-0": [{ type: "text", sub_type: "message", message_RU: "Пицца", message: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 30, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 90, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 150, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 210, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 270, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 330, 201, 100, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 0, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 120, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 180, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 240, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 201, 2000, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 30, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 90, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 150, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 210, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 270, 201, 4000, 6000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 330, 201, 4000, 6000, true, null] }
		],
		"s-454-1002-3106-0": [{ type: "text", sub_type: "message", message_RU: "Резка завершена (выйти)", message: "Cut Completed (Get Out)" }],
		"s-454-1002-3113-0": [{ type: "text", sub_type: "message", message_RU: "СЛОМАТЬ ЩИТ!", message: "BREAKE SHIELD!" }],
		"s-454-1002-3115-0": [{ type: "text", sub_type: "message", message_RU: "Взрывной режим 25%", message: "25% Blast Mode" }],
		"s-454-1002-3119-0": [{ type: "text", sub_type: "message", message_RU: "Волна (на центр)", message: "Wave Attack (Go Center)" }],
		"qb-454-1002-454001": [{ type: "text", sub_type: "alert", message_RU: "Электрическая сфера", message: "Electric Ball" },
			{ type: "text", sub_type: "alert", "delay": 45000, message_RU: "Электрическая сфера готова", message: "Electric Ball Ready" }
		],
		// Special attacks
		"qb-454-402-454008": [{ type: "text", sub_type: "message", message_RU: "Атака водной волной", message: "Water Wave Attack" },
			{ type: "text", sub_type: "notification", "delay": 70000, message_RU: "Скоро атака водной волной", message: "Water Wave Attack Soon" },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 90, 1300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 180, 1300, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 1300, 0, 4000] }
		],
		"qb-454-1000-454012": [{ type: "text", sub_type: "message", message_RU: "Починить плиту", message: "Fix the SLATE" }],
		"dm-0-0-905420": [{ type: "text", sub_type: "message", message_RU: "Проверка водяной стены", message: "Water Wall Check" }],
		"s-454-100-1101-0": [
			// { type: "text", sub_type: "notification", message_RU: "Сфера (держить дальше)", message: "Ball (Stay Away)" },
			{ type: "spawn", func: "marker", args: [false, 0, 0, 100, 3000] }
		],
		"s-454-106-3101-0": [{ type: "text", sub_type: "message", message_RU: "1", message: "1" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000] }
		],
		"s-454-107-3102-0": [{ type: "text", sub_type: "message", message_RU: "2", message: "2" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000] }
		],
		"s-454-108-3103-0": [{ type: "text", sub_type: "message", message_RU: "3", message: "3" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000] }
		],
		"s-454-109-3104-0": [{ type: "text", sub_type: "message", message_RU: "4", message: "4" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 2200, 0, 15000] }
		]
	};
};