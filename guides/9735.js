// RK-9 Kennel
//
// made by michengs

let player, entity, library, effect;

function applyDistance(loc, distance, degrees) {
	let r = loc.w; //(loc.w / 0x8000) * Math.PI;
	let rads = (degrees * Math.PI/180);
	let finalrad = r - rads;
	loc.x += Math.cos(finalrad) * distance;
	loc.y += Math.sin(finalrad) * distance;
	return loc;
}

function Spawnitem(item,degrees, radius, delay, times, handlers, event, entity) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	let angle =  Math.PI * degrees / 180;
	handlers['spawn']({
		"id": item,
		"delay": delay,
		"sub_delay": times,
		"distance": radius,
		"offset": angle
	}, {loc: shield_loc});
}

function Spawnitem1(item,degree,distance,angles, maxRadius, times, handlers, event, entity) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	let degrees = 360 - degree;
	applyDistance(shield_loc, distance, degrees);
	let angle = angles * Math.PI/180
	for (let radius=50 ; radius<=maxRadius; radius+=50) {
		handlers['spawn']({
			"id": item,
			"sub_delay": times,
			"distance": radius,
			"offset": angle
		}, {loc: shield_loc});
	}
}

function Spawnitem2(item,degree,distance, intervalDegrees, radius, delay, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	let degrees = 360 - degree;
	applyDistance(shield_loc, distance, degrees);
	for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
		handlers['spawn']({
			"id": item,
			"delay": delay,
			"sub_delay": times,
			"distance": radius,
			"offset": angle
		}, {loc: shield_loc});
	}
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	"s-735-1000-111-0": [{"type": "text","sub_type": "message","message": "BACK ATTACK","message_RU": "Удар назад"}],
	"s-735-1000-112-0": [{"type": "text","sub_type": "message","message": "BACK ATTACK","message_RU": "Удар назад"}],
	"s-735-1000-205-0": [{"type": "text","sub_type": "message","message": "Wind","message_RU": "Ветер!!！"}],
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
	"s-735-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Front","message_RU": "Пила (Эвейд)"}],
	"s-735-2000-105-0": [{"type": "text","sub_type": "message","message": "360","message_RU": "Крутилка (откид)"},{"type": "func","func": Spawnitem2.bind(null,553,0,0,10,250,100,4000)}],
	"s-735-2000-108-0": [{"type": "text","sub_type": "message","message": "Back","message_RU": "Откид назад"}],
	"s-735-2000-301-0": [{"type": "text","sub_type": "message","message": "Throws","message_RU": "Бомба"}],
	"s-735-2000-304-0": [{"type": "text","sub_type": "message","message": "OUT","message_RU": "ОТ НЕГО"}],
	"s-735-2007-307-0": [
		{"type": "func","func": Spawnitem1.bind(null,912,0,0,0,500,12000)},
		{"type": "func","func": Spawnitem1.bind(null,912,0,0,90,500,12000)},
		{"type": "func","func": Spawnitem1.bind(null,912,0,0,180,500,12000)},
		{"type": "func","func": Spawnitem1.bind(null,912,0,0,270,500,12000)}
	],

	// 3 BOSS
	"s-735-3000-116-0": [{"type": "text","sub_type": "message","message": "RIGHT →↘","message_RU": "Справа"},
		{"type": "func","func": Spawnitem.bind(null,553,120,250,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,130,240,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,140,230,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,150,220,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,160,210,0,3000)},
		{"type": "func","func": Spawnitem1.bind(null,553,170,210,180,290,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,300,250,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,310,240,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,320,230,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,330,220,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,340,210,0,3000)},
		{"type": "func","func": Spawnitem1.bind(null,553,350,210,0,290,3000)}
	],
	"s-735-3000-117-0": [{"type": "text","sub_type": "message","message": "LEFT ←↙","message_RU": "Слева"},
		{"type": "func","func": Spawnitem1.bind(null,553,10,210,0,290,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,20,210,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,30,220,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,40,230,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,50,240,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,60,250,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,240,250,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,230,240,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,220,230,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,210,220,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,200,210,0,3000)},
		{"type": "func","func": Spawnitem1.bind(null,553,190,210,180,290,3000)}
	],
	"s-735-3000-118-0": [{"type": "text","sub_type": "message","message": "LEFT ←↙","message_RU": "Слева"},
		{"type": "func","func": Spawnitem1.bind(null,553,10,210,0,290,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,20,210,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,30,220,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,40,230,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,50,240,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,60,250,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,240,250,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,230,240,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,220,230,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,210,220,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,200,210,0,3000)},
		{"type": "func","func": Spawnitem1.bind(null,553,190,210,180,290,3000)}
	],
	"s-735-3000-119-0": [{"type": "text","sub_type": "message","message": "RIGHT →↘","message_RU": "Справа"},
		{"type": "func","func": Spawnitem.bind(null,553,120,250,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,130,240,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,140,230,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,150,220,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,160,210,0,3000)},
		{"type": "func","func": Spawnitem1.bind(null,553,170,210,180,290,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,300,250,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,310,240,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,320,230,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,330,220,0,3000)},
		{"type": "func","func": Spawnitem.bind(null,553,340,210,0,3000)},
		{"type": "func","func": Spawnitem1.bind(null,553,350,210,0,290,3000)}
	],
	"s-735-3000-129-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Dodge","message_RU": "Эвейд"}],
	"s-735-3000-305-0": [{"type": "func","func": Spawnitem2.bind(null,553,0,0,8,300,100,7000)}],
	"s-735-3000-321-0": [
		{"type": "text","sub_type": "message","message": "SHIELD!","message_RU": "ЩИТ!!!" },
		{"type": "text","sub_type": "message","delay": 90000,"message": "After 10s SHIELD! ", "message_RU": "Через 10 сек. ЩИТ!!"}
	],
	"s-735-3000-324-0": [{"type": "text","sub_type": "message","message": "Get OUT↓","message_RU": "Эвейд"}]
};