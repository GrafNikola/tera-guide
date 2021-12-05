// Cursed Antaroth's Abyss
//
// made by HSDN / Yuyuko

module.exports = (dispatch, handlers, guide, lang) => {
	let stack_level = 0;
	let back_notice_counter = 0;
	let back_notice_timer = null;

	function back_notice_event() {
		back_notice_counter++;

		if (back_notice_counter >= 2) {
			handlers.text({ sub_type: "notification", message: "!!!", speech: false });
			handlers.text({ sub_type: "message", message: "!!!" });
		}

		dispatch.clearTimeout(back_notice_timer);
		back_notice_timer = dispatch.setTimeout(() => back_notice_counter = 0, 3000);
	}

	function stacks_level_event() {
		stack_level++;

		if (stack_level > 0) {
			handlers.text({ sub_type: "notification", message: `Stack ${stack_level}`, message_RU: `Стак ${stack_level}`, speech: false });
		}

		if (stack_level === 4) {
			handlers.text({ sub_type: "notification", message: "Charged", message_RU: "Заряжен", speech: false });
			handlers.text({ sub_type: "alert", message: "Pushback soon", message_RU: "Скоро откид" });

			stack_level = 0;
		}
	}

	return {
		"nd-3108-1000-0": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-982-3000-99": [{ type: "func", func: () => stack_level = 0 }],

		"s-3108-1000-104-0": [{ type: "func", func: back_notice_event }],
		"s-3108-1000-105-0": [{ type: "text", sub_type: "message", message: "Cage (Target)", message_RU: "Клетка (таргет)" }],
		"s-3108-1000-107-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_RU: "Прыжок (стан)" }],
		"s-3108-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Left Safe | Inward Waves", message_RU: "Влево сейф | Волны внутрь" },
			{ type: "spawn", func: "marker", args: [false, 90, -250, 0, 1500, true, null] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 143, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 293, 1500, 5000] }
		],
		"s-3108-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Right Safe | Outward Waves", message_RU: "Вправо сейф | Волны наружу" },
			{ type: "spawn", func: "marker", args: [false, 270, -250, 0, 1500, true, null] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 5000] }
		],
		"s-3108-1000-113-0": [{ type: "text", sub_type: "message", message: "Front | Back Slam", message_RU: "Передний | Задний" }],
		"s-3108-1000-115-0": [{ type: "text", sub_type: "message", message: "Spinning Attack", message_RU: "Круговая" }],
		"s-3108-1000-119-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Задний" }],
		"s-3108-1000-120-0": [{ type: "text", sub_type: "message", message: "Energy Beam", message_RU: "Волна" }],
		"s-3108-1000-204-0": [{ type: "text", sub_type: "message", message: "Energy Beam", message_RU: "Волна" }],
		"s-3108-1000-206-0": [{ type: "text", sub_type: "message", message: "Orbs", message_RU: "Шары" }],
		"s-3108-1000-207-0": [{ type: "text", sub_type: "message", message: "Double Waves", message_RU: "Двойные волны" }],
		"s-3108-1000-309-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }],
		"s-3108-1000-310-0": [{ type: "text", sub_type: "message", message: "Puddles", message_RU: "Лужи" }],
		"s-3108-1000-311-0": "s-3108-1000-310-0",
		"s-3108-1000-312-0": "s-3108-1000-310-0",
		"s-3108-1000-313-0": "s-3108-1000-310-0",
		"s-3108-1000-314-0": "s-3108-1000-310-0",
		"s-3108-1000-315-0": [{ type: "text", sub_type: "message", message: "Pushback (Kaia)", message_RU: "Откид (кайа)" }],
		"s-3108-1000-322-0": [
			{ type: "text", sub_type: "message", message: "Blue Debuff Left", message_RU: "Синий дебаф слева" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 3000] }
		],
		"s-3108-1000-323-0": [
			{ type: "text", sub_type: "message", message: "Red Debuff Left", message_RU: "Красный дебаф слева" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 3000] }
		],
		"s-3108-1000-400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_RU: "Копии: волны" }],
		"s-3108-1000-401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_RU: "Копии: круговые" }],

		"ab-3108-1000-31083063": [{ type: "func", func: stacks_level_event }],
		"ab-3108-1000-31083064": [{ type: "func", func: stacks_level_event }],
		"s-3108-1000-209-0": [
			{ type: "text", sub_type: "message", message: "Pushback!", message_RU: "Откид!" },
			{ type: "func", func: () => stack_level = 0 }
		],
		"s-3108-1000-211-0": "s-3108-1000-209-0"
	};
};