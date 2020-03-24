// Velik's Sanctuary (Hard)
//
// made by michengs

let notice_guide = true;
let player, entity, library, effect;

function single_stage_callout(message, handlers, event, entity) {
	//if (entity.stage == 0) {
		handlers['text']({
			"sub_type": "message",
			"message": message,
		});
	//}
}

let rings_inout_seventhfloor = [];

for (let angle = -Math.PI; angle <= Math.PI; angle += 2 * Math.PI / 40) {
	rings_inout_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 6000,
		"distance": 250,
		"offset": angle
	});
}

let lasers_markers_seventhfloor = [];
let inverted_lasers_markers_seventhfloor = [];
let dlw_object = [];
const sign_offsets_seventhfloor = [-0.32, -0.94, -1.57, -2.2, -2.83, 2.83, 2.2, 1.57, 0.94, 0.32];

for (let offset of sign_offsets_seventhfloor) {
	const event = {
		"type": "spawn",
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": 4000,
		"distance": 450,
		"ownerName": "SAFE SPOT",
		"message": "SAFE",
		"offset": offset
	}
	lasers_markers_seventhfloor.push(event);
	inverted_lasers_markers_seventhfloor.push(event);
}

for (let distance = 175; distance <= 425; distance += 25) {
	lasers_markers_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 4000,
		"distance": distance,
		"offset": 0
	});
	lasers_markers_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 4000,
		"distance": distance,
		"offset": 1.25
	});
	lasers_markers_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 4000,
		"distance": distance,
		"offset": 2.5
	});
	lasers_markers_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 4000,
		"distance": distance,
		"offset": -2.5
	});
	lasers_markers_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 4000,
		"distance": distance,
		"offset": -1.25
	});

	inverted_lasers_markers_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 4000,
		"distance": distance,
		"offset": 0.62
	});
	inverted_lasers_markers_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 4000,
		"distance": distance,
		"offset": 1.87
	});
	inverted_lasers_markers_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 4000,
		"distance": distance,
		"offset": 3.12
	});
	inverted_lasers_markers_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 4000,
		"distance": distance,
		"offset": -1.88
	});
	inverted_lasers_markers_seventhfloor.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 4000,
		"distance": distance,
		"offset": -0.63
	});
}

const SPAWN_CIRCLES = true;
const stepone = 2 * Math.PI / 40; //40 
const steptwo = 2 * Math.PI / 60; //72 flowers in total

let SPAWNING_FIRST_CIRCLE_FLOWERS = [];
let SPAWNING_SECOND_CIRCLE_FLOWERS = [];
let SPAWNING_THIRD_CIRCLE_FLOWERS = [];

for (let angle = -Math.PI; angle <= Math.PI; angle += steptwo) {
	if (!SPAWN_CIRCLES) continue;
	SPAWNING_FIRST_CIRCLE_FLOWERS.push({
		"type": "spawn",
		"id": 553,
		"sub_delay": 6000,
		"distance": 300,
		"offset": angle
	});
	SPAWNING_SECOND_CIRCLE_FLOWERS.push({
		"type": "spawn",
		"id": 553,
		"sub_delay": 6000,
		"distance": 250,
		"offset": angle
	});
	SPAWNING_THIRD_CIRCLE_FLOWERS.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 6000,
		"distance": 200,
		"offset": angle
	});
}

for (let angle = -Math.PI; angle <= Math.PI; angle += stepone) {
	if (!SPAWN_CIRCLES) continue;
	SPAWNING_THIRD_CIRCLE_FLOWERS.push({
		"type": "spawn",
		"id": 548,
		"sub_delay": 6000,
		"distance": 350,
		"offset": angle
	});
}

for (let distance = 350; distance <= 600; distance += 25) {
	dlw_object.push({"type": "spawn","id": 548,"sub_delay": 18000,"distance": distance,"offset": 0 });
	dlw_object.push({"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 18000, "distance": 350, "offset": 0, "ownerName": "杜利温", "message": "秒杀"});
 	dlw_object.push({"type": "spawn","id": 548,"sub_delay": 18000,"distance": distance,"offset": 0.7853 });
	dlw_object.push({"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 18000, "distance": 350, "offset": 0.7853, "ownerName": "杜利温", "message": "秒杀"});
	dlw_object.push({"type": "spawn","id": 548,"sub_delay": 18000,"distance": distance,"offset": 1.5707 });
	dlw_object.push({"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 18000, "distance": 350, "offset": 1.5707, "ownerName": "杜利温", "message": "秒杀"});
	dlw_object.push({"type": "spawn","id": 548,"sub_delay": 18000,"distance": distance,"offset": 2.3561 });
	dlw_object.push({"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 18000, "distance": 350, "offset": 2.3561, "ownerName": "杜利温", "message": "秒杀"});
	dlw_object.push({"type": "spawn","id": 548,"sub_delay": 18000,"distance": distance,"offset": 3.1415 });
	dlw_object.push({"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 18000, "distance": 350, "ofset": 3.1415, "ownerName": "杜利温", "message": "秒杀"});
	dlw_object.push({"type": "spawn","id": 548,"sub_delay": 18000,"distance": distance,"offset": -0.7853 });
	dlw_object.push({"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 18000, "distance": 350, "offset": -0.7853, "ownerName": "杜利温", "message": "秒杀"});
	dlw_object.push({"type": "spawn","id": 548,"sub_delay": 18000,"distance": distance,"offset": -1.5707 });
	dlw_object.push({"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 18000, "distance": 350, "offset": -1.5707, "ownerName": "杜利温", "message": "秒杀"});
	dlw_object.push({"type": "spawn","id": 548,"sub_delay": 18000,"distance": distance,"offset": -2.3561 });
	dlw_object.push({"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 18000, "distance": 350 , "offset": -2.3561, "ownerName": "杜利温", "message": "秒杀"});
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS

	"s-981-1000-2401": [
		{"type": "text","sub_type": "message","message": "right","message_RU": "Вправо >"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 150, "offset": -2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 150, "offset": -1, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 150, "offset": -2.3},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 150, "offset": -1}
	],
	"s-981-1000-2402": [
		{"type": "text","sub_type": "message","message": "left","message_RU": "< Влево"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 150, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 150, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 150, "offset": 2.3},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 150, "offset": 1}
	],
	"s-981-1000-2304-0": [{"type": "text","sub_type": "message","message": "Flying","message_RU": "Взлет"}].concat(SPAWNING_FIRST_CIRCLE_FLOWERS),
	"s-981-1000-2303-0": [{"type": "text","sub_type": "message","message": "Spin","message_RU": "Крутилка"}],
	"s-981-1000-2113-0": [{"type": "text","sub_type": "message","message": "Front + AoEs","message_RU": "Передняя | AOE"}],
	"s-981-1000-2308-0": [{"type": "text","sub_type": "message","message": "out","message_RU": "Наружу"}],
	"s-981-1000-2309-0": [{"type": "text","sub_type": "message","message": "in","message_RU": "Внутрь"}],
	"s-981-1000-1401": [
		{"type": "text","sub_type": "message","message": "right","message_RU": "Вправо >"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 150, "offset": -2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 150, "offset": -1, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 150, "offset": -2.3},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 150, "offset": -1}
	],
	"s-981-1000-1402": [
		{"type": "text","sub_type": "message","message": "left","message_RU": "< Влево"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 150, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 150, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 150, "offset": 2.3},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 150, "offset": 1}
	],
	"s-981-1000-1304-0": [{"type": "text","sub_type": "message","message": "Flying","message_RU": "Взлет"}].concat(SPAWNING_FIRST_CIRCLE_FLOWERS),
	"s-981-1000-1303-0": [{"type": "text","sub_type": "message","message": "Spin","message_RU": "Крутилка"}],
	"s-981-1000-1113-0": [{"type": "text","sub_type": "message","message": "Front + AoEs","message_RU": "Передняя | AOE"}],
	"s-981-1000-1308-0": [{"type": "text","sub_type": "message","message": "out","message_RU": "Наружу"}],
	"s-981-1000-1309-0": [{"type": "text","sub_type": "message","message": "in","message_RU": "Внутрь"}],
	"qb-981-1000-98103": [{"type": "text","sub_type": "message","message": "点名炸石柱","message_RU": "4 点名炸石柱"}],
	"qb-981-1000-98102": [{"type": "text","sub_type": "message","message": "Run away","message_RU": "Уходи!"}],
	"qb-981-1000-98106": [{"type": "text","sub_type": "message","message": "集体炸石柱","message_RU": "6 集体炸石柱"}],


	// 2 BOSS

	// Cage Mechanic
	"s-981-2000-1503-0": [{"type": "text","sub_type": "message","message": "坦快跑远","message_RU": "1 坦快跑远"}],
	"s-981-2000-1106-0": [{"type": "text","sub_type": "message","message": "back","message_RU": "Задний"}],
	"s-981-2000-1108-0": [{"type": "text","sub_type": "message","message": "front","message_RU": "Передний"}],
	"s-981-2000-1111-0": [{"type": "text","sub_type": "message","message": "360 attack","message_RU": "Атака на 360 град."}],
	"s-981-2000-1302-0": [{"type": "text","sub_type": "message","message": "点名","message_RU": "2 点名"}],
	"s-981-2000-1121-0": [{"type": "text","sub_type": "message","message": "召唤小怪快打","message_RU": "3 召唤小怪快打"}],
	"s-981-2000-1501-0": [
		{"type": "text","sub_type": "message","message": "Identification","message_RU": "Идентификация"},
		{"type": "text","sub_type": "message","delay": 1000,"message": "3"},
		{"type": "text","sub_type": "message","delay": 2000,"message": "2"},
		{"type": "text","sub_type": "message","delay": 3000,"message": "1"}
	],
	"s-981-2000-1112-0": [{"type": "func","func": single_stage_callout.bind(null, "STAB + KNOCKUP")}],
	"s-981-2000-1130-0": [
		{"type": "text","sub_type": "message","message": "left","message_RU": "< Влево"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 2.3},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 1}
	],
	"s-981-2000-1131-0": [
		{"type": "text","sub_type": "message","message": "right","message_RU": "Вправо >"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -1, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -2.3},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -1}
	],
	"s-981-2000-1134-0": [{"type": "func","func": single_stage_callout.bind(null, "5 吃注视")}],
	"s-981-2000-1502-0": [{"type": "func","func": single_stage_callout.bind(null, "6 鉴定准备")}],
	//
	"s-981-2000-2503-0": [{"type": "text","sub_type": "message","message": "坦快跑远","message_RU": "1 坦快跑远"}],
	"s-981-2000-2106-0": [{"type": "text","sub_type": "message","message": "back","message_RU": "Задний"}],
	"s-981-2000-2108-0": [{"type": "text","sub_type": "message","message": "front","message_RU": "Передний"}],
	"s-981-2000-2111-0": [{"type": "text","sub_type": "message","message": "360 attack","message_RU": "Атака на 360 град."}],
	"s-981-2000-2121-0": [{"type": "text","sub_type": "message","message": "召唤小怪快打","message_RU": "3 召唤小怪快打"}],
	"s-981-2000-2501-0": [
		{"type": "text","sub_type": "message","message": "Identification","message_RU": "Идентификация"},
		{"type": "text","sub_type": "message","delay": 1000,"message": "3"},
		{"type": "text","sub_type": "message","delay": 2000,"message": "2"},
		{"type": "text","sub_type": "message","delay": 3000,"message": "1"}
	],
	"s-981-2000-2112-0": [{"type": "func","func": single_stage_callout.bind(null, "STAB + KNOCKUP")}],
	"s-981-2000-2130-0": [
		{"type": "text","sub_type": "message","message": "left","message_RU": "< Влево"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": 1, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 2.3},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": 1}
	],
	"s-981-2000-2131-0": [
		{"type": "text","sub_type": "message","message": "right","message_RU": "Вправо >"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -2.3, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "build_object", "id": 1, "sub_delay": 2000, "distance": 100, "offset": -1, "ownerName": "SAFE SPOT", "message": "SAFE"},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -2.3},
		{"type":"spawn", "sub_type": "item", "id": 98260, "sub_delay": 2000, "distance": 100, "offset": -1}
	],
	"s-981-2000-2134-0": [{"type": "func","func": single_stage_callout.bind(null, "5 吃注视")}],
	"s-981-2000-2502-0": [{"type": "func","func": single_stage_callout.bind(null, "6 鉴定准备")}],
	"s-981-2000-4000-0": [{"type": "text","sub_type": "alert","message": "鉴定！！！！","message_RU": "7 鉴定！！！！"}].concat(dlw_object),

	"dm-0-0-9981022": [{"type": "text","sub_type": "alert","message": "鉴定","message_RU": "8 鉴定"}],
	"dm-0-0-9981023": [{"type": "text","sub_type": "message","message": "全场鉴定","message_RU": "8 全场鉴定"}],	
	"dm-0-0-9981046": [{"type": "text","sub_type": "message","message": "(Debuffs) Closest","message_RU": "Первая: дебафф (ближние)"}],
	"dm-0-0-9981047": [{"type": "text","sub_type": "message","message": "(Circles) Spread","message_RU": "Первая: круги (отдельно)"}],
	"dm-0-0-9981048": [{"type": "text","sub_type": "message","message": "(Bombs) Gather + cleanse","message_RU": "Первая: бомбы (вместе + клинс)"}],


	// 3 BOSS
	"s-981-3000-1404-0": [{"type": "text","sub_type": "message","message": "(Debuffs) Closest","message_RU": "Дебафф (ближние)"}].concat(lasers_markers_seventhfloor),
	"s-981-3000-1405-0": [{"type": "text","sub_type": "message","message": "(Debuffs) Farthest","message_RU": "Дебафф (дальние)"}].concat(inverted_lasers_markers_seventhfloor),
	"s-981-3000-1301-0": [{"type": "text","sub_type": "message","message": "(Bombs) Gather + cleanse","message_RU": "Бомбы (вместе!) + клинс"},].concat(lasers_markers_seventhfloor),
	"s-981-3000-1302-0": [{"type": "text","sub_type": "message","message": "(Bombs) Gather + no cleanse","message_RU": "Бомбы (вместе!) + без клинса"},].concat(inverted_lasers_markers_seventhfloor),
	"s-981-3000-3103-0": [{"type": "text","sub_type": "message","message": "(Circles) Spread","message_RU": "Круги (отдельно!)"},].concat(lasers_markers_seventhfloor),
	"s-981-3000-3105-0": [{"type": "text","sub_type": "message","message": "(Circles) Gather","message_RU": "Круги (вместе!)"},].concat(inverted_lasers_markers_seventhfloor),
	"s-981-3000-1116-0": [{"type": "text","sub_type": "message","message": "Circle","message_RU": "Круг"}],
	"s-981-3000-2116-0": [{"type": "text","sub_type": "message","message": "Circle","message_RU": "Круг"}],
	"s-981-3000-1701-0": [{"type": "text","sub_type": "message","message": "back + front","message_RU": "Назад + Вперед"}],
	"s-981-3000-1113-0": [{"type": "text","sub_type": "message","message_RU": "Объявление"}],
	"s-981-3000-1151-0": [{"type": "text","sub_type": "message","message": "attention stun","message_RU": "Возможен стан"}],
	"s-981-3000-2151-0": [{"type": "text","sub_type": "message","message": "attention stun","message_RU": "Возможен стан"}],
	"s-981-3000-2113-0": [{"type": "text","sub_type": "message","message_RU": "Объявление"}],
	"s-981-3000-1152-0": [{"type": "text","sub_type": "message","message": "Stun + Back","message_RU": "Стан + Назад"}],
	"s-981-3000-2152-0": [{"type": "text","sub_type": "message","message": "Stun + Back","message_RU": "Стан + Назад"}],
	"s-981-3000-2138-0": rings_inout_seventhfloor,// 召唤安全范围250
	"s-981-3000-1138-0": rings_inout_seventhfloor,// 召唤安全范围250
	"s-981-3000-1144-0": [{"type": "text","sub_type": "message","message": "out","message_RU": "Наружу"}],
	"s-981-3000-1145-0": [{"type": "text","sub_type": "message","message": "in","message_RU": "Внутрь"}],
	"s-981-3000-1240-0": [{"type": "text","sub_type": "message","message": "Donuts","message_RU": "Бублики"}].concat(SPAWNING_THIRD_CIRCLE_FLOWERS),
	"s-981-3000-1401-0": [{"type": "text","sub_type": "message","message": "Plague/Regress","message_RU": "Регресс!!"}],
	"s-981-3000-1402-0": [{"type": "text","sub_type": "message","message": "Sleep","message_RU": "Слип!!"}]
};