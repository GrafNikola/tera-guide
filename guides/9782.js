// Grotto of Lost Souls
//
// made by michengs

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	"s-782-1000-106-0": [{ "type": "text", "class_position":"tank", "sub_type": "message", "message": "Heavy", "message_RU": "Тяжелый удар" }],
	"s-782-1000-107-0": [
		{ "type": "text", "class_position": "dps", "sub_type": "message", "message": "Pushback", "message_RU": "Откид (конус)" },
		{ "type": "text", "class_position": "heal", "sub_type": "message", "message": "Pushback", "message_RU": "Откид (кайя)" }
	],
	"s-782-1000-108-0": [
		{ "type": "text", "class_position": "dps", "sub_type": "message", "message_RU": "Байт (подлет)" },
		{ "type": "text", "class_position": "heal", "sub_type": "message", "message_RU": "Байт (подлет)" }
	],
	"s-782-1000-109-0": [{ "type": "text", "sub_type": "message", "message": "Rocks (Small)", "message_RU": "Камни (малые)" }],
	"s-782-1000-110-0": [{ "type": "text", "sub_type": "message", "message": "Rocks (Large)", "message_RU": "Камни (большие)" }],
	"s-782-1000-301-0": [{ "type": "text", "sub_type": "message", "message": "Flower Stuns", "message_RU": "Оглушающие цветы" }],
	"s-782-1000-307-0": [
		{ "type": "text", "class_position": "dps", "sub_type": "message", "message_RU": "Клетка" },
		{ "type": "text", "class_position": "heal", "sub_type": "message", "message_RU": "Клетка" }
	],
	"s-782-1000-309-0": [{ "type": "text", "sub_type": "message", "message": "1 flower", "message_RU": "1 цветок!" }],
	"s-782-1000-310-0": [{ "type": "text", "sub_type": "message", "message": "2 flower", "message_RU": "2 цветка!" }],
	"s-782-1000-116-0": [{ "type": "text", "sub_type": "message", "message": "Big AoE attack!!", "message_RU": "AOE!!" }],
	"s-782-1000-312-0": [{ "type": "text", "sub_type": "message", "message": "Golden Flower!!", "message_RU": "Золотой цветок!!" }],
	
	// 2 BOSS
	"s-782-2000-105-0": [{ "type": "text", "sub_type": "message", "message": "Spin", "message_RU": "Кувырок" }],
	"s-782-2000-113-0": [{ "type": "text", "sub_type": "message", "message": "Stun Inc", "message_RU": "Стан" }],
	"s-782-2000-114-0": [
		{ "type": "text", "sub_type": "message", "message": "Get IN", "message_RU": "К нему" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 15, 260, 0, 3000] }
	],
	"s-782-2000-116-0": [
		{ "type": "text", "sub_type": "message", "message": "Front then Back", "message_RU": "Вперед | Назад" },
		{ "type": "spawn_func", "func": "vector", "args": [553, 0, 0, 270, 500, 0, 5000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 180, 0, 90, 500, 0, 5000] }
	],
	"s-782-2000-301-0": [
		{ "type": "text", "sub_type": "message", "message": "Get Out + Dodge", "message_RU": "ОТ НЕГО | Эвейд" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 15, 260, 0, 3000] }
	],
	"s-782-2000-302-0": [
		{ "type": "text", "sub_type": "message", "message": "Get In + Dodge", "message_RU": "К НЕМУ | Эвейд"  },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 15, 260, 0, 3000] }
	],

	// 3 BOSS
	"s-782-3000-118-0": [{ "type": "text", "sub_type": "message", "message": "Front Triple", "message_RU": "Передняя комба" }],
	"s-782-3000-143-0": [{ "type": "text", "sub_type": "message", "message": "Left rear", "message_RU": "Слева сзади" }],
	"s-782-3000-145-0": [{ "type": "text", "sub_type": "message", "message": "Left rear", "message_RU": "Слева сзади" }],
	"s-782-3000-146-0": [
		{ "type": "text", "sub_type": "message", "message": "Left rear (Pulses)", "message_RU": "Слева сзади (бублик)" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 215, 370, 0, 8000, true, null] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 215, 370, 15, 160, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 215, 370, 12, 320, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 215, 370, 10, 480, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 215, 370, 8, 640, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 215, 370, 6, 800, 2500, 8000] }
	],
	"s-782-3000-154-0": [
		{ "type": "text", "sub_type": "message", "message": "Left rear (Pulses)", "message_RU": "Слева сзади (бублик)" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 215, 370, 0, 8000, true, null] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 215, 370, 15, 160, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 215, 370, 12, 320, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 215, 370, 10, 480, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 215, 370, 8, 640, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 215, 370, 6, 800, 2500, 8000] }
	],
	"s-782-3000-144-0": [{ "type": "text", "sub_type": "message", "message": "Right Rear", "message_RU": "Справа сзади" }],
	"s-782-3000-147-0": [{ "type": "text", "sub_type": "message", "message": "Right Rear", "message_RU": "Справа сзади" }],
	"s-782-3000-148-0": [
		{ "type": "text", "sub_type": "message", "message": "Right rear (Pulses)", "message_RU": "Справа сзади (бублик)" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 155, 388, 0, 8000, true, null] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 155, 388, 15, 160, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 155, 388, 12, 320, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 155, 388, 10, 480, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 155, 388, 8, 640, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 155, 388, 6, 800, 2500, 8000] }
	],
	"s-782-3000-155-0": [
		{ "type": "text", "sub_type": "message", "message": "Right rear (Pulses)", "message_RU": "Справа сзади (бублик)"  },
		{ "type": "spawn_func", "func": "marker", "args": [false, 155, 388, 0, 8000, true, null] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 155, 388, 15, 160, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 155, 388, 12, 320, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 155, 388, 10, 480, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 155, 388, 8, 640, 2500, 8000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 155, 388, 6, 800, 2500, 8000] }
	],
	"s-782-3000-161-0": [{ "type": "text", "sub_type": "message", "message": "Back then Front", "message_RU": "Назад | Вперед" }],
	"s-782-3000-162-0": [{ "type": "text", "sub_type": "message", "message": "Back then Front", "message_RU": "Назад | Вперед" }],
	"s-782-3000-213-0": [{ "type": "text", "sub_type": "message", "message": "Tail", "message_RU": "Хвост!" }],
	"s-782-3000-215-0": [{ "type": "text", "sub_type": "message", "message": "Tail!", "message_RU": "Хвост!" }],
	"s-782-3000-139-0": [
		{ "type": "text", "sub_type": "message", "message": "Left safe", "message_RU": "ЛЕВО сейф" },
		{ "type": "spawn_func", "func": "vector", "args": [912, 90, 0, 0, 500, 0, 5000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 270, 0, 180, 500, 0, 5000] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 270, 200, 0, 8000, true, null] }
	],
	"s-782-3000-150-0": [
		{ "type": "text", "sub_type": "message", "message": "Left safe", "message_RU": "ЛЕВО сейф" },
		{ "type": "spawn_func", "func": "vector", "args": [912, 90, 0, 0, 500, 0, 5000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 270, 0, 180, 500, 0, 5000] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 270, 200, 0, 8000, true, null] }
	],
	"s-782-3000-141-0": [
		{ "type": "text", "sub_type": "message", "message": "Right safe", "message_RU": "ПРАВО сейф" },
		{ "type": "spawn_func", "func": "vector", "args": [912, 90, 0, 0, 500, 0, 5000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 270, 0, 180, 500, 0, 5000] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 90, 200, 0, 8000, true, null] }
	],
	"s-782-3000-152-0": [
		{ "type": "text", "sub_type": "message", "message": "Right safe", "message_RU": "ПРАВО сейф" },
		{ "type": "spawn_func", "func": "vector", "args": [912, 90, 0, 0, 500, 0, 5000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 270, 0, 180, 500, 0, 5000] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 90, 200, 0, 8000, true, null] }
	],
	"s-782-3000-300-0": [{ "type": "text", "sub_type": "message", "message": "Dodge! (Awakening 1)", "message_RU": "Эвейд! (пробуждение 1)" }],
	"s-782-3000-399-0": [{ "type": "text", "sub_type": "message", "message": "Dodge! (Awakening 2)", "message_RU": "Эвейд! (пробуждение 2)" }],
	"s-782-3000-360-0": [{ "type": "text", "sub_type": "message", "message": "Explosion!", "message_RU": "Взрыв!" }]
};