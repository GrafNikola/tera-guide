// Corrupted Skynest
//
// made by michengs

const {SpawnVector, SpawnCircle, SpawnSemicircle} = require("../lib");

let player, entity, library, effect;
let print = true;
let debuff = null;
let timer1;
let timer2;
let timer3;
let timer4;
let timer5;
let qbacting = null;
let blue = false;
let red = false;

//SpawnCircle
//let degrees = degree;

const CK_TipMsg =
{
	0: {msgt: 'IN',  msg: 'К НЕМУ'},
	1: {msgt: 'OUT', msg: 'ОТ НЕГО'}
};
const debuff_TipMsg =
{
	0: {msgt: 'Ready to get RED',  msg: 'Готовность к переключению на красный'},
	1: {msgt: 'Ready to get BLUE', msg: 'Готовность к переключению на синий'}
};
const boss_skill =
{
	213: {msg: 'Лево',  msgt: 'Left'},
	214: {msg: 'Право', msgt: 'Right'},
	212: {msg: 'Право', msgt: 'Right'},
	215: {msg: 'Лево',  msgt: 'Left'}
};

function skilld_event(skillid, handlers, event, ent, dispatch) {
	if ([3026004,3126004,3026005,3126005].includes(skillid)) {   // //愤怒0  恐惧1
		qbacting = skillid % 2;
		//qbacting = null   
	}
	if ([3026001,3126001,3026002,3126002].includes(skillid)) {   // //蓝色0  红色1
		//debuff = skillid % 2;
		clearTimeout(timer1);
		clearTimeout(timer2);
		clearTimeout(timer3);
		clearTimeout(timer4);
		clearTimeout(timer5);
		timer1 = setTimeout(()=> {
			if (debuff != null) {
				handlers['text']({
					"sub_type": "message",
					"message": "Debuff 20s",
					"message_RU": "Дебафф 20 сек."
				});
			}
		}, 70000);
		timer2 = setTimeout(()=> {
			if (debuff != null) {
				handlers['text']({
					"sub_type": "notification",
					"message": (`${debuff_TipMsg[debuff % 2].msgt} `),
					"message_RU": (`${debuff_TipMsg[debuff % 2].msg} `)
				});
				handlers['text']({
					"sub_type": "message",
					"message": "Debuff 50s",
					"message_RU": "Дебафф 50 сек."
				});
			}
		}, 40000);
		timer3 = setTimeout(()=> {
			if (debuff != null) {
				handlers['text']({
					"sub_type": "message",
					"message": "Warning! Debuff 15s",
					"message_RU": "Дебафф 15 сек."
				});
			}
		}, 75000);
		timer4 = setTimeout(()=> {
			if (debuff != null) {
				handlers['text']({
					"sub_type": "message",
					"message": "Warning! Debuff 10s",
					"message_RU": "Дебафф 10 сек."
				});
			}
		}, 80000);
		timer5 = setTimeout(()=> {
			if (debuff != null) {
				handlers['text']({
					"sub_type": "message",
					"message": "Warning! Debuff 5s",
					"message_RU": "Дебафф 5 сек."
				});
			}
		}, 85000);
	}
	if ([213,214].includes(skillid)) {   // //蓝内
		if (debuff != null) {
			handlers['text']({
				"sub_type": "message",
				"message": (`${boss_skill[skillid].msgt} | ${CK_TipMsg[(qbacting + debuff +1) %2].msgt}`),
				"message_RU": (`${boss_skill[skillid].msg} | ${CK_TipMsg[(qbacting + debuff +1) %2].msg}`)
			});
			blue = true;
			red  = false;
			setTimeout(() => blue  = false, 6500);	    //6700
		}
	}
	if ([212,215].includes(skillid)) {   // //红内
		if  (debuff != null) {
			handlers['text']({
				"sub_type": "message",
				"message": (`${boss_skill[skillid].msgt} | ${CK_TipMsg[(qbacting + debuff) %2].msgt}`),
				"message_RU": (`${boss_skill[skillid].msg} | ${CK_TipMsg[(qbacting + debuff) %2].msg}`)
			});
			blue = false;
			red  = true; 
			setTimeout(() => red  = false, 6500);
		}
	}
	if (skillid === 99020020) { //死亡解除debuff
		//debuff = null;
		clearTimeout(timer1);
		clearTimeout(timer2);
	}
}
// NULL % 2 =0
// 1 % 2 =1
//0 % 2 =0
//2 % 2 =0 
let debuff_tracker_started = false;
let debuffs_targe = {
	30260001: "Огненный дебафф", // Fire debuff
	30260002: "Ледяной дебафф",  // Ice debuff
	31260001: "Огненный дебафф", // Fire debuff
	31260002: "Ледяной дебафф"   // Ice debuff
};
function start_debuff(handlers, event, entity, dispatch) {
	const abnormality_change = (added, event) => {
		if ((player.isMe(event.target) || player.playersInParty.includes(event.target.toString())) && debuffs_targe[event.id]) {
			if (added) {
				debuff = event.id;
				if (blue) {
					handlers['text']({
						"sub_type": "message",
						"message": (` ${CK_TipMsg[(qbacting + debuff +1) %2].msgt}`),
						"message_RU": (` ${CK_TipMsg[(qbacting + debuff +1) %2].msg}`)
					});
				} else if (red) {
					handlers['text']({
						 "sub_type": "message",
						 "message": (` ${CK_TipMsg[(qbacting + debuff) %2].msgt}`),
						 "message_RU": (`${CK_TipMsg[(qbacting + debuff) %2].msg}`)
					});
				}
			} else {
				debuff = null
			}
		}
	};
	if (!debuff_tracker_started) {
		dispatch.hook('S_ABNORMALITY_BEGIN', 4, abnormality_change.bind(null, true));
		dispatch.hook('S_ABNORMALITY_END', 1, abnormality_change.bind(null, false));
		debuff_tracker_started = true;
	}
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"s-3026-1000-1112-0": [{"type": "text","sub_type": "message","message": "Ice DOT","message_RU": "Лед (полоса)"}],
	"s-3026-1000-1110-0": [{"type": "text","sub_type": "message","message": "Fire DOT","message_RU": "Огонь (лужа)"}],
	"s-3026-1000-2112-0": [{"type": "text","sub_type": "message","message": "Ice DOT","message_RU": "Лед (полоса)"}],
	"s-3026-1000-2110-0": [{"type": "text","sub_type": "message","message": "Fire DOT","message_RU": "Огонь (лужа)"}],
	"s-3026-1000-1108-0": [{"type": "text","sub_type": "message","message": "Turn right (repel !!)","message_RU": "Поворот вправо (откид)"},{"type": "func","func": SpawnCircle.bind(null,912,0,0,8,440,100,2000)}],
	"s-3026-1000-2108-0": [{"type": "text","sub_type": "message","message": "Turn right (repel !!)","message_RU": "Поворот вправо (откид)"},{"type": "func","func": SpawnCircle.bind(null,912,0,0,8,440,100,2000)}],
	"s-3026-1000-1158-0": [{"type": "text","sub_type": "message","message": "Turn right (repel !!)","message_RU": "Поворот вправо (откид)"},{"type": "func","func": SpawnCircle.bind(null,912,0,0,8,440,100,2000)}],
	"s-3026-1000-2158-0": [{"type": "text","sub_type": "message","message": "Turn right (repel !!)","message_RU": "Поворот вправо (откид)"},{"type": "func","func": SpawnCircle.bind(null,912,0,0,8,440,100,2000)}],

	"s-3026-1000-1109-0": [{"type": "text","sub_type": "message","message": "Turn left (repel !!)","message_RU": "Поворот влево (откид)"},{"type": "func","func": SpawnCircle.bind(null,912,0,0,8,440,100,2000)}],
	"s-3026-1000-2109-0": [{"type": "text","sub_type": "message","message": "Turn left (repel !!)","message_RU": "Поворот влево (откид)"},{"type": "func","func": SpawnCircle.bind(null,912,0,0,8,440,100,2000)}],
	"s-3026-1000-1159-0": [{"type": "text","sub_type": "message","message": "Turn left (repel !!)","message_RU": "Поворот влево (откид)"},{"type": "func","func": SpawnCircle.bind(null,912,0,0,8,440,100,2000)}],
	"s-3026-1000-2159-0": [{"type": "text","sub_type": "message","message": "Turn left (repel !!)","message_RU": "Поворот влево (откид)"},{"type": "func","func": SpawnCircle.bind(null,912,0,0,8,440,100,2000)}],

	"s-3026-1000-1120-0": [{"type": "text","sub_type": "message","message": "together","message_RU": "Яростный рев"}],
	"s-3026-1000-2120-0": [{"type": "text","sub_type": "message","message": "together","message_RU": "Яростный рев"}],
	"s-3026-1000-1157-0": [{"type": "text","sub_type": "message","message": "change","message_RU": "Смена"},{"type": "func","func": start_debuff}],
	"s-3026-1000-2157-0": [{"type": "text","sub_type": "message","message": "change","message_RU": "Смена"},{"type": "func","func": start_debuff}],
	"s-3026-1000-1103-0": [{"type": "text","sub_type": "message","message": "Tail (Flying !!)","message_RU": "Хвост (полет)"},
						   {"type": "func","func": SpawnSemicircle.bind(null,-4/3,1,912,0,0,10,500,100,1500)},
						   {"type": "func","func": SpawnSemicircle.bind(null,-1,9/13,912,0,0,10,500,100,1500)},
						   {"type": "func","func": SpawnVector.bind(null,912,0,0,135,500,100,1500)},
						   {"type": "func","func": SpawnVector.bind(null,912,0,0,260,500,100,1500)}
	],
	"s-3026-1000-2103-0": [{"type": "text","sub_type": "message","message": "Tail (Flying !!)","message_RU": "Хвост (полет)"},
						   {"type": "func","func": SpawnSemicircle.bind(null,-4/3,1,912,0,0,10,500,100,1500)},
						   {"type": "func","func": SpawnSemicircle.bind(null,-1,9/13,912,0,0,10,500,100,1500)},
						   {"type": "func","func": SpawnVector.bind(null,912,0,0,135,500,100,1500)},
						   {"type": "func","func": SpawnVector.bind(null,912,0,0,260,500,100,1500)}
	],
	"s-3026-1000-1118-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "Прыжок"}],
	"s-3026-1000-1118-1": [{"type": "text","sub_type": "message","message": "Dodge","message_RU": "Эвейд!"}],
	"s-3026-1000-2118-0": [{"type": "text","sub_type": "message","message": "Jump","message_RU": "Прыжок"}],
	"s-3026-1000-2118-1": [{"type": "text","sub_type": "message","message": "Dodge","message_RU": "Эвейд!"}],

	"s-3026-1000-1145-0": [{"type": "text","sub_type": "message","message": "stun","message_RU": "Стан"}],
	"s-3026-1000-2145-0": [{"type": "text","sub_type": "message","message": "stun","message_RU": "Стан"}],

	// AOE лед (большой)
	"s-3026-1000-1104-0": [{"type": "text","sub_type": "message","message": "Ice storm DOTs","message_RU": "Ледяные лужи"},{"type": "func","func": SpawnCircle.bind(null,553,180,80,8,520,100,5000)}],
	"s-3026-1000-2104-0": [{"type": "text","sub_type": "message","message": "Ice storm DOTs","message_RU": "Ледяные лужи"},{"type": "func","func": SpawnCircle.bind(null,553,180,80,8,520,100,5000)}],
	// AOE огонь (большой)
	"s-3026-1000-1105-0": [{"type": "text","sub_type": "message","message": "Fire bombs","message_RU": "Огненные бомбы"},
						   {"type": "func","func": SpawnCircle.bind(null,553,135,500,10,270,100,3000)},
						   {"type": "func","func": SpawnCircle.bind(null,553,315,500,10,270,100,3250)},
						   {"type": "func","func": SpawnCircle.bind(null,553,45,500,10,270,100,3500)},
						   {"type": "func","func": SpawnCircle.bind(null,553,235,500,10,270,100,3750)},
						   {"type": "func","func": SpawnCircle.bind(null,553,90,500,10,270,100,4000)},
						   {"type": "func","func": SpawnCircle.bind(null,553,270,500,10,270,100,4250)},
						   {"type": "func","func": SpawnCircle.bind(null,553,0,500,10,270,100,4500)},
						   {"type": "func","func": SpawnCircle.bind(null,553,180,500,10,270,100,4750)}
	],
	"s-3026-1000-2105-0": [{"type": "text","sub_type": "message","message": "Fire bombs","message_RU": "Огненные бомбы"},
						   {"type": "func","func": SpawnCircle.bind(null,553,135,500,10,270,100,3000)},
						   {"type": "func","func": SpawnCircle.bind(null,553,315,500,10,270,100,3250)},
						   {"type": "func","func": SpawnCircle.bind(null,553,45,500,10,270,100,3500)},
						   {"type": "func","func": SpawnCircle.bind(null,553,235,500,10,270,100,3750)},
						   {"type": "func","func": SpawnCircle.bind(null,553,90,500,10,270,100,4000)},
						   {"type": "func","func": SpawnCircle.bind(null,553,270,500,10,270,100,4250)},
						   {"type": "func","func": SpawnCircle.bind(null,553,0,500,10,270,100,4500)},
						   {"type": "func","func": SpawnCircle.bind(null,553,180,500,10,270,100,4750)}
	],
	// AOE лед (малый)
	"s-3026-1000-1154-0": [{"type": "text","sub_type": "message","message": "Ice storm","message_RU": "Ледяной шторм"},{"type": "func","func": SpawnCircle.bind(null,553,180,80,8,520,100,5000)}],
	"s-3026-1000-2154-0": [{"type": "text","sub_type": "message","message": "Ice storm","message_RU": "Ледяной шторм"},{"type": "func","func": SpawnCircle.bind(null,553,180,80,8,520,100,5000)}],
	// AOE огонь (малый)
	"s-3026-1000-1155-0": [{"type": "text","sub_type": "message","message": "Knock down","message_RU": "Огненный столб (опрокид)"}],
	"s-3026-1000-2155-0": [{"type": "text","sub_type": "message","message": "Knock down","message_RU": "Огненный столб (опрокид)"}],

	"s-3026-1000-1206-0": [{"type": "text","sub_type": "message","message": "Jump back","message_RU": "Прыжок назад (полет)"}],
	"s-3026-1000-2206-0": [{"type": "text","sub_type": "message","message": "Jump back","message_RU": "Прыжок назад (полет)"}],
	"s-3026-1000-1206-2": [{"type": "func","func": SpawnCircle.bind(null,553,0,0,15,350,200,3000)}],
	"s-3026-1000-2206-2": [{"type": "func","func": SpawnCircle.bind(null,553,0,0,15,350,200,3000)}],
	"s-3026-1000-1153-0": [{"type": "text","sub_type": "message","message": "Tail (Flying !!)","message_RU": "Хвост (полет)"},
						   {"type": "func","func": SpawnSemicircle.bind(null,-4/3,1,912,0,0,10,500,100,1500)},
						   {"type": "func","func": SpawnSemicircle.bind(null,-1,9/13,912,0,0,10,500,100,1500)},
						   {"type": "func","func": SpawnVector.bind(null,912,0,0,135,500,100,1500)},
						   {"type": "func","func": SpawnVector.bind(null,912,0,0,260,500,100,1500)}
	],
	"s-3026-1000-2153-0": [{"type": "text","sub_type": "message","message": "Tail (Flying !!)","message_RU": "Хвост (полет)"},
						   {"type": "func","func": SpawnSemicircle.bind(null,-4/3,1,912,0,0,10,500,100,1500)},
						   {"type": "func","func": SpawnSemicircle.bind(null,-1,9/13,912,0,0,10,500,100,1500)},
						   {"type": "func","func": SpawnVector.bind(null,912,0,0,135,500,100,1500)},
						   {"type": "func","func": SpawnVector.bind(null,912,0,0,260,500,100,1500)}
	],
	//
	"s-3026-1000-1137-0": [{"type": "text","sub_type": "message","message": "Knock down","message_RU": "Опрокидывание"},{"type": "func","func": SpawnCircle.bind(null,553,0,0,2,1275,200,13000)}],
	"s-3026-1000-2137-0": [{"type": "text","sub_type": "message","message": "Knock down","message_RU": "Опрокидывание"},{"type": "func","func": SpawnCircle.bind(null,553,0,0,2,1275,200,13000)}],
	"s-3026-1000-1138-0": [{"type": "text","sub_type": "message","message": "AOE","message_RU": "AOE"}],
	"s-3026-1000-2138-0": [{"type": "text","sub_type": "message","message": "AOE","message_RU": "AOE"}],
	"s-3026-1000-1139-0": [{"type": "text","sub_type": "message","message": "60°","message_RU": "60° всем (Огонь)"}],
	"s-3026-1000-2139-0": [{"type": "text","sub_type": "message","message": "60°","message_RU": "60° всем (Огонь)"}],
	"s-3026-1000-1140-0": [{"type": "text","sub_type": "message","message": "40","message_RU":  "40° всем (Лед)"}],
	"s-3026-1000-2140-0": [{"type": "text","sub_type": "message","message": "40","message_RU":  "40° всем (Лед)"}],
	"s-3026-1000-1212-0": [{"type": "func","func": skilld_event.bind(null, 212)},{"type": "func","func": SpawnCircle.bind(null,445,0,0,8,440,200,6000)}],
	"s-3026-1000-1215-0": [{"type": "func","func": skilld_event.bind(null, 215)},{"type": "func","func": SpawnCircle.bind(null,445,0,0,8,440,200,6000)}],
	"s-3026-1000-1213-0": [{"type": "func","func": skilld_event.bind(null, 213)},{"type": "func","func": SpawnCircle.bind(null,445,0,0,8,440,200,6000)}],
	"s-3026-1000-1214-0": [{"type": "func","func": skilld_event.bind(null, 214)},{"type": "func","func": SpawnCircle.bind(null,445,0,0,8,440,200,6000)}],
	"qb-3026-1000-3026005": [{"type": "func","func": skilld_event.bind(null, 3026005)}],//吃同色恐惧
	"qb-3026-1000-3026004": [{"type": "func","func": skilld_event.bind(null, 3026004)}],//吃异色愤怒
	"qb-3026-1000-3126005": [{"type": "func","func": skilld_event.bind(null, 3126005)}],//吃同色恐惧
	"qb-3026-1000-3126004": [{"type": "func","func": skilld_event.bind(null, 3126004)}],//吃异色愤怒
	"ae-0-0-99020020": [{"type": "func","func": skilld_event.bind(null, 99020020)}],
	"am-3026-1000-30260001": [{"type": "func","func": skilld_event.bind(null, 3026001)}],//红色
	"am-3026-1000-30260002": [{"type": "func","func": skilld_event.bind(null, 3026002)}],//蓝色
	"am-3026-1000-31260001": [{"type": "func","func": skilld_event.bind(null, 3126001)}],//红色
	"am-3026-1000-31260002": [{"type": "func","func": skilld_event.bind(null, 3126002)}]//蓝色
};