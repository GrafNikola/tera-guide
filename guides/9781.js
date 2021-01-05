// Velik's Sanctuary
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let thirdboss_fifty = false;

	function thirdboss_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Circles > Bombs",
						message_RU: "ДКБ"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles",
						message_RU: "ДБК"
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs",
						message_RU: "КБД"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs",
						message_RU: "КДБ"
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles",
						message_RU: "БДК"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs",
						message_RU: "БКД"
					});
				}
				break;
		}
	}

	return {
		// 1 BOSS
		"nd-781-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-781-1000-1401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		"s-781-1000-1402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-781-1000-1304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_RU: "Взлет" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-781-1000-1308-0": [{ type: "text", sub_type: "message", message: "OUT", message_RU: "Наружу" }],
		"s-781-1000-1309-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "Внутрь" }],
		"s-781-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_RU: "Передняя | AOE" }],
		"s-781-1000-2401-0": "s-781-1000-1401-0",
		"s-781-1000-2402-0": "s-781-1000-1402-0",
		"s-781-1000-2303-0": "s-781-1000-1303-0",
		"s-781-1000-2304-0": "s-781-1000-1304-0",
		"s-781-1000-2308-0": "s-781-1000-1308-0",
		"s-781-1000-2309-0": "s-781-1000-1309-0",
		"s-781-1000-2113-0": "s-781-1000-1113-0",

		// 2 BOSS
		"nd-781-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Cage Mechanic
		"s-781-2000-1501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_RU: "Идентификация" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		"s-781-2000-1106-0": [
			{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 14, 270, 0, 2600] }
		],
		"s-781-2000-1108-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Передний" }],
		"s-781-2000-1111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_RU: "Круговая" }],
		"s-781-2000-1134-0": [
			{ type: "text", sub_type: "message", message: "Combo Attack (Dodge)", message_RU: "Задний" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-781-2000-1134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 15, 175, 100, 2000] }
		],
		"s-781-2000-1130-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		"s-781-2000-1302-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт" }],
		"s-781-2000-2501-0": "s-781-2000-1501-0",
		"s-781-2000-2106-0": "s-781-2000-1106-0",
		"s-781-2000-2108-0": "s-781-2000-1108-0",
		"s-781-2000-2111-0": "s-781-2000-1111-0",
		"s-781-2000-2134-0": "s-781-2000-1134-0",
		"s-781-2000-2134-1": "s-781-2000-1134-1",
		"s-781-2000-2130-0": "s-781-2000-1130-0",
		"s-781-2000-2131-0": "s-781-2000-1131-0",
		//
		"qb-781-4000-9781046": [{ type: "text", sub_type: "message", message: "First: (Debuffs) Closest", message_RU: "[ДКБ] Первая: дебафф (ближние)" }], // Thank you... for this release...
		"qb-781-4000-9781047": [{ type: "text", sub_type: "message", message: "First: (Circles) Spread", message_RU: "[КБД] Первая: круги (отдельно)" }], // Beware the... red lightning...
		"qb-781-4000-9781048": [{ type: "text", sub_type: "message", message: "First: (Bombs) Gather + Cleanse", message_RU: "[БДК] Первая: бомбы (вместе + клинс)" }], // Beware the mark... of Lakan...

		// 3 BOSS
		"nd-781-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-781-3000-99": [{ type: "func", func: () => thirdboss_fifty = false }],
		"h-781-3000-50": [{ type: "func", func: () => thirdboss_fifty = true }],
		"dm-0-0-9781043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-9781044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-9781045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-781-3000-1404-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_RU: "Дебафф (ближние)" }],
		"s-781-3000-1405-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_RU: "Дебафф (дальние)" }],
		"s-781-3000-1301-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + Cleanse", message_RU: "Бомбы (вместе!) + клинс" }],
		"s-781-3000-1302-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + No cleanse", message_RU: "Бомбы (вместе!) + без клинса" }],
		"s-781-3000-3103-0": [{ type: "text", sub_type: "message", message: "(Circles) Spread", message_RU: "Круги (отдельно!)" }],
		"s-781-3000-3105-0": [{ type: "text", sub_type: "message", message: "(Circles) Gather", message_RU: "Круги (вместе!)" }],
		"s-781-3000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_RU: "Когти" }],
		"s-781-3000-1144-0": [{ type: "text", sub_type: "message", message: "OUT", message_RU: "Наружу" }],
		"s-781-3000-1145-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "Внутрь" }],
		"s-781-3000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }
		],
		"s-781-3000-1401-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_RU: "Регресс!!" }],
		"s-781-3000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_RU: "Слип!!" }],
		"s-781-3000-1701-0": [{ type: "text", sub_type: "message", message: "Back + Front", message_RU: "Назад + Вперед" }],
		//
		"s-781-3000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт" }],
		"s-781-3000-1151-0": [{ type: "text", sub_type: "message", message: "Attention Stun", message_RU: "Стан" }],
		"s-781-3000-1152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_RU: "Стан + Откид назад" }],
		"s-781-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-781-3000-2113-0": "s-781-3000-1113-0",
		"s-781-3000-2151-0": "s-781-3000-1151-0",
		"s-781-3000-2152-0": "s-781-3000-1152-0",
		"s-781-3000-2138-0": "s-781-3000-1138-0"
	};
};