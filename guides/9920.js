// Antaroth's Abyss (Hard)
//
// made by HSDN / Yuyuko / Owyn

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let secondboss_mech_counter = 0;
	let thirdboss_colour_to_use = null;
	let thirdboss_counter = 0;
	let thirdboss_timer = null;

	function secondboss_stacks_event() {
		secondboss_mech_counter++;

		handlers.text({ sub_type: "notification", message: `${secondboss_mech_counter} stack`, message_RU: `Стак ${secondboss_mech_counter}` });

		if (secondboss_mech_counter >= 5) {
			secondboss_mech_counter = 0;
		}
	}

	function thirdboss_backattack_event() {
		dispatch.clearTimeout(thirdboss_timer);
		thirdboss_counter++;

		if (thirdboss_counter >= 2) {
			handlers.text({ sub_type: "message", message: "Back Stun", message_RU: "Задний" });
		}

		thirdboss_timer = dispatch.setTimeout(() => thirdboss_counter = 0, 3000);
	}

	function thirdboss_cage_event(clockwise, ent) {
		const colour_order = clockwise ? ["red", "yellow", "blue"] : ["blue", "yellow", "red"];
		const colour_offsets = { "red": 0, "yellow": 120, "blue": 240 };

		const colour_messages = {
			"red": { message: "Red", message_RU: "Красный" },
			"yellow": { message: "Yellow", message_RU: "Желтый" },
			"blue": { message: "Blue", message_RU: "Синий" }
		};

		if (thirdboss_colour_to_use) {
			handlers.text({
				sub_type: "message",
				message: colour_messages[thirdboss_colour_to_use].message,
				message_RU: colour_messages[thirdboss_colour_to_use].message_RU
			});
		}

		for (let i = 0; i < 3; i++) {
			const current_colour = colour_order[(colour_order.indexOf(thirdboss_colour_to_use) + i) % 3];

			handlers.spawn({
				func: "marker",
				args: [false, colour_offsets[current_colour], 150, i * 2600, (i + 1) * 3000, true, null]
			}, ent);
		}
	}

	return {
		// 1 BOSS
		"nd-920-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-920-1000-1117-0": [{ type: "text", sub_type: "message", message: "In > Out", message_RU: "К нему > От него" }],
		"s-920-1000-1116-0": [{ type: "text", sub_type: "message", message: "Out > In", message_RU: "От него > К нему" }],
		"s-920-1000-1109-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Откид назад" }],
		"s-920-1000-1130-0": [{ type: "text", sub_type: "message", message: "Full > Outer > Inner", message_RU: "Общий > Внешний > Внутренний" }],
		"s-920-1000-1220-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ" },
			{ type: "text", sub_type: "message", delay: 2900, message: "Dodge!", message_RU: "Эвейд!" }
		],
		"s-920-1000-1300-0": [{ type: "text", sub_type: "message", delay: 600, message: "Dodge!", message_RU: "Эвейд!" }],
		"s-920-1000-2117-0": "s-920-1000-1117-0",
		"s-920-1000-2116-0": "s-920-1000-1116-0",
		"s-920-1000-2109-0": "s-920-1000-1109-0",
		"s-920-1000-2130-0": [{ type: "text", sub_type: "message", message: "Full > Inner > Outer", message_RU: "Общий > Внутренний > Внешний" }],
		"s-920-1000-2220-0": "s-920-1000-1220-0",
		"qb-920-1000-9201000": [{ type: "text", sub_type: "message", message: "Flying", message_RU: "Подлет" }],

		// 2 BOSS
		"nd-920-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-920-2000-99": [{ type: "func", func: () => secondboss_mech_counter = 0 }],
		"h-920-2000-50": [{ type: "text", sub_type: "message", message: "50%", message_RU: "50%" }],
		"h-920-2000-20": [{ type: "text", sub_type: "message", message: "20%", message_RU: "20%" }],
		"s-920-2000-1104-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_RU: "Прыжок (стан)" }],
		"s-920-2000-1105-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Удар назад" }],
		"s-920-2000-1106-0": [
			{ type: "text", sub_type: "message", message: "Spin Attack", message_RU: "Крутилка" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-920-2000-1108-0": [{ type: "text", sub_type: "message", message: "Target Swing", message_RU: "Таргет" }],
		"s-920-2000-1110-0": [
			{ type: "text", sub_type: "message", message: "Stun Attack", message_RU: "Передний стан" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 175, 10, 260, 0, 5000] }
		],
		"s-920-2000-1111-0": [
			{ type: "text", sub_type: "message", message: "Left Slash", message_RU: "Левая полоса" },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 6, 302, 270, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 176, 502, 270, 200, 0, 2000] }
		],
		"s-920-2000-1112-0": [
			{ type: "text", sub_type: "message", message: "Right Slash", message_RU: "Правая полоса" },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 354, 302, 90, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 184, 502, 90, 200, 0, 2000] }
		],
		"s-920-2000-1113-0": "s-920-2000-1111-0",
		"s-920-2000-1114-0": "s-920-2000-1112-0",
		"s-920-2000-2104-0": "s-920-2000-1104-0",
		"s-920-2000-2105-0": "s-920-2000-1105-0",
		"s-920-2000-2106-0": "s-920-2000-1106-0",
		"s-920-2000-2108-0": "s-920-2000-1108-0",
		"s-920-2000-2110-0": "s-920-2000-1110-0",
		"s-920-2000-2111-0": "s-920-2000-1111-0",
		"s-920-2000-2112-0": "s-920-2000-1112-0",
		"s-920-2000-2113-0": "s-920-2000-1111-0",
		"s-920-2000-2114-0": "s-920-2000-1112-0",
		"s-920-2000-3116-0": [{ type: "text", sub_type: "message", message: "Circles", message_RU: "Круги" }],
		"s-920-2000-3119-0": [{ type: "text", sub_type: "message", message: "Red: Out safe", message_RU: "Красный: Наружу сейф" }],
		"s-920-2000-3220-0": [{ type: "text", sub_type: "message", message: "Blue: In safe", message_RU: "Синий: Внутрь сейф" }],
		//
		"dm-0-0-9202000": [{ type: "func", func: secondboss_stacks_event }],

		// 3 BOSS
		"nd-920-3000-0": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-920-3000-1104-0": [{ type: "func", func: thirdboss_backattack_event }],
		"s-920-3000-1105-0": [{ type: "text", sub_type: "message", message: "Target Cage", message_RU: "Клетка (таргет)" }],
		"s-920-3000-1119-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] }],
		"s-920-3000-1107-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_RU: "Прыжок (стан)" }],
		"s-920-3000-1107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],
		"s-920-3000-1109-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Лево" },
			{ type: "text", sub_type: "message", message: "Inward (In > Out)", message_RU: "Внутрь (к нему > от него)", delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		],
		"s-920-3000-1111-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Право" },
			{ type: "text", sub_type: "message", message: "Outward (Out > In)", message_RU: "Наружу (от него > к нему)", delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		],
		"s-920-3000-1113-0": [{ type: "text", sub_type: "message", message: "Front | Back Stun", message_RU: "Передний | Задний" }],
		"s-920-3000-1115-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_RU: "Круговая" }],
		"s-920-3000-1120-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Slow)", message_RU: "Волна (медленно)" }],
		"s-920-3000-1204-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Fast)", message_RU: "Волна (быстро)" }],
		// "s-920-3000-1202-0": [{ type: "text", sub_type: "message", message: "Spin or Front | Back Stun", message_RU: "Круговая или передний | Задний" }],
		"s-920-3000-1206-0": [{ type: "text", sub_type: "message", message: "Orbs", message_RU: "Шары" }],
		"s-920-3000-1309-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }],
		"s-920-3000-1310-0": [{ type: "text", sub_type: "message", message: "Puddles", message_RU: "Лужи" }],
		"s-920-3000-1311-0": "s-920-3000-1310-0",
		"s-920-3000-1312-0": "s-920-3000-1310-0",
		"s-920-3000-1313-0": "s-920-3000-1310-0",
		"s-920-3000-1314-0": "s-920-3000-1310-0",
		"s-920-3000-1315-0": [{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид (кайа)" }],
		"s-920-3000-1317-0": [{ type: "func", func: thirdboss_cage_event, args: [false], delay: 1000 }],
		"s-920-3000-1318-0": [{ type: "func", func: thirdboss_cage_event, args: [true], delay: 1000 }],
		"s-920-3000-1400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_RU: "Копии: волны" }],
		"s-920-3000-1401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_RU: "Копии: круговые" }],
		"s-920-3000-2104-0": "s-920-3000-1104-0",
		"s-920-3000-2105-0": "s-920-3000-1105-0",
		"s-920-3000-2119-0": "s-920-3000-1119-0",
		"s-920-3000-2107-0": "s-920-3000-1107-0",
		"s-920-3000-2107-1": "s-920-3000-1107-1",
		"s-920-3000-2109-0": "s-920-3000-1109-0",
		"s-920-3000-2111-0": "s-920-3000-1111-0",
		"s-920-3000-2113-0": "s-920-3000-1113-0",
		"s-920-3000-2115-0": "s-920-3000-1115-0",
		"s-920-3000-2120-0": "s-920-3000-1120-0",
		"s-920-3000-2204-0": "s-920-3000-1204-0",
		"s-920-3000-2202-0": "s-920-3000-1202-0",
		"s-920-3000-2206-0": "s-920-3000-1206-0",
		"s-920-3000-1410-0": [{ type: "text", sub_type: "message", message: "Cage", message_RU: "Клетка" }],
		"ae-0-0-9203037": [{ type: "func", func: () => thirdboss_colour_to_use = "red" }],
		"ae-0-0-9203038": [{ type: "func", func: () => thirdboss_colour_to_use = "yellow" }],
		"ae-0-0-9203039": [{ type: "func", func: () => thirdboss_colour_to_use = "blue" }]
	};
};