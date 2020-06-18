// Draakon Arena (Hard)
//
// made by michengs / Vanq

// Stub.

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// Front Stun
	"s-3202-1000-105-0": [{"type": "text","sub_type": "message","message": "Front Stun","message_RU": "Передний стан"}],

	// Stomp + Spin
	"s-3202-1000-109-0": [{"type": "text","sub_type": "message","message": "Stomp + Spin","message_RU": "Удар + Крутилка"}],

	// Donut - Wave
	"s-3202-1000-110-0": [{"type": "text","sub_type": "message","message": "Donut | Wave","message_RU": "Бублики | Волна"}],

	// Back Push
	"s-3202-1000-112-0": [{"type": "text","sub_type": "message","message": "Back Push","message_RU": "Удар назад"}],

	// In > Out
	"s-3202-1000-121-0": [{"type": "text","sub_type": "message","message": "In > Out","message_RU": "К нему > От него"}],

	// Out > In
	"s-3202-1000-124-0": [{"type": "text","sub_type": "message","message": "Out > In","message_RU": "От него > К нему"}],
};