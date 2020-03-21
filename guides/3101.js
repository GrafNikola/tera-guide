// паркин
let notice_guide = true;
let player, entity, library, effect;

	function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
    }
	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 时间）
function Spawnitem2(item,degrees,distance, intervalDegrees, radius, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
	applyDistance(shield_loc, distance, degrees);
    for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
        handlers['spawn']({
        	"id": item,
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
	
    // First boss
   // "h-3101-1000-100": [{"type": "func","func": guid_voice}],
    // 1 boss

    //"s-3101-1000-121-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_RU": "право" }],			
    //"s-3101-1000-122-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_RU": "лево" }],
	"s-3101-1000-124-0": [{"type": "text","class_position":"tank","sub_type": "msgcg","message": "Stun attack","message_RU": "Стан (фаст)"}],
	"s-3101-1000-127-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "back","message_RU": "|Полоса| (фаст)"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "back","message_RU": "|Полоса| (фаст)"}],	
	//"s-3101-1000-128-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Triple Attack","message_RU": "Комба"}],	
	"s-3101-1000-131-0": [{"type": "text","class_position":"dps","sub_type": "message","message": "Ranged DPS attention","message_RU": "Волна назад (фаст)"},
	                       {"type": "text","class_position":"heal","sub_type": "message","message": "Ranged DPS attention","message_RU": "Волна назад (фаст)"}],
    "s-3101-1000-132-0": [{"type": "text","sub_type": "message","message": "left right ←→","message_RU": "лево + право (фаст)" }],			
    "s-3101-1000-133-0": [{"type": "text","sub_type": "message","message": "Jump (Fast)","message_RU": "прыжок (фаст) " }],			
    "s-3101-1000-138-0": [{"type": "text","sub_type": "message","message": "Jump P (Fast)","message_RU": "прыжок (фаст)" }],	
    "s-3101-1000-139-0": [{"type": "text","sub_type": "message","message": "Back + Front (Fast)","message_RU": "вперед + назад (фаст)" }],
    //"s-3101-1000-141-0": [{"type": "text","class_position":"tank","sub_type": "message","message_RU": "? (慢)" }],	
	//"s-3101-1000-142-0": [{"type": "text","class_position":"tank","sub_type": "message","message_RU": "правая + левая"}],	
    "s-3101-1000-148-0": [{"type": "text","sub_type": "message","message_RU": "Правая рука (подлет)" }],		
    "s-3101-1000-149-0": [{"type": "text","sub_type": "message","message_RU": "Левая рука (подлет)" }],	
    "s-3101-1000-305-0": [{"type": "text","sub_type": "message","message": "Pizza","message_RU": "Pizza" }],		
    "s-3101-1000-313-0": [{"type": "text","sub_type": "message","message": "Circles (Slow)","message_RU": "Кольцо"},
	{"type": "func","func": Spawnitem2.bind(null,553,0,75,15,300,6000)}],		




    //2 boss
    //"s-3101-2000-101-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right left","message_RU": "правая левая" }],	
    //"s-3101-2000-102-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left right","message_RU": "левая правая" }],	
    //"s-3101-2000-103-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "spin","message_RU": "поворот" }],
    //"s-3101-2000-104-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "right","message_RU": "правая" }],
    //"s-3101-2000-105-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "front","message_RU": "вперед" }],
    //"s-3101-2000-107-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "left","message_RU": "левая" }],	
    "s-3101-2000-108-0": [{"type": "text","sub_type": "message","message": "Back attack!","message_RU": "Откид назад!" }],		
    //"s-3101-2000-109-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "quaternion Attack","message_RU": "4 комбо" }],	
    "s-3101-2000-110-0": [{"type": "text","sub_type": "message","message_RU": "?" }],			
    "s-3101-2000-114-0": [{"type": "text","sub_type": "message","message_RU": "??" }],	
	
    "s-3101-2000-116-0": [{"type": "text","sub_type": "message","message": "back","message_RU": "назад" }],	
    "s-3101-2000-150-0": [{"type": "text","sub_type": "message","message_RU": "фантом" }],	
    //"s-3101-2000-201-0": [{"type": "text","sub_type": "message","message": "back 8m","message_RU": "Движение назад 8 м" }],	
    //"s-3101-2000-202-0": [{"type": "text","sub_type": "message","message": "front 8m","message_RU": "Движение вперед 8м" }],	
	//   "s-3101-2000-203-0": [{"type": "func","func": skilld_event.bind(null, 203)}],	
	//  "s-3101-2000-204-0": [{"type": "func","func": skilld_event.bind(null, 204)}],

    //"s-3101-2000-211-0": [{"type": "text","sub_type": "message","message": "front","message_RU": "???" }],	
    //"s-3101-2000-226-0": [{"type": "text","sub_type": "message","message_RU": "????" }],	
    "s-3101-2000-228-0": [ {"type": "text","sub_type": "message","message": "Team up","message_RU": "Камни (вместе)!!!" }],
    "s-3101-2000-230-0": [{"type": "text","sub_type": "message","message": "AOE","message_RU": "AOE" }],
    "s-3101-2000-231-0": [{"type": "text","sub_type": "message","message": "OUT safe ↓","message_RU": "ОТ НЕГО"},{"type": "func","func": Spawnitem2.bind(null,553,0,0,15,300,3000)}],	
    "s-3101-2000-232-0": [{"type": "text","sub_type": "message","message": "IN safe ↑","message_RU": "К НЕМУ"},
	{"type": "func","func": Spawnitem2.bind(null,553,0,0,15,300,3000)},
	{"type": "func","func": Spawnitem2.bind(null,553,0,0,15,875,3000)}	
	],		
    "s-3101-2000-234-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_RU": "Debuffs" }],
    "s-3101-2000-235-0": [{"type": "text","sub_type": "message","message": "Debuffs","message_RU": "Debuffs" }]	
};