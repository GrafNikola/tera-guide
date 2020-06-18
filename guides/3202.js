// Draakon Arena (Hard)
//
// made by Vanq

// Stub.

let player, entity, library, effect;

let skills = {
	// Out > In
	"124-0": [{"type": "text","sub_type": "message","message": "Out > In","message_RU": "От него > К нему"}],

	// In > Out
	"121-0": [{"type": "text","sub_type": "message","message": "In > Out","message_RU": "К нему > От него"}],

	// Back Push
	"112-0": [{"type": "text","sub_type": "message","message": "Back Push","message_RU": "Удар назад"}],

	// Front Stun
	"105-0": [{"type": "text","sub_type": "message","message": "Front Stun","message_RU": "Передний стан"}],

	// Stomp + Spin
	"109-0": [{"type": "text","sub_type": "message","message": "Stomp + Spin","message_RU": "Удар + Крутилка"}],

	// Donut - Wave
	"110-0": [{"type": "text","sub_type": "message","message": "Donut | Wave","message_RU": "Бублики | Волна"}],
};

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	}
};

for (let [key, value] of Object.entries(skills)) {
	if (key.length === 5) {
		module.exports['s-3202-1000-1' + key] = value;
		module.exports['s-3202-1000-2' + key] = value;
	} else {
		module.exports[key] = value;
	}
}