// Timescape (Hard)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = ES;

	return {
		// Boss 1 (phase 1)
		"s-456-401-104-0": [
			{ type: "text", sub_type: "message", message: "Bomb", message_RU: "Бомба" },
			{ type: "text", sub_type: "warning", message: "(1)", speech: false, delay: 550 },
			{ type: "text", sub_type: "warning", message: "(2)", speech: false, delay: 1300 },
			{ type: "text", sub_type: "warning", message: "(3)", speech: false, delay: 2050 },
			{ type: "text", sub_type: "message", message: "(4) Dodge!", message_RU: "(4) Эвейд!", delay: 2800 }
		],
		"s-456-1001-107-0": [{ type: "text", sub_type: "alert", message: "Shot", message_RU: "Выстрел", speech: false }],

		// Boss 1 (phase 2)
		"s-456-413-104-0": "s-456-401-104-0",
		"s-456-414-104-0": "s-456-401-104-0",
		"s-456-415-104-0": "s-456-401-104-0",
		"s-456-416-104-0": "s-456-401-104-0",
		"s-456-1000-107-0": [{ type: "text", sub_type: "alert", message: "Shot", message_RU: "Выстрел", speech: false }],
		"ab-456-1000-905685": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_RU: "Регресс", class_position: "heal" }],

		// Boss 2
		"s-456-1002-102-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок" }],
		"s-456-1002-103-0": [{ type: "text", sub_type: "message", message: "Combo", message_RU: "Комба" }],
		"s-456-1002-104-0": [{ type: "text", sub_type: "message", message: "Shot (target)", message_RU: "Выстрел (таргет)" }],
		"s-456-1002-107-0": [{ type: "text", sub_type: "message", message: "Many Pokes", message_RU: "Серия ударов" }],
		"s-456-1002-110-0": [{ type: "text", sub_type: "message", message: "Clap", message_RU: "Удар вперед" }],
		"s-456-1002-3110-0": [{ type: "text", sub_type: "message", message: "Breath", message_RU: "Дыхание" }],
		"s-456-1002-3113-0": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ", delay: 4000 }],

		// Boss 3
		"ab-456-1003-905607": [{ type: "text", sub_type: "message", message: "Clense + Plague/Regress", message_RU: "Клинс + регресс", class_position: "heal" }],
		"s-456-1003-103-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-456-1003-104-0": [{ type: "text", sub_type: "message", message: "Clap", message_RU: "Удар вперед" }],
		"s-456-1003-105-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Вперед" }],
		"s-456-1003-105-1": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Назад" }],
		"s-456-1003-107-0": [{ type: "text", sub_type: "message", message: "Swipe", message_RU: "Откид" }],
		"s-456-1003-108-0": [{ type: "text", sub_type: "message", message: "Swipe", message_RU: "Откид" }],
		"s-456-1003-109-0": [{ type: "text", sub_type: "message", message: "Breath (target)", message_RU: "Дыхание (таргет)" }],
		"s-456-1003-111-0": [{ type: "text", sub_type: "message", message: "Leash (target)", message_RU: "Притяжка (таргет)" }],
		"s-456-1003-3104-0": [{ type: "text", sub_type: "message", message: "Cage", message_RU: "Клетка" }], // 456016
		"s-456-1003-3108-0": [{ type: "text", sub_type: "message", message: "Waves", message_RU: "Волны" }],
		"qb-456-1003-456015": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ" }], // 3103
		"qb-456-1003-456017": [{ type: "text", sub_type: "message", message: "Give Stun", message_RU: "Дать стан" }], // 3102
		"dm-0-0-905624": [{ type: "text", sub_type: "alert", message: "Wall Change", message_RU: "Смена печати", delay: 1000 }], // green
		"dm-0-0-905625": [{ type: "text", sub_type: "alert", message: "Wall Change", message_RU: "Смена печати", delay: 1000 }], // red
		"dm-0-0-905626": [{ type: "text", sub_type: "alert", message: "Wall Change", message_RU: "Смена печати", delay: 1000 }], // purple
	};
};