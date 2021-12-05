// Cursed Antaroth's Abyss
//
// made by HSDN / Yuyuko

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let back_notice_counter = 0;
	let back_notice_timer = null;

	function back_notice_event() {
		dispatch.clearTimeout(back_notice_timer);
		back_notice_counter++;

		if (back_notice_counter >= 2) {
			handlers.text({ sub_type: "message", message: "!!!" });
		}

		back_notice_timer = dispatch.setTimeout(() => back_notice_counter = 0, 3000);
	}

	return {
		"nd-3108-1000-0": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// Not enraged
		"s-3108-1000-1104-0": [{ type: "func", func: back_notice_event }],
		"s-3108-1000-1107-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_RU: "Прыжок (стан)" }],
		"s-3108-1000-1109-0": [ // out to in
			{ type: "text", class_position: "tank", sub_type: "message", message: "Right Safe > Inward Waves", message_RU: "Вправо сейф > Волны внутрь" },
			{ type: "text", class_position: "dps", sub_type: "message", message: "Left Safe > Inward Waves", message_RU: "Влево сейф > Волны внутрь" },
			{ type: "text", class_position: "heal", sub_type: "message", message: "Left Safe > Inward Waves", message_RU: "Влево сейф > Волны внутрь" },
			{ type: "spawn", func: "marker", args: [false, 90, -250, 0, 2500, true, null] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 143, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 293, 1500, 5000] }
		],
		"s-3108-1000-1111-0": [ // in to out
			{ type: "text", class_position: "tank", sub_type: "message", message: "Left Safe > Outward Waves", message_RU: "Влево сейф > Волны наружу" },
			{ type: "text", class_position: "dps", sub_type: "message", message: "Right Safe > Outward Waves", message_RU: "Вправо сейф > Волны наружу" },
			{ type: "text", class_position: "heal", sub_type: "message", message: "Right Safe > Outward Waves", message_RU: "Вправо сейф > Волны наружу" },
			{ type: "spawn", func: "marker", args: [false, 270, -250, 0, 2500, true, null] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 5000] }
		],
		"s-3108-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front | Back Slam", message_RU: "Передний | Задний" }],
		"s-3108-1000-1115-0": [{ type: "text", sub_type: "message", message: "Spinning Attack", message_RU: "Круговая" }],
		"s-3108-1000-1119-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Задний" }],
		"s-3108-1000-1120-0": [{ type: "text", sub_type: "message", message: "Energy Beam", message_RU: "Волна" }],
		"s-3108-1000-1204-0": [{ type: "text", sub_type: "message", message: "Energy Beam", message_RU: "Волна" }],
		"s-3108-1000-1207-0": [{ type: "text", sub_type: "message", message: "Double Waves", message_RU: "Двойные волны" }],
		"s-3108-1000-1209-0": [{ type: "text", sub_type: "message", message: "Spinning (Pushback)", message_RU: "Круговая (откид)" }],
		"s-3108-1000-1211-0": [{ type: "text", sub_type: "message", message: "Spinning (Pushback)", message_RU: "Круговая (откид)" }],
		"s-3108-1000-1315-0": [{ type: "text", sub_type: "message", message: "Pushback (Kaia)", message_RU: "Откид (кайа)" }],

		// Enraged
		"s-3108-1000-2104-0": "s-3108-1000-1104-0",
		"s-3108-1000-2107-0": "s-3108-1000-1107-0",
		"s-3108-1000-2109-0": "s-3108-1000-1109-0",
		"s-3108-1000-2111-0": "s-3108-1000-1111-0",
		"s-3108-1000-2113-0": "s-3108-1000-1113-0",
		"s-3108-1000-2115-0": "s-3108-1000-1115-0",
		"s-3108-1000-2119-0": "s-3108-1000-1119-0",
		"s-3108-1000-2120-0": "s-3108-1000-1120-0",
		"s-3108-1000-2204-0": "s-3108-1000-1204-0",
		"s-3108-1000-2207-0": "s-3108-1000-1207-0",
		"s-3108-1000-2209-0": "s-3108-1000-1209-0",
		"s-3108-1000-2211-0": "s-3108-1000-1211-0",

		"s-3108-1000-1400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_RU: "Копии: волны" }], // 9023025
		"s-3108-1000-1401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_RU: "Копии: круговые" }] // 9023027
	};
};