// Damned Citadel
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// PHASE 1
		"s-3041-1000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_RU: "Откид" }],
		"s-3041-1000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_RU: "Удар вперед (стан)" }],
		"s-3041-1000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_RU: "Удар назад (стан)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 380, null, 250, 0, 2000] }
		],
		"s-3041-1000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_RU: "Удар назад (стан)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 380, null, 250, 0, 2000] }
		],
		"s-3041-1000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_RU: "Удар (таргет)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-3041-1000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-3041-1000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }],
		"s-3041-1000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_RU: "Удар | Передний стан" }],
		"s-3041-1000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_RU: "Передний стан" },
			{ type: "spawn", func: "vector", args: [553, 35, 250, 10, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 325, 250, 350, 400, 0, 2000] }
		],
		"s-3041-1000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_RU: "Кувырок | Удар назад" }],
		"s-3041-1000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_RU: "Удар назад (кровоток)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-3041-1000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_RU: "Передняя комба" }],
		"s-3041-1000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_RU: "Круги (таргет)" }],
		"s-3041-1000-340-0": [
			{ type: "text", sub_type: "message", message: "Laser", message_RU: "Лазер" },
			{ type: "spawn", func: "vector", args: [912, 90, 50, 25, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 50, 335, 300, 0, 2000] }
		],

		// PHASE 2
		"s-3041-2000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_RU: "Откид" }],
		"s-3041-2000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_RU: "Удар вперед (стан)" }],
		"s-3041-2000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_RU: "Удар назад (стан)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 380, null, 250, 0, 2000] }
		],
		"s-3041-2000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_RU: "Удар назад (стан)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 380, null, 250, 0, 2000] }
		],
		"s-3041-2000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_RU: "Удар (таргет)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-3041-2000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-3041-2000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }],
		"s-3041-2000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_RU: "Удар | Передний стан" }],
		"s-3041-2000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_RU: "Передний стан" },
			{ type: "spawn", func: "vector", args: [553, 35, 250, 10, 400, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 325, 250, 350, 400, 0, 2000] }
		],
		"s-3041-2000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_RU: "Кувырок | Удар назад" }],
		"s-3041-2000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_RU: "Удар назад (кровоток)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-3041-2000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_RU: "Передняя комба" }],
		"s-3041-2000-143-0": [{ type: "text", sub_type: "message", message: "Hit | Back Push", message_RU: "Удар | Откид назад" }],
		"s-3041-2000-143-1": [{ type: "text", sub_type: "message", message: "Back Push", message_RU: "Откид назад" }],
		"s-3041-2000-144-0": [
			{ type: "text", sub_type: "message", message: "Right X-Swipe", message_RU: "Черкаш справа (крест)" },
			{ type: "spawn", func: "vector", args: [553, 305, 700, 130, 1200, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 325, 700, 130, 1200, 0, 3000] }
		],
		"s-3041-2000-145-0": [
			{ type: "text", sub_type: "message", message: "Left X-Swipe", message_RU: "Черкаш слева (крест)" },
			{ type: "spawn", func: "vector", args: [553, 30, 700, 230, 1200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 50, 700, 230, 1200, 0, 2000] }
		],
		"s-3041-2000-146-0": [
			{ type: "text", sub_type: "message", message: "Right Swipe", message_RU: "Черкаш справа" },
			{ type: "spawn", func: "vector", args: [553, 355, 500, 180, 1000, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 25, 500, 180, 1000, 0, 3000] }
		],
		"s-3041-2000-147-0": [
			{ type: "text", sub_type: "message", message: "Left Swipe", message_RU: "Черкаш слева" },
			{ type: "spawn", func: "vector", args: [553, 335, 500, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 5, 500, 180, 1000, 0, 2000] }
		],
		"s-3041-2000-148-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_RU: "Стан (АоЕ)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 50, null, 250, 0, 2000] }
		],
		"s-3041-2000-151-0": [
			{ type: "text", sub_type: "message", message: "Throws Combo | Stun (AoE)", message_RU: "Серия ударов | Стан (АоЕ)" },
			{ type: "spawn", func: "circle", args: [true, 912, 180, 200, null, 200, 0, 3000] }
		],
		"s-3041-2000-152-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_RU: "Стан (АоЕ)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 250, 0, 2000] }
		],
		"s-3041-2000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_RU: "Круги (таргет)" }],
		"s-3041-2000-340-0": [
			{ type: "text", sub_type: "message", message: "Laser", message_RU: "Лазер" },
			{ type: "spawn", func: "vector", args: [912, 90, 50, 25, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [912, 270, 50, 335, 300, 0, 2000] }
		],

		"qb-3041-2000-3041201": [{ type: "text", sub_type: "message", message: "Blue Circles (Safe)", message_RU: "Синие круги (сейф-зона)" }],
		"qb-3041-2000-3041202": [{ type: "text", sub_type: "message", message: "Red Circles (Dodge)", message_RU: "Красные круги (эвейд)" }],
		"qb-3041-2000-3041400": [{ type: "text", sub_type: "message", message: "Break Statues", message_RU: "Разбить статуи" }]
	};
};