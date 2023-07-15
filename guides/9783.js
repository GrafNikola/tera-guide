// Dark Reach Citadel
//
// made by ITunk / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-783-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-783-1000-119-0": [{ type: "text", sub_type: "message", message: "Heavy Attack", message_RU: "Тяжелый удар" }],
		"s-783-1000-120-0": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд" }],
		"s-783-1000-302-0": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ" }],
		"s-783-1000-108-0": [{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан" }],
		"s-783-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Back", message_RU: "Откид назад" }],
		"s-783-1000-127-0": [{ type: "text", sub_type: "message", message: "Many Attack", message_RU: "Серия ударов" }],
		"s-783-1000-305-0": [{ type: "text", sub_type: "message", message: "Triple Laser (Together)", message_RU: "Тройной лазер (собраться)" }],
		"s-783-1000-304-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Стяжка" }],

		// 2 BOSS
		"nd-783-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-783-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack (Dodge)", message_RU: "Удар вперед (эвейд)" }],
		"s-783-2000-112-0": [{ type: "text", sub_type: "message", message: "Push Back (Right)", message_RU: "Откид назад правой" }],
		"s-783-2000-115-0": [{ type: "text", sub_type: "message", message: "Push Back (Left)", message_RU: "Откид назад левой" }],
		"s-783-2000-119-0": [{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_RU: "Прыжок (эвейд)" }],
		"s-783-2000-120-0": [{ type: "text", sub_type: "message", message: "Front Attack | Push Back", message_RU: "Удар вперед | Откид назад" }],
		/*	{ type: "spawn", func: "vector", args: [553, 0, 0, 70, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 305, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 210, 380, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 0, 50, 150, 380, 0, 4000] } */
		"s-783-2000-105-0": [{ type: "text", sub_type: "message", message: "Whip (Dodge)", message_RU: "Хлыст (эвейд)" }],
		"s-783-2000-316-0": [{ type: "text", sub_type: "message", message: "Fire AOE", message_RU: "Огненное АОЕ" }],
		"s-783-2000-306-0": [{ type: "text", sub_type: "message", message: "Dodge | Out", message_RU: "Эвейд | От него" }],
		// { type: "spawn", func: "circle", args: [false, 553, 0, -50, null, 675, 0, 3000] }
		"s-783-2000-317-0": [{ type: "text", sub_type: "message", message: "Dodge (AOE)", message_RU: "Эвейд (АОЕ)" }],
		"s-783-2000-318-0": [{ type: "text", sub_type: "message", message: "Dodge (Get out)", message_RU: "Эвейд (отбежать)" }],
		// { type: "spawn", func: "circle", args: [false, 553, 0, -50, null, 675, 0, 7000] }

		// 3 BOSS
		"nd-783-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-783-3000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_RU: "Откид" }],
		"s-783-3000-309-0": [{ type: "text", sub_type: "message", message: "Debuff!!!", message_RU: "Дебафф!!!" }],
		"s-783-3000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_RU: "Удар вперед (стан)" }],
		"s-783-3000-113-0": [{ type: "text", sub_type: "message", message: "Push Back", message_RU: "Откид назад" }],
		"s-783-3000-315-0": [{ type: "text", sub_type: "message", message: "Dodge | Out", message_RU: "Эвейд | От него" }],
		"s-783-3000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_RU: "Удар назад (стан)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 380, null, 250, 0, 2000] }
		],
		"s-783-3000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_RU: "Удар назад (стан)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 380, null, 250, 0, 2000] }
		],
		"s-783-3000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_RU: "Удар (таргет)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-783-3000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-783-3000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }],
		"s-783-3000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_RU: "Удар | Передний стан" }],
		"s-783-3000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_RU: "Передний стан" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-783-3000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_RU: "Кувырок | Удар назад" }],
		"s-783-3000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_RU: "Удар назад (кровоток)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-783-3000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_RU: "Передняя комба" }],
		"s-783-3000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_RU: "Шипы х5 (Эвейд)" }],
		"s-783-3000-303-0": [
			{ type: "text", sub_type: "message", message: "Right Safe", message_RU: "Право сейф" },
			{ type: "spawn", func: "marker", args: [false, 120, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 250, 0, 4000, true, null] }
		],
		"s-783-3000-306-0": [
			{ type: "text", sub_type: "message", message: "Left Safe", message_RU: "Лево сейф" },
			{ type: "spawn", func: "marker", args: [false, 240, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 250, 0, 4000, true, null] }
		]
	};
};