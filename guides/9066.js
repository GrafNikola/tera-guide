// Demon's Wheel
//
// made by michengs

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let	print = false;
	let circlecount = 0;

	function skilld_event(skillid) {
		if ([1311, 1313, 1315, 1317].includes(skillid)) {
			circlecount = 0;

			handlers.text({ sub_type: "message", message: "OUT", message_RU: "К нему" });
		}

		if ([1312, 1313, 1316, 1318].includes(skillid)) {
			circlecount = 0;

			handlers.text({ sub_type: "message", message: "IN", message_RU: "К нему" });
		}

		if ([1306, 1307, 1308, 1309, 1310].includes(skillid)) {
			circlecount += (skillid - 1306) + 1;

			handlers.text({
				sub_type: "notification",
				message: `${circlecount} - ${circlecount & 1 ? "Odd - Red" : "Even - Blue"}`,
				message_RU: `${circlecount} - ${circlecount & 1 ? "Нечетный - Красный" : "Четный - Синий"}`
			});
		}

		if ([1319, 1320, 1321, 1322, 1323].includes(skillid)) {
			// circlecount += (skillid - 1306) + 1;
			circlecount += (skillid - 1319) + 1;

			handlers.text({
				sub_type: "notification",
				message: `${circlecount} - ${circlecount & 1 ? "Odd - Red" : "Even - Blue"}`,
				message_RU: `${circlecount} - ${circlecount & 1 ? "Нечетный - Красный" : "Четный - Синий"}`
			});
		}

		if ([21311, 21314].includes(skillid)) {
			handlers.text({ sub_type: "message", message: "IN | OUT", message_RU: "К нему | От него" });
		}

		if ([21312, 21313].includes(skillid)) {
			handlers.text({ sub_type: "message", message: "OUT | IN", message_RU: "От него | К нему" });
		}

		if ([21303].includes(skillid)) {
			if (print) {
				handlers.text({ sub_type: "notification", message: "Hit ALL", message_RU: "Бить ВСЕ", speech: false });
				handlers.text({ sub_type: "message", message: "Hit ALL", message_RU: "Бить ВСЕ" });
			} else {
				handlers.text({ sub_type: "message", message: "Hit ALL", message_RU: "Бить ВСЕ" });
			}
		}
	}

	return {
		// First boss
		"h-466-46602-99": [{ type: "func", func: () => print = false }],
		"h-466-46602-30": [{ type: "func", func: () => print = true }],
		//
		"qb-466-46621-466050": [
			{ type: "text", sub_type: "notification", message: "Don't hit RED", message_RU: "Не бить КРАСНЫЙ", speech: false },
			{ type: "text", sub_type: "message", message: "Don't hit RED", message_RU: "Не бить КРАСНЫЙ" }
		],
		"qb-466-46621-466051": [
			{ type: "text", sub_type: "notification", message: "Don't hit WHITE", message_RU: "Не бить БЕЛЫЙ", speech: false },
			{ type: "text", sub_type: "message", message: "Don't hit WHITE", message_RU: "Не бить БЕЛЫЙ" }
		],
		"qb-466-46621-466052": [
			{ type: "text", sub_type: "notification", message: "Don't hit BLUE", message_RU: "Не бить СИНИЙ", speech: false },
			{ type: "text", sub_type: "message", message: "Don't hit BLUE", message_RU: "Не бить СИНИЙ" }
		],
		"qb-466-46622-466054": [
			{ type: "text", sub_type: "notification", message: "Hit RED", message_RU: "Бить КРАСНЫЙ", speech: false },
			{ type: "text", sub_type: "message", message: "Hit RED", message_RU: "Бить КРАСНЫЙ" }
		],
		"qb-466-46622-466055": [
			{ type: "text", sub_type: "notification", message: "Hit WHITE", message_RU: "Бить БЕЛЫЙ", speech: false },
			{ type: "text", sub_type: "message", message: "Hit WHITE", message_RU: "Бить БЕЛЫЙ" }
		],
		"qb-466-46622-466056": [
			{ type: "text", sub_type: "notification", message: "Hit BLUE", message_RU: "Бить СИНИЙ", speech: false },
			{ type: "text", sub_type: "message", message: "Hit BLUE", message_RU: "Бить СИНИЙ" }
		],
		//
		"s-466-46601-1105-0": [{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан" }],
		"s-466-46601-1106-0": [{ type: "text", sub_type: "message", message: "Exhaust", message_RU: "Выхлоп" }],
		"s-466-46601-1109-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Front", message_RU: "Передняя" }],
		"s-466-46601-1110-0": [{ type: "text", sub_type: "message", message: "Tail", message_RU: "Хвост" }],
		"s-466-46601-2105-0": "s-466-46601-1105-0",
		"s-466-46601-2106-0": "s-466-46601-1106-0",
		"s-466-46601-2109-0": "s-466-46601-1109-0",
		"s-466-46601-2110-0": "s-466-46601-1110-0",
		"s-466-46601-1311-0": [{ type: "func", func: skilld_event.bind(null, 1311) }],
		"s-466-46601-1313-0": [{ type: "func", func: skilld_event.bind(null, 1313) }],
		"s-466-46601-1315-0": [{ type: "func", func: skilld_event.bind(null, 1315) }],
		"s-466-46601-1317-0": [{ type: "func", func: skilld_event.bind(null, 1317) }],
		"s-466-46601-1312-0": [{ type: "func", func: skilld_event.bind(null, 1312) }],
		"s-466-46601-1314-0": [{ type: "func", func: skilld_event.bind(null, 1314) }],
		"s-466-46601-1316-0": [{ type: "func", func: skilld_event.bind(null, 1316) }],
		"s-466-46601-1318-0": [{ type: "func", func: skilld_event.bind(null, 1318) }],
		"s-466-46601-1306-0": [{ type: "func", func: skilld_event.bind(null, 1306) }],
		"s-466-46601-1307-0": [{ type: "func", func: skilld_event.bind(null, 1307) }],
		"s-466-46601-1308-0": [{ type: "func", func: skilld_event.bind(null, 1308) }],
		"s-466-46601-1309-0": [{ type: "func", func: skilld_event.bind(null, 1309) }],
		"s-466-46601-1310-0": [{ type: "func", func: skilld_event.bind(null, 1310) }],
		"s-466-46601-1319-0": [{ type: "func", func: skilld_event.bind(null, 1319) }],
		"s-466-46601-1320-0": [{ type: "func", func: skilld_event.bind(null, 1320) }],
		"s-466-46601-1321-0": [{ type: "func", func: skilld_event.bind(null, 1321) }],
		"s-466-46601-1322-0": [{ type: "func", func: skilld_event.bind(null, 1322) }],
		"s-466-46601-1323-0": [{ type: "func", func: skilld_event.bind(null, 1323) }],
		//
		"s-466-46602-1116-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Притяжка" }],
		"s-466-46602-1223-0": [{ type: "text", sub_type: "message", message: "Double RED", message_RU: "Двойной КРАСНЫЙ" }],
		"s-466-46602-1113-0": [{ type: "text", sub_type: "message", message: "LASER!!!", message_RU: "ЛАЗЕР!!!" }],
		"s-466-46602-2116-0": "s-466-46602-1116-0",
		"s-466-46602-2113-0": "s-466-46602-1113-0",
		"s-466-46602-1311-0": [{ type: "func", func: skilld_event.bind(null, 21311) }],
		"s-466-46602-1314-0": [{ type: "func", func: skilld_event.bind(null, 21314) }],
		"s-466-46602-1312-0": [{ type: "func", func: skilld_event.bind(null, 21312) }],
		"s-466-46602-1313-0": [{ type: "func", func: skilld_event.bind(null, 21313) }],
		"s-466-46602-1303-0": [{ type: "func", func: skilld_event.bind(null, 21303) }]
	};
};