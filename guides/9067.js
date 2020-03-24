// Demokron Factory (Hard)
//
// made by michengs

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"s-467-46703-213-0": [{"type": "text","sub_type": "message","message": 'back attack',"message_RU": "Задняя"}],
	"s-467-46704-205-0": [{"type": "text","sub_type": "message","delay":2500,"message":  'Pushback - Iframe',"message_RU": "Откид"}],
	//"s-467-46704-206-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_RU": "206"}],
	//"s-467-46704-207-0": [{"type": "text","sub_type": "message","message":  'Throw',"message_RU": "207"}],

	"s-467-46704-208-0": [{"type": "text","sub_type": "message","message": 'laser',"message_RU": "Лазер"},
						  {"type": "text","sub_type": "message","delay": 13000,"message":  'Pushback - Iframe',"message_RU": "Откид"}
	],
	"s-467-46704-209-0": [{"type": "text","sub_type": "message","message": 'tank',"message_RU": "Танк"}],
	"s-467-46704-210-0": [{"type": "text","sub_type": "message","message": 'laser',"message_RU": "Лазер"},
						  {"type": "text","sub_type": "message","delay": 21000,"message":  'Pushback - Iframe',"message_RU": "Откид"}
	],
	"s-467-46704-211-0": [{"type": "text","sub_type": "message","message": 'Throw',"message_RU": "1 内>外扩散"},
						  {"type": "text","sub_type": "message","delay": 3000,"message":  'Throw',"message_RU": "11 闪"}
	],
	"s-467-46704-212-0": [{"type": "text","sub_type": "message","message": 'Out to in Wave',"message_RU": "2 外>内扩散"},
						  {"type": "text","sub_type": "message","delay": 3000,"message":  'Throw',"message_RU": "22 闪"}
	],
	"s-467-46704-213-0": [{"type": "text","sub_type": "message","message": 'Circle - Iframe',"message_RU": "Круг"},
						  {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_RU": "33 闪"},
						  {"type": "text","sub_type": "message","delay": 4000,"message":  'Throw',"message_RU": "333 顺"}
	],
	"s-467-46704-214-0": [{"type": "text","sub_type": "message","message": 'Circle - Iframe',"message_RU": "Круг"},
						  {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_RU": "44 闪"},
						  {"type": "text","sub_type": "message","delay": 4000,"message":  'Throw',"message_RU": "444 逆"}
	],
	"s-467-46704-215-0": [{"type": "text","sub_type": "message","message": 'Circle - Iframe',"message_RU": "Круг"},
						  {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_RU": "55 闪"}
	],
	"s-467-46704-216-0": [{"type": "text","sub_type": "message","message": 'Circle - Iframe',"message_RU": "Круг"},
						  {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_RU": "66 闪"}
	],
	"s-467-46704-217-0": [{"type": "text","sub_type": "message","message": 'Throw',"message_RU": "Круг"},
						  {"type": "text","sub_type": "message","delay": 1000,"message":  'Throw',"message_RU": "77 闪"}
	],
	"s-467-46704-219-0": [{"type": "text","sub_type": "message","message": 'Throw',"message_RU": "8 内>外+外>内扩散" },
						  {"type": "text","sub_type": "message","delay": 3000,"message":  'Throw',"message_RU": "88 闪"}
	]
};