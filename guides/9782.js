// Grotto of Lost Souls
//
// made by michengs

const {SpawnMarker, SpawnVector, SpawnCircle} = require("../lib");

let rad = 600;
let print = true;
let notice_guide = true;
let player, entity, library, effect;

function start_3boss40(handlers) {
	if (print) {
		handlers['text']({
			"sub_type": "message",
			"message": "-------- 30% --------",
			"message_RU": "-------- 30% --------"
		});
	}
	print = false;
	setTimeout(() => print = true, 10000);	
}

/*function SpawnVector2(item,degrees, maxRadius, times, handlers, event, entity) {
	let shield = entity['loc'].clone();
		shield.w = entity['loc'].w;
		let X = Math.pow((-95703 - shield.x), 2),
			Y = Math.pow((144980 - shield.y), 2),
			C = Math.pow(X+Y, 0.5);

	if (C < 500) return;

	let angle = degrees * Math.PI/180;
	for (let radius=50 ; radius<=maxRadius; radius+=50) {
		handlers['spawn']({
			"id": item,
			"sub_delay": times,
			"distance": radius,
			"offset": angle
		}, entity);
	}
}

function SpawnMarker2(degrees, radius, times, handlers, event, entity) {
	let shield_loc = entity['loc'].clone();
	let shield = entity['loc'].clone();
		shield_loc.w  = entity['loc'].w;
		shield.w = entity['loc'].w;

		let X = Math.pow((-95703 - shield.x), 2),
			Y = Math.pow((144980 - shield.y), 2),
			C = Math.pow(X+Y, 0.5);

	if (C < 500) return;

	let angle =  Math.PI * degrees / 180;
	handlers['spawn']({
		"sub_type": "build_object",
		"id": 1,
		"sub_delay": times,
		"distance": radius,
		"offset": angle,
		"ownerName": "Position",
		"message": "Position"
	}, {loc: shield_loc});
}*/

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	//"h-782-3000-30": [{"type": "func","func": start_3boss40}],
	//"s-782-3022-101-0": [{"type": "func","func": SpawnVector2.bind(null,912,0,420,8000)},
						 //{"type": "func","func": SpawnMarker2.bind(null,0,105,8000)},
						 //{"type": "func","func": SpawnMarker2.bind(null,0,210,8000)},
						 //{"type": "func","func": SpawnMarker2.bind(null,0,315,8000)},
						 //{"type": "func","func": SpawnMarker2.bind(null,0,420,8000)}
	],

	// 1 BOSS
	"s-782-1000-106-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Heavy","message_RU": "Тяжелый удар"}],
	"s-782-1000-107-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "Pushback","message_RU": "Откид (конус)"},
						 {"type": "text","class_position":"heal","sub_type": "message","message": "Pushback","message_RU": "Откид (кайя)"}
	],
	"s-782-1000-108-0": [{"type": "text","class_position":"dps","sub_type": "message","message_RU": "Байт (подлет)"},
						 {"type": "text","class_position":"heal","sub_type": "message","message_RU": "Байт (подлет)"}
	],
	"s-782-1000-109-0": [{"type": "text","sub_type": "message","message": "Rocks (Small)","message_RU": "Камни (малые)" }],
	"s-782-1000-110-0": [{"type": "text","sub_type": "message","message": "Rocks (Large)","message_RU": "Камни (большие)"}],
	"s-782-1000-301-0": [{"type": "text","sub_type": "message","message": "Flower stuns","message_RU": "Оглушающие цветы"}],
	"s-782-1000-307-0": [{"type": "text","class_position":"dps","sub_type": "message","message_RU": "Клетка"},
						 {"type": "text","class_position":"heal","sub_type": "message","message_RU": "Клетка"}
	],
	"s-782-1000-309-0": [{"type": "text","sub_type": "message","message": "1 flower","message_RU": "1 цветок!"}],
	"s-782-1000-310-0": [{"type": "text","sub_type": "message","message": "2 flower","message_RU": "2 цветка!"}],
	"s-782-1000-116-0": [{"type": "text","sub_type": "message","message": "Big AoE attack!!","message_RU": "AOE!!"}],
	"s-782-1000-312-0": [{"type": "text","sub_type": "message","message": "Golden flower!!","message_RU": "Золотой цветок!!"}],
	
	// 2 BOSS
	"s-782-2000-105-0": [{"type": "text","sub_type": "message","message": "Spin","message_RU": "Кувырок"}],
	"s-782-2000-113-0": [{"type": "text","sub_type": "message","message": "Stun inc","message_RU": "Стан"}],
	"s-782-2000-114-0": [{"type": "text","sub_type": "message","message": "Get IN","message_RU": "К нему"},{"type": "func","func": SpawnCircle.bind(null,553,0,0,15,260,0,3000)}],
	"s-782-2000-116-0": [{"type": "text","sub_type": "message","message": "Front then Back","message_RU": "Вперед | Назад"},
						 {"type": "func","func": SpawnVector.bind(null,553,0,0,270,500,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,553,180,0,90,500,0,5000)}
	],
	"s-782-2000-301-0": [{"type": "text","sub_type": "message","message": "↓ Get OUT + dodge","message_RU": "ОТ НЕГО | Эвейд"},{"type": "func","func": SpawnCircle.bind(null,553,0,0,15,260,0,3000)}],
	"s-782-2000-302-0": [{"type": "text","sub_type": "message","message": "↑ Get IN + dodge","message_RU": "К НЕМУ | Эвейд" },{"type": "func","func": SpawnCircle.bind(null,553,0,0,15,260,0,3000)}],

	// 3 BOSS
	"s-782-3000-118-0": [{"type": "text","sub_type": "message","message": "Front triple","message_RU": "Передняя комба"}],
	"s-782-3000-143-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←←","message_RU": "Слева сзади"}],
	"s-782-3000-145-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←←","message_RU": "Слева сзади"}],
	"s-782-3000-146-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←← (pulses)","message_RU": "Слева сзади (бублик)"},
						 {"type": "func","func": SpawnMarker.bind(null,215,370,0,8000,true,null)},
						 {"type": "func","func": SpawnCircle.bind(null,445,215,370,15,160,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,215,370,12,320,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,215,370,10,480,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,215,370,8,640,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,215,370,6,800,2500,8000)}
	],
	"s-782-3000-154-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←← (pulses)","message_RU": "Слева сзади (бублик)"},
						 {"type": "func","func": SpawnMarker.bind(null,215,370,0,8000,true,null)},
						 {"type": "func","func": SpawnCircle.bind(null,445,215,370,15,160,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,215,370,12,320,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,215,370,10,480,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,215,370,8,640,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,215,370,6,800,2500,8000)}
	],
	"s-782-3000-144-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→","message_RU": "Справа сзади"}],
	"s-782-3000-147-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→","message_RU": "Справа сзади"}],
	"s-782-3000-148-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→ (pulses)","message_RU": "Справа сзади (бублик)"},
						 {"type": "func","func": SpawnMarker.bind(null,155,388,8000)}, 
						 {"type": "func","func": SpawnCircle.bind(null,445,155,388,15,160,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,155,388,12,320,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,155,388,10,480,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,155,388,8,640,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,155,388,6,800,2500,8000)}
	],
	"s-782-3000-155-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→ (pulses)","message_RU": "Справа сзади (бублик)" },
						 {"type": "func","func": SpawnMarker.bind(null,155,388,0,8000,true,null)},
						 {"type": "func","func": SpawnCircle.bind(null,445,155,388,15,160,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,155,388,12,320,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,155,388,10,480,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,155,388,8,640,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,445,155,388,6,800,2500,8000)}
	],
	"s-782-3000-161-0": [{"type": "text","sub_type": "message","message": "Back then Front","message_RU": "Назад | Вперед"}],
	"s-782-3000-162-0": [{"type": "text","sub_type": "message","message": "Back then Front","message_RU": "Назад | Вперед"}],
	"s-782-3000-213-0": [{"type": "text","sub_type": "message","message": "Tail","message_RU": "Хвост!!"}],
	"s-782-3000-215-0": [{"type": "text","sub_type": "message","message": "Tail!!","message_RU": "Хвост!!"}],
	"s-782-3000-139-0": [{"type": "text","sub_type": "message","message": "Left safe","message_RU": "ЛЕВО сейф"},
						 {"type": "func","func": SpawnVector.bind(null,912,90,0,0,500,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,912,270,0,180,500,0,5000)},
						 {"type": "func","func": SpawnMarker.bind(null,270,200,0,8000,true,null)}
	],
	"s-782-3000-150-0": [{"type": "text","sub_type": "message","message": "Left safe","message_RU": "ЛЕВО сейф"},
						 {"type": "func","func": SpawnVector.bind(null,912,90,0,0,500,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,912,270,0,180,500,0,5000)},
						 {"type": "func","func": SpawnMarker.bind(null,270,200,0,8000,true,null)}
	],
	"s-782-3000-141-0": [{"type": "text","sub_type": "message","message": "Right safe","message_RU": "ПРАВО сейф"},
						 {"type": "func","func": SpawnVector.bind(null,912,90,0,0,500,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,912,270,0,180,500,0,5000)},
						 {"type": "func","func": SpawnMarker.bind(null,90,200,8000)}
	], 
	"s-782-3000-152-0": [{"type": "text","sub_type": "message","message": "Right safe","message_RU": "ПРАВО сейф"},
						 {"type": "func","func": SpawnVector.bind(null,912,90,0,0,500,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,912,270,0,180,500,0,5000)},
						 {"type": "func","func": SpawnMarker.bind(null,90,200,0,8000,true,null)}
	],
	"s-782-3000-300-0": [{"type": "text","sub_type": "message","message": "Dodge!! (Awakening 1)","message_RU": "Эвейд!! (пробуждение 1)"}],
	"s-782-3000-399-0": [{"type": "text","sub_type": "message","message": "Dodge!! (Awakening 2)","message_RU": "Эвейд!! (пробуждение 2)"}],
	"s-782-3000-360-0": [{"type": "text","sub_type": "message","message": "Explosion!!","message_RU": "Взрыв!!"}]
};