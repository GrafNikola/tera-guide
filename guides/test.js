// Test Guide
//
// COMPLEX GUIDE FUNCTIONALITY TESTS

// Version: 1.0a

// Commands usage example:
//
//   /8 guide event load test
//   /8 guide event trigger spawn
//

module.exports = (dispatch, handlers, guide, lang) => {

	// Test Spawn library import
	const { 
		MARKER_ITEM,
		HIGHLIGHT_ITEM,
		HIGHLIGHT_ITEM_BLUE,
		HIGHLIGHT_ITEM_PURPLE,
		HIGHLIGHT_ITEM_RED
	} = module.parent.exports.spawn;

	// Test difinition guide type
	guide.type = SP; // SP, ES, false


	/** FUNC EVENTS **/

	// Func test event
	function func_event(arg, ent, event) {
		if (typeof arg === "string")
			handlers.text({ sub_type: "message", message: `Call with arg: ${arg}`, message_RU: `Вызов с аргументом: ${arg}` });
		else
			handlers.text({ sub_type: "message", message: "Call without args", message_RU: "Вызов без аргументов" });
	}

	// Text test event
	function text_event(ent, event) {
		handlers.text({ sub_type: "message", message: "Text handler", message_RU: "Обработчик text" });
	}

	// Spawn test event
	function spawn_event(ent, event) {
		handlers.spawn({ func: "circle", args: [true, 553, 0, 0, 12, 250, 0, 2000] });
	}

	// Marker test event
	function marker_event(ent, event) {
		// Add marker with long duration
		handlers.marker({ id: ent.gameId, color: "yellow", sub_delay: 50000 });

		// Remove all markers
		handlers.marker_remove_all({ delay: 2000 });
	}

	// Test event
	function test_event() {
		// Event handler
		handlers.event([
			{ type: "text", sub_type: "message", message: "Event handler", message_RU: "Обработчик event" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 250, 0, 2000] },
			{ type: "marker", color: "blue", delay: 0, sub_delay: 5000 },
		]);
	}


	return {

		/** TEST FUNC EVENTS **/

		"func" : [
			{ type: "func", func: func_event, args: ["My Argument"] },
			{ type: "func", func: func_event, delay: 3000 },
		],


		/** LIST EVENTS **/

		"event" : [
			{ type: "func", func: test_event },
		],


		/** TEST TEXT EVENTS **/

		// Native
		"text" : [
			{ type: "text", sub_type: "message", message: "Standard text", message_RU: "Стандартное сообщение" },
			{ type: "text", sub_type: "alert", message: "Alert text", message_RU: "Важное сообщение", delay: 2000 },
			{ type: "text", sub_type: "warning", message: "Warning text", message_RU: "Предупреждающее сообщение", delay: 4000 },
			{ type: "text", sub_type: "notification", message: "Notification text", message_RU: "Уведомление", delay: 6000 },
		],

		// Func
		"text_func" : [
			{ type: "func", func: text_event }
		],


		/** TEST SPAWN EVENTS **/

		// Native
		"spawn" : [
			// Item [item, angle, distance, delay, duration]
			{ type: "spawn", func: "item", args: [88704, 0, 100, 0, 2000] },

			// Marker [target, angle, distance, delay, duration, highlight, label]
			{ type: "spawn", func: "marker", args: [false, 0, 100, 2000, 2000, true, ["Test", "Marker"]] },

			// Point [item, angle, distance, delay, duration]
			{ type: "spawn", func: "point", args: [537, 0, 100, 4000, 2000] },

			// Vector [item, offsetAngle, offsetDistance, angle, length, delay, duration]
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 300, 6000, 2000] },

			// Circle [target, item, offsetAngle, offsetDistance, interval, radius, delay, duration]
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 250, 8000, 2000] },

			// Semicircle [degree1, degree2, item, offsetAngle, offsetDistance, interval, radius, delay, duration]
			{ type: "spawn", func: "semicircle", args: [-90, 90, 553, 0, 0, 18, 150, 10000, 2000] },

			// Native spawn
			{ type: "spawn", sub_type: "item", id: 206960, offset: 0, distance: 100, delay: 12000, sub_delay: 2000 },
		],

		// Highlight
		"spawn_hl" : [
			// [item, angle, distance, delay, duration]
			{ type: "spawn", func: "item", args: [MARKER_ITEM,           -41, 135, 0, 10000] },
			{ type: "spawn", func: "item", args: [HIGHLIGHT_ITEM,        -25, 110, 0, 10000] },
			{ type: "spawn", func: "item", args: [HIGHLIGHT_ITEM_BLUE,     0, 100, 0, 10000] },
			{ type: "spawn", func: "item", args: [HIGHLIGHT_ITEM_PURPLE,  25, 110, 0, 10000] },
			{ type: "spawn", func: "item", args: [HIGHLIGHT_ITEM_RED,     41, 135, 0, 10000] },
		],

		// Func
		"spawn_func" : [
			{ type: "func", func: spawn_event }
		],


		/** TEST MARKER EVENTS **/

		// Native
		"marker" : [
			// Add marker
			{ type: "marker", color: "red", sub_delay: 2000 },
			{ type: "marker", color: "yellow", delay: 2000, sub_delay: 2000 },
			{ type: "marker", color: "blue", delay: 4000, sub_delay: 50000 }, // long duration

			// Remove marker
			{ type: "marker_remove", delay: 6000 },
		],

		// Func
		"marker_func" : [
			{ type: "func", func: marker_event }
		],


		/** TEST TIMERS EVENTS **/

		// Native
		"timers" : [
			// Spawn a cicrle with 5 sec duration
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 250, 0, 50000] },

			// Stop all timers (clears all despawn events)
			{ type: "stop_timers", delay: 1000 },

			// This will never start, because the timers for its delay were cleared in the "stop_timers" event
			// But it will start if set the delay more that 2000 in "stop_timers" event
			{ type: "despawn_all", delay: 2000 },
		],

		// Toggle this to despawn spawned circle without its despawn event
		"despawn_all" : [
			{ type: "despawn_all" },
		],
	};
};