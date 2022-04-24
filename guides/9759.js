// Forsaken Island (Hard)
//
// made by ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"s-759-1001-1104-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан)" }],
		"s-759-1001-2104-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан)" }],
		"s-759-1001-1106-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1001-2106-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1001-3107-0": [
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_RU: "Конус (эвейд)" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 1500] }
		],
		"s-759-1001-3101-0": [
			{ type: "text", sub_type: "message", message: "Out", message_RU: "От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 2000] }
		],
		"s-759-1001-3106-0": [
			{ type: "text", sub_type: "message", message: "In", message_RU: "К нему " },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 245, 0, 2000] }
		],

		// 2 BOSS
		"s-759-1002-3101-0": [
			{ type: "text", sub_type: "message", message: "Push (Dodge)", message_RU: "Откид (эвейд)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1002-3102-0": [{ type: "text", sub_type: "message", message: "Circles x5 (Dodge)", message_RU: "Круги х5 (эвейд)" }],
		"s-759-1002-3103-0": [{ type: "text", sub_type: "message", message: "Circles x5 (Dodge)", message_RU: "Круги х5 (эвейд)" }],
		"s-759-1002-3105-0": [{ type: "text", sub_type: "message", message: "Circle (Dodge)", message_RU: "Круг (эвейд)" }],
		"s-759-1002-3104-0": [{ type: "text", sub_type: "message", message: "AOE (Go to ghost)", message_RU: "АОЕ (К призраку)" }],
		"s-759-1002-3107-0": [{ type: "text", sub_type: "message", message: "Puddle (Dodge)", message_RU: "Лужа (эвейд)" }],
		"s-759-1002-3108-0": [{ type: "text", sub_type: "message", message: "Puddle (Dodge)", message_RU: "Лужа (эвейд)" }],

		// 3 BOSS
		"s-759-1003-2110-0": [
			{ type: "text", sub_type: "message", message: "Clover", message_RU: "Клевер" },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],
		"s-759-1003-1110-0": [
			{ type: "text", sub_type: "message", message: "Clover", message_RU: "Клевер" },
			{ type: "spawn", func: "circle", args: [false, 553, 45, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 135, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 225, 180, 12, 230, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 315, 180, 12, 230, 0, 3000] }
		],

		"s-759-1003-3108-0": [{ type: "text", sub_type: "message", message: "Debuff x2", message_RU: "Дебаф х2" }],
		"s-759-1003-3109-0": [{ type: "text", sub_type: "message", message: "Carpet", message_RU: "Ковер" }],

		"s-759-1003-3105-0": [{ type: "text", sub_type: "message", message: "Circles (Dodge)", message_RU: "Круги (эвейд)" }],
		"s-759-1003-3106-0": [{ type: "text", sub_type: "message", message: "Circles (Dodge)", message_RU: "Круги (эвейд)" }],
		"s-759-3000-1102-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Притяжка" }],

		// Mini-bosses
		// 1 BOSS
		"s-759-1004-1104-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан) " }],
		"s-759-1004-2104-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан)" }],
		"s-759-1004-3107-0": [
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_RU: "Конус (эвейд)" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 1500] }
		],
		"s-759-1004-1106-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1004-2106-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1004-3101-0": [
			{ type: "text", sub_type: "message", message: "Out", message_RU: "От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 2000] }
		],
		"s-759-1004-3106-0": [
			{ type: "text", sub_type: "message", message: "In", message_RU: "К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 245, 0, 2000] }
		],

		// 2 BOSS
		"s-759-1005-3101-0": [
			{ type: "text", sub_type: "message", message: "Push (Dodge)", message_RU: "Откид (эвейд)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-759-1005-3105-0": [{ type: "text", sub_type: "message", message: "Circle (Dodge)", message_RU: "Круг (эвейд)" }],
		"s-759-1005-3107-0": [{ type: "text", sub_type: "message", message: "Puddle (Dodge)", message_RU: "Лужа (эвейд)" }],
		"s-759-1005-3108-0": [{ type: "text", sub_type: "message", message: "Puddle (Dodge)", message_RU: "Лужа (эвейд)" }],
		"s-759-1005-3104-0": [{ type: "text", sub_type: "message", message: "AOE (Go to ghost)", message_RU: "АОЕ (К призраку)" }]
	};
};