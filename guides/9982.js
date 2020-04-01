// Grotto of Lost Souls (Hard)
//
// made by michengs

const {SpawnMarker, SpawnVector, SpawnCircle} = require("../lib");

let notice_guide = true;
let player, entity, library, effect;
let print = true;
let rad = 300;
let power = true;
let Level = 0;
let powerMsg = null;
let notice = true;
let stepRUo = false;

/*
function SpawnVector2(item,degrees, maxRadius, times, handlers, event, entity) {
	let shield_loc = entity['loc'].clone();
	let shield = entity['loc'].clone();
		shield_loc.w  = entity['loc'].w;
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

function SpawnMarker2( degrees, radius, times, handlers, event, entity ) {	
	let shield_loc = shield = entity['loc'].clone();
	shield_loc.w = shield.w = entity['loc'].w;	
		let X = Math.pow((-95703 - shield.x), 2),
			Y = Math.pow((144980 - shield.y), 2),
			C = Math.pow(X+Y, 0.5);  
	if (C < 500) {
		if (radius > 105) { return; } else { radius = 105 }
	}
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
}
*/

function start_boss() {
	power = false;
	Level = 0;
	notice = true;
	powerMsg = null;
	stepRUo = false ;
	rad = 300;
	print = true;
}

function skilld_event(skillid, handlers, event, ent, dispatch) {
	if (!notice) return;
	if (notice && [118, 139, 141, 150, 152].includes(skillid)) {
		notice = false;
		setTimeout(() => notice = true, 4000);
	}
	if (skillid === 300) power = true, Level = 0, powerMsg = null;
	if (skillid === 360 || skillid === 399) Level = 0;	
	if (power && [118, 143, 145, 146, 144, 147, 148, 154, 155, 161, 162, 213, 215].includes(skillid)) {
		Level++;
		//powerMsg = '<font color="#FF0000">(' + Level + ') </font> ';
		powerMsg = `{` + Level + `} `;

		if (Level == 4) {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Полностью заряжен!!!",
				"message": "fully charged!!"
			});
			handlers['text']({
				"sub_type": "notification",
				"message_RU": "Полностью заряжен!!!",
				"message": "fully charged!!"
			});
		} else if (Level== 2 && stepRUo) {
			handlers['text']({
				"sub_type": "message",
				"message_RU": "Полностью заряжен!!!",
				"message": "fully charged!!"
			});	
			handlers['text']({
				"sub_type": "notification",
				"message_RU": "Полностью заряжен!!!",
				"message": "fully charged!!"
			});
		}
		if (powerMsg !== null &&  skillid !== 399) {
			if (!stepRUo &&  Level !== 4) {
				handlers['text']({
					"sub_type": "message",
					"message_RU": powerMsg,
					"message": powerMsg
				});
			}
			if (stepRUo &&  Level !== 2) {
				handlers['text']({
					"sub_type": "message",
					"message_RU": powerMsg,
					"message": powerMsg
				});
			}
		}
	}
	if ( skillid === 399){
		stepRUo = true ;
	}
}

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

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"h-982-3000-30": [{"type": "func","func": start_3boss40}], 
	/*"s-982-3022-101-0": [{"type": "func","func": SpawnVector2.bind(null,912,0,420,8000)},
						 {"type": "func","func": SpawnMarker2.bind(null,0,105,8000)},
						 {"type": "func","func": SpawnMarker2.bind(null,0,210,8000)},
						 {"type": "func","func": SpawnMarker2.bind(null,0,315,8000)},
						 {"type": "func","func": SpawnMarker2.bind(null,0,420,8000)}
	],*/

	// 1 BOSS
	"s-982-1000-106-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Heavy","message_RU": "Тяжелый удар"}],
	"s-982-1000-107-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "Pushback","message_RU": "Откид (конус)"},
						 {"type": "text","class_position":"heal","sub_type": "message","message": "Pushback","message_RU": "Откид (кайя)"}
	],
	"s-982-1000-108-0": [{"type": "text","class_position":"dps","sub_type": "message","message_RU": "Байт (подет)"},
						 {"type": "text","class_position":"heal","sub_type": "message","message_RU": "Байт (подлет)"}
	],
	"s-982-1000-109-0": [{"type": "text","sub_type": "message","message": "Rocks (Small)","message_RU": "Камни (малые)"}],
	"s-982-1000-110-0": [{"type": "text","sub_type": "message","message": "Rocks (Large)","message_RU": "Камни (большие)"}],
	"s-982-1000-301-0": [{"type": "text","sub_type": "message","message": "Flower stuns","message_RU": "Оглушающие цветы"}],
	"s-982-1000-307-0": [{"type": "text","class_position":"dps","sub_type": "message","message_RU": "Клетка"},
						 {"type": "text","class_position":"heal","sub_type": "message","message_RU": "Клетка"}
	],
	"s-982-1000-309-0": [{"type": "text","sub_type": "message","message": "1 flower","message_RU": "1 цветок!"}],
	"s-982-1000-310-0": [{"type": "text","sub_type": "message","message": "2 flower","message_RU": "2 цветка!"}],
	"s-982-1000-116-0": [{"type": "text","sub_type": "message","message": "Big AoE attack!!","message_RU": "AOE!!" }],
	"s-982-1000-312-0": [{"type": "text","sub_type": "message","message": "Golden flower!!","message_RU": "Золотой цветок!!"}],

	// 2 BOSS
	"s-982-2000-105-0": [{"type": "text","sub_type": "message","message": "Spin","message_RU": "Кувырок"}],
	"s-982-2000-113-0": [{"type": "text","sub_type": "message","message": "Stun inc","message_RU": "Стан"}],
	"s-982-2000-114-0": [{"type": "text","sub_type": "message","message": "Get IN","message_RU": "К нему"},{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,15,260,0,3000)}],
	"s-982-2000-116-0": [{"type": "text","sub_type": "message","message": "Front then Back","message_RU": "Вперед | Назад"},
						 {"type": "func","func": SpawnVector.bind(null,553,0,0,270,500,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,553,180,0,90,500,0,5000)}
	],
	"s-982-2000-301-0": [{"type": "text","sub_type": "message","message": "↓ Get OUT + dodge","message_RU": "ОТ НЕГО | Эвейд"},{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,15,260,0,3000)}],
	"s-982-2000-302-0": [{"type": "text","sub_type": "message","message": "↑ Get IN + dodge","message_RU": "К НЕМУ | Эвейд"},{"type": "func","func": SpawnCircle.bind(null,false,553,0,0,15,260,0,3000)}],

	// 3 БОСС
	"h-982-3000-99": [{"type": "func","func": start_boss}],
	"s-982-3000-118-0": [{"type": "text","sub_type": "message","message": "Front triple","message_RU": "Передняя комба"},{"type": "func","func": skilld_event.bind(null, 118)}],
	"s-982-3000-143-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←←","message_RU": "Слева сзади"},{"type": "func","func": skilld_event.bind(null, 143)}],
	"s-982-3000-145-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←←","message_RU": "Слева сзади"},{"type": "func","func": skilld_event.bind(null, 145)}],
	"s-982-3000-146-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←← (pulses)","message_RU": "Слева сзади (бублик)"},
						 {"type": "func","func": SpawnMarker.bind(null,false,215,370,0,8000,true,null)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,215,370,15,160,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,215,370,12,320,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,215,370,10,480,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,215,370,8,640,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,215,370,6,800,2500,8000)},
						 {"type": "func","func": skilld_event.bind(null, 146)}
	],
	"s-982-3000-154-0": [{"type": "text","sub_type": "message","message": "←← Left rear ←← (pulses)","message_RU": "Слева сзади (бублик)"},
						 {"type": "func","func": SpawnMarker.bind(null,false,215,370,0,8000,true,null)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,215,370,15,160,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,215,370,12,320,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,215,370,10,480,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,215,370,8,640,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,215,370,6,800,2500,8000)},
					 	{"type": "func","func": skilld_event.bind(null, 154)}  
	],
	"s-982-3000-144-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→","message_RU": "Справа сзади"},{"type": "func","func": skilld_event.bind(null, 144)}],
	"s-982-3000-147-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→","message_RU": "Справа сзади"},{"type": "func","func": skilld_event.bind(null, 147)}],
	"s-982-3000-148-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→ (pulses)","message_RU": "Справа сзади (бублик)"},
						 {"type": "func","func": SpawnMarker.bind(null,false,155,388,0,8000,true,null)}, 
						 {"type": "func","func": SpawnCircle.bind(null,false,445,155,388,15,160,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,155,388,12,320,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,155,388,10,480,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,155,388,8,640,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,155,388,6,800,2500,8000)},
						 {"type": "func","func": skilld_event.bind(null, 148)}
	],
	"s-982-3000-155-0": [{"type": "text","sub_type": "message","message": "→→ Right rear →→ (pulses)","message_RU": "Справа сзади (бублик)"},
						 {"type": "func","func": SpawnMarker.bind(null,false,155,388,0,8000,true,null)}, 
						 {"type": "func","func": SpawnCircle.bind(null,false,445,155,388,15,160,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,155,388,12,320,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,155,388,10,480,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,155,388,8,640,2500,8000)},
						 {"type": "func","func": SpawnCircle.bind(null,false,445,155,388,6,800,2500,8000)},
						 {"type": "func","func": skilld_event.bind(null, 155)}
	],
	"s-982-3000-161-0": [{"type": "text","sub_type": "message","message": "Back then Front","message_RU": "Назад | Вперед"},{"type": "func","func": skilld_event.bind(null, 161)}],
	"s-982-3000-162-0": [{"type": "text","sub_type": "message","message": "Back then Front","message_RU": "Назад | Вперед"},{"type": "func","func": skilld_event.bind(null, 162)}],
	"s-982-3000-213-0": [{"type": "text","sub_type": "message","message": "Tail","message_RU": "Хвост!!"},{"type": "func","func": skilld_event.bind(null, 213)}],
	"s-982-3000-215-0": [{"type": "text","sub_type": "message","message": "Tail!!","message_RU": "Хвост!!"},{"type": "func","func": skilld_event.bind(null, 215)}],
	"s-982-3000-139-0": [{"type": "text","sub_type": "message","message": "Left safe","message_RU": "ЛЕВО сейф"},
						 {"type": "func","func": SpawnVector.bind(null,912,90,0,0,500,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,912,270,0,180,500,0,5000)},
						 {"type": "func","func": SpawnMarker.bind(null,false,270,200,0,8000,true,null)},
						 {"type": "func","func": skilld_event.bind(null, 139)}
	],
	"s-982-3000-150-0": [{"type": "text","sub_type": "message","message": "Left safe","message_RU": "ЛЕВО сейф"},
						 {"type": "func","func": SpawnVector.bind(null,912,90,0,0,500,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,912,270,0,180,500,0,5000)},
						 {"type": "func","func": SpawnMarker.bind(null,false,270,200,0,8000,true,null)},
						 {"type": "func","func": skilld_event.bind(null, 150)}
	],
	"s-982-3000-141-0": [{"type": "text","sub_type": "message","message": "Right safe","message_RU": "ПРАВО сейф"},
						 {"type": "func","func": SpawnVector.bind(null,912,90,0,0,500,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,912,270,0,180,500,0,5000)},
						 {"type": "func","func": SpawnMarker.bind(null,false,90,200,0,8000,true,null)},
						 {"type": "func","func": skilld_event.bind(null, 141)}
	], 
	"s-982-3000-152-0": [{"type": "text","sub_type": "message","message": "Right safe","message_RU": "ПРАВО сейф"},
						 {"type": "func","func": SpawnVector.bind(null,912,90,0,0,500,0,5000)},
						 {"type": "func","func": SpawnVector.bind(null,912,270,0,180,500,0,5000)},
						 {"type": "func","func": SpawnMarker.bind(null,false,90,200,0,8000,true,null)},
						 {"type": "func","func": skilld_event.bind(null, 152)}
	],
	"s-982-3000-300-0": [{"type": "text","sub_type": "message","message": "Dodge!! (Awakening 1)","message_RU": "Эвейд!! (пробуждение 1)"},{"type": "func","func": skilld_event.bind(null, 300)}],
	"s-982-3000-399-0": [{"type": "text","sub_type": "message","message": "Dodge!! (Awakening 2)","message_RU": "Эвейд!! (пробуждение 2)"},{"type": "func","func": skilld_event.bind(null, 399)}],
	"s-982-3000-360-0": [{"type": "text","sub_type": "message","message": "Explosion!!","message_RU": "Взрыв!!" },{"type": "func","func": skilld_event.bind(null, 360)}]
};