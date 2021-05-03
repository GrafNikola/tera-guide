// Commander's Residence
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {

	let print_stun = true;

	return {
		// Maknakh
		"nd-3030-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-1000-117-0": [{ type: "text", sub_type: "message", message: "Left Hand Attack", message_RU: "Левая рука" }],
		"s-3030-1000-114-0": [{ type: "text", sub_type: "message", message: "Push (Repel)", message_RU: "Откид" }],
		"s-3030-1000-303-0": [{ type: "text", sub_type: "message", message: "Meteors AOE", message_RU: "Метеоры (АОЕ)" }],
		"s-3030-1000-120-0": [{ type: "text", sub_type: "message", message: "Push Front", message_RU: "Откид вперед" }],
		"s-3030-1000-104-0": [{ type: "text", sub_type: "message", message: "Fire Front", message_RU: "Передний огонь" }],
		"s-3030-1000-113-0": [{ type: "text", sub_type: "message", message: "Circle AOE Front", message_RU: "Передний АОЕ круг" }],
		"s-3030-1000-108-0": [{ type: "text", sub_type: "message", message: "Frontal Thorns", message_RU: "Передние шипы" }],
		"s-3030-1000-305-0": [{ type: "text", sub_type: "message", message: "Circle AOE Front", message_RU: "Передний АОЕ круг" }],
		"s-3030-1000-301-0": [{ type: "text", sub_type: "message", message: "Hit Frontal | Stun", message_RU: "Передний удар | Стан" }],
		"s-3030-1000-307-0": [{ type: "text", sub_type: "message", message: "Tail Stun", message_RU: "Хвост (стан)" }],
		"s-3030-1000-112-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок" }],
		"s-3030-1000-105-0": [{ type: "text", sub_type: "message", message: "Front Fire", message_RU: "Передний огонь" }],
		"am-3030-1000-99000580": [{ type: "text", sub_type: "message", message: "Hit Thorns", message_RU: "Шипы" }],
		// "s-3030-1000-203-0": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ" }],
		// "s-3030-1000-108-0": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ" }],

		// LB-1
		"nd-3030-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-2000-309-0": [
			{ type: "text", sub_type: "message", message: "AOE circles | Stun", message_RU: "АОЕ круги | Стан", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 4000 }
		],
		"s-3030-2000-302-0": [
			{ type: "text", sub_type: "message", message: "Circle Stun Front Combo", message_RU: "Стан круги", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 6000 }
		],
		"s-3030-2000-105-0": [
			{ type: "text", sub_type: "message", message: "Laser Frontal (Stun)", message_RU: "Лазер (стан)", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 15000 }
		],
		"s-3030-2000-103-0": [{ type: "text", sub_type: "message", message: "Hit Frontal", message_RU: "Передний удар" }],
		"s-3030-2000-101-0": [{ type: "text", sub_type: "message", message: "Claws Front", message_RU: "Когти" }],
		"s-3030-2000-104-0": [{ type: "text", sub_type: "message", message: "Front Attack | Stun", message_RU: "Атака спереди | Стан" }],
		"s-3030-2000-112-0": [{ type: "text", sub_type: "message", message: "Attack Behind (Fire)", message_RU: "Атака сзади (огонь)" }],
		"s-3030-2000-305-0": [{ type: "text", sub_type: "message", message: "Circles AOE", message_RU: "Круги АОЕ" }],
		"s-3030-2000-109-0": [{ type: "text", sub_type: "message", message: "Laser Back | Stun", message_RU: "Лазер назад | Стан" }],
		"s-3030-2000-301-0": [{ type: "text", sub_type: "message", message: "Turn Debuff", message_RU: "Разворот (дебаф)" }]
	};
};