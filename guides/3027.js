//Forbidden Arena
//made by michengs

let player, entity, library, effect;
let timer1;
let notices = true;
let print = true;
function  applyDistance(loc, distance, degrees) {
        let r = loc.w; //(loc.w / 0x8000) * Math.PI;
     	let	rads = (degrees * Math.PI/180);
	    let	finalrad = r - rads;
        loc.x += Math.cos(finalrad) * distance;
        loc.y += Math.sin(finalrad) * distance;
        return loc;
}


	//构建圆形范围提示    （提示标志  偏移角度 偏移距离 间隔 半径 延迟 时间）
function Spawnitem2(item,degree,distance, intervalDegrees, radius, delay, times, handlers, event, entity ) {
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;
    let	degrees = 360 - degree;	
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
	//构建直线（提示标志 偏移角度 偏移距离  角度 最远距离   时间）
function Spawnitem1(item,degree,distance,angles, maxRadius, times, handlers, event, entity) {
	
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;	
    let	degrees = 360 - degree;	
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
function Spawnitem11(item,degree,distance,angles, maxRadius, times, handlers, event, entity) {
	
	let shield_loc = entity['loc'].clone();
	shield_loc.w = entity['loc'].w;	
    let	degrees = 360 - degree;	
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

function skilld_event(skillid, handlers, event, ent, dispatch) {	

if ([90,60,30,351].includes(skillid)) {   // //Щит
//debuff = skillid % 2;	
//clearTimeout(timer1);
if (print) {
print = false;
setTimeout(() => print = true, 15000);	
if (skillid == 351) {
handlers['text']({
"sub_type": "message",
"message": "SHIELD!",
"message_RU": "Щит!!!"
});	
 } else {
handlers['text']({
"sub_type": "message",
"message_RU": "Готов сломать щит"
});	 	 
  }		
 }
if (notices) {
clearTimeout(timer1);
notices = false;
setTimeout(() => notices = true, 5000);	
 timer1 = setTimeout(()=>{
	 
handlers['text']({
"sub_type": "message",
"message_RU": "Отсчет до щита"
});	

  }, 85000);   
 }  
 }
}
module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},
	
	
	
	// boss位置 ，角度， 持续时间,类型， 偏角       ，偏距，       ，最小半径   ，角度范围 ，间距      ，半径         
	//(distance, angle, duration, type, offsetAngle, offsetDistance, minRadius, maxRadius, rotateAngle, rotateRadius) 
	

"h-3027-1000-90": [{"type": "func","func": skilld_event.bind(null, 90)}],
	
"h-3027-1000-60": [{"type": "func","func": skilld_event.bind(null, 60)}],	
	
"h-3027-1000-30": [{"type": "func","func": skilld_event.bind(null, 30)}],	
	
	
	
	
	
	
	
	
	
"s-3027-1001-255-0": [{"type": "text","sub_type": "message","message": "!","message_RU": "！"},{"type": "func","func": Spawnitem1.bind(null,912,0,0,0,3000,5000)}],	//0
"s-3027-1002-256-0": [{"type": "text","sub_type": "message","message": "!","message_RU": "！"},{"type": "func","func": Spawnitem11.bind(null,912,0,0,0,3000,5000)}],	//60
	
	
	
"s-3027-1000-108-0": [{"type": "text","class_position":"tank","sub_type": "message","message": "Strike(slow)","message_RU": "Меч (медленный)"}],




"s-3027-1000-112-0": [{"type": "text","sub_type": "message","message": "Back | Strike","message_RU": "Прыжок назад | Нож"}],     //连招
"s-3027-1000-130-0": [{"type": "text","sub_type": "message","message": "random aggro","message_RU": "Таргет"}],

"s-3027-1000-134-0": [{"type": "text","sub_type": "message","message": "turn around","message_RU": "Поворот"}],    //连招
"s-3027-1000-134-1": [{"type": "text","sub_type": "message","message": "back","message_RU": "Удар назад"}],   
"s-3027-1000-147-0": [{"type": "text","sub_type": "message","message": "back","message_RU": "Удар"}],

"s-3027-1000-355-0": [{"type": "text","sub_type": "message","message": "Eviscerate","message_RU": "Потрошение"}],  //连招  右侧上
"s-3027-1000-114-0": [{"type": "text","sub_type": "message","message": "Split strike","message_RU": "Разделяющий удар"}],

"s-3027-1000-350-0": [{"type": "text","sub_type": "message","message": "Donuts","message_RU": "Стяжка | Бублики"},{"type": "text","sub_type": "message","delay": 3750,"message":  'Waves soon...',"message_TW": "進"},{"type": "func","func": Spawnitem2.bind(null,445,0,0,12,240,200,5000)},{"type": "func","func": Spawnitem2.bind(null,445,0,0,8,480,200,5000)}],


"s-3027-1000-357-0": [{"type": "text","sub_type": "message","message": "get out","message_RU": "Стяжка | От"}],    //连招

	
"s-3027-1000-135-0": [{"type": "text","sub_type": "message","message": "Overhand Strike","message_RU": "Меч (медленный)"}],	   //连招		
	
	
"s-3027-1000-111-0": [{"type": "text","sub_type": "message","message": "stun | Strike","message_RU": "Стан | Меч (медленный)"}],	   //连招  左侧		

	
"s-3027-1000-136-0": [{"type": "text","sub_type": "message","message": "2x360°","message_RU": "2 удара | Меч (медленный)"}],	   //连招
"s-3027-1000-144-0": [{"type": "text","sub_type": "message","message": "Sword","message_RU": "Меч"}],		
	
	
"s-3027-1000-356-0": [{"type": "text","sub_type": "message","message": "Teleport","message_RU": "Телепорт(таргет)"}], ////连招	点名					  
	
	
"s-3027-1000-117-0": [{"type": "text","sub_type": "message","message": "Teleport","message_RU": "Телепорт(таргет)"}],//连招	 随机


"s-3027-1000-145-0": [{"type": "text","sub_type": "message","message": "3x360°","message_RU": "3 удара | прыжок"}], //连招  3连挥刀 
"s-3027-1000-139-0": [{"type": "text","sub_type": "message","message": "！","message_RU": "！"}],
"s-3027-1000-140-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "прыжок"},{"type": "func","func": Spawnitem2.bind(null,445,0,180,8,460,200,3000)}],	

"s-3027-1000-151-0": [{"type": "text","sub_type": "message","message": "Three chop","message_RU": "3 удара | меч"}],  //连招  2次点
"s-3027-1000-149-0": [{"type": "text","sub_type": "message","message": "random aggro","message_RU": "таргет"}],
"s-3027-1000-149-1": [{"type": "text","sub_type": "message","message": "back Teleport","message_RU": "телепорт назад"}],
"s-3027-1000-148-0": [{"type": "text","sub_type": "message","message": "random aggro","message_RU": "таргет"}],
"s-3027-1000-148-1": [{"type": "text","sub_type": "message","message": "Teleport","message_RU": "телепорт"}],

"s-3027-1000-141-0": [{"type": "text","sub_type": "message","message": "round | Strike ","message_RU": "круглый | меч"}], //连招  3连挥刀 
"s-3027-1000-146-0": [{"type": "text","sub_type": "message","message": "Eviscerate | Strike","message_RU": "Потрошение | меч"}],
				  
"s-3027-1000-142-0": [{"type": "text","sub_type": "message","message": "Eviscerate | Strike","message_RU": "Потрошение | меч"}], //连招  3连挥刀 
"s-3027-1000-143-0": [{"type": "text","sub_type": "message","message": "Overhand Strike","message_RU": "меч"}],					  
					  
"s-3027-1000-116-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "прыжок)"}],	
"s-3027-1000-116-1": [{"type": "text","sub_type": "message","message": "dodge","message_RU": "эвейд!!"},{"type": "func","func": Spawnitem2.bind(null,445,0,180,8,460,200,3000)}],

"s-3027-1000-402-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "прыжок)"}],
"s-3027-1000-109-0": [{"type": "text","sub_type": "message","message": "Forward Jump","message_RU": "Прыжок вперед"}],
					  
"s-3027-1000-351-0": [{"type": "text","sub_type": "message","message": "SHIELD!","message_RU": "Щит!!"},{"type": "func","func": skilld_event.bind(null, 351)}],

"s-3027-1000-401-0": [{"type": "text","sub_type": "message","message": "AOE","message_RU": "АОЕ!!!!"}]				
	 
};