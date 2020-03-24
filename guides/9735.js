// RK-9 Kennel
//
// made by michengs

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	"s-735-1000-111-0": [{"type": "text","sub_type": "message","message": "BACK ATTACK","message_RU": "Удар назад"}],
	"s-735-1000-112-0": [{"type": "text","sub_type": "message","message": "BACK ATTACK","message_RU": "Удар назад"}],
	"s-735-1000-205-0": [{"type": "text","sub_type": "message","message": "wind","message_RU": "Ветер!!！"}],
	"s-735-1000-304-0": [{"type": "text","sub_type": "message","message": "OUT","message_RU": "ОТ НЕГО"}],
	"s-735-1000-305-0": [{"type": "text","sub_type": "message","message": "IN","message_RU": "К НЕМУ"}],
	"s-735-1000-306-0": [{"type": "text","sub_type": "message","message": "Incoming Summon","message_RU": "Бомбы!!!"}],
	"s-735-1000-307-0": [{"type": "text","sub_type": "message","message": "PULL","message_RU": "Стяжка!!!"}],
	"s-735-1000-309-0": [
		{"type": "text","sub_type": "message","message": "Four missile launches were initiated","message_RU": "Запуск 4 ракет!!!" },
		{"type": "text","sub_type": "message","delay": 7000,"message": "5", "message_RU": "5"},
		{"type": "text","sub_type": "message","delay": 8000,"message": "4", "message_RU": "4"},
		{"type": "text","sub_type": "message","delay": 9000,"message": "3", "message_RU": "3"},
		{"type": "text","sub_type": "message","delay": 10000,"message": "2", "message_RU": "2"},
		{"type": "text","sub_type": "message","delay": 11000,"message": "1", "message_RU": "1"},
		{"type": "text","sub_type": "message","delay": 12000,"message": "JUMP", "message_RU": "Прыгай!!!"}
	],

	// 2 BOSS
	"s-735-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_RU": "Пила (Эвейд)"}],
	"s-735-2000-108-0": [{"type": "text","sub_type": "message","message": "back","message_RU": "Откид назад"}],
	"s-735-2000-301-0": [{"type": "text","sub_type": "message","message": "throws","message_RU": "Бомба"}],
	"s-735-2000-304-0": [{"type": "text","sub_type": "message","message": "OUT","message_RU": "ОТ НЕГО"}],

	// 3 BOSS
	"s-735-3000-116-0": [{"type": "text","sub_type": "message","message": "RIGHT →↘","message_RU": "Справа"}],
	"s-735-3000-119-0": [{"type": "text","sub_type": "message","message": "RIGHT →↘","message_RU": "Справа"}],
	"s-735-3000-118-0": [{"type": "text","sub_type": "message","message": "LEFT ←↙","message_RU": "Слева"}],
	"s-735-3000-117-0": [{"type": "text","sub_type": "message","message": "LEFT ←↙","message_RU": "Слева"}],
	"s-735-3000-129-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "dodge","message_RU": "Эвейд"}],
	"s-735-3000-321-0": [
		{"type": "text","sub_type": "message","message": "SHIELD!","message_RU": "ЩИТ!!!" },
		{"type": "text","sub_type": "message","delay": 90000,"message": "After 10s SHIELD! ", "message_RU": "Через 10 сек. ЩИТ!!"}
	],
	"s-735-3000-324-0": [{"type": "text","sub_type": "message","message": "get out↓","message_RU": "Эвейд"}]
};