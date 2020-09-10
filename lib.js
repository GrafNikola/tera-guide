/* CONSTANTS */

const HIGHLIGHT_ITEM        = 110684; // Tier 21 Superior Twin Swords
const HIGHLIGHT_ITEM_BLUE   = 89542;  // Annihilation Disc (x1 effect)
const HIGHLIGHT_ITEM_PURPLE = 89543;  // Annihilation Disc (x2 effect)
const HIGHLIGHT_ITEM_RED    = 206960; // Zenobia's Breeze Crate
const MARKER_ITEM           = 88704;  // Velika Banquet Coin

/* SPAWN CLASS */

class Spawn {
	constructor(handlers, event, entity, dispatch) {
		this.handlers = handlers;
		this.event = event;
		this.entity = entity;
		this.dispatch = dispatch;
	}

	/**
	 * Spawn specified item
	 */
	item(item, angle, distance, delay, duration) {
		angle =  Math.PI * angle / 180;

		this.object("item", false, item,
			0, 0,
			angle, distance,
			delay, duration,
			null
		);
	}

	/**
	 * Spawn a Marker item
	 */
	marker(target, angle, distance, delay, duration, highlight, label) {
		if (!label) {
			label = ["SAFE SPOT", "SAFE"];
		}

		angle =  Math.PI * angle / 180;

		this.object("build_object", target, 1,
			0, 0,
			angle, distance,
			delay, duration,
			label
		);

		if (highlight) {
			let item = HIGHLIGHT_ITEM;

			switch (highlight) {
				case "blue":   item = HIGHLIGHT_ITEM_BLUE;   break;
				case "purple": item = HIGHLIGHT_ITEM_PURPLE; break;
				case "red":    item = HIGHLIGHT_ITEM_RED;    break;
			}

			this.object("item", target, item,
				0, 0,
				angle, distance,
				delay, duration,
				null
			);
		}
	}

	/**
	 * Spawn a Point
	 */
	point(item, angle, distance, delay, duration) {
		angle = Math.PI * angle / 180;

		this.object("collection", false, item,
			0, 0,
			angle, distance,
			delay, duration,
			null
		);
	}

	/**
	 * Spawn a Vector
	 */
	vector(item, offsetAngle, offsetDistance, angle, length, delay, duration) {
		angle = angle * Math.PI / 180;

		for (let radius = 50; radius <= length; radius += 50) {
			this.object("collection", false, item,
				offsetAngle, offsetDistance,
				angle, radius,
				delay, duration,
				null
			);
		}
	}

	/**
	 * Spawn a Circle
	 */
	circle(target, item, offsetAngle, offsetDistance, interval, radius, delay, duration) {
		for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * interval / 180) {
			this.object("collection", target, item,
				offsetAngle, offsetDistance,
				angle, radius,
				delay, duration,
				null
			);
		}
	}

	/**
	 * Spawn a Semicircle
	 */
	semicircle(degree1, degree2, item, offsetAngle, offsetDistance, interval, radius, delay, duration) {
		let db, dg;

		if (degree1 <= 180 && degree2 <= 180) {
			db = -degree1 / 180;
			dg =  degree2 / 180;
		} else if (degree1 > 180 && degree2 > 180) {
			db = -degree1 / 180;
			dg =  degree2 / 180;
		} else {
			db = -degree1 / 180;
			dg =  degree2 / 180;

			for (let angle = -Math.PI * db; angle <= Math.PI; angle +=  Math.PI * interval / 180) {
				this.object("collection", false, item,
					offsetAngle, offsetDistance,
					angle, radius,
					delay, duration,
					null
				);
			}

			for (let angle = Math.PI ; angle <= Math.PI * dg; angle +=  Math.PI * interval / 180) {
				this.object("collection", false, item,
					offsetAngle, offsetDistance,
					angle, radius,
					delay, duration,
					null
				);
			}

			return;
		}

		for (let angle = -Math.PI * db; angle <= Math.PI * dg; angle +=  Math.PI * interval / 180) {
			this.object("collection", false, item,
				offsetAngle, offsetDistance,
				angle, radius,
				delay, duration,
				null
			);
		}
	}

	/**
	 * Spawn a Object
	 */
	object(type, target, item, offsetAngle, offsetDistance, angle, distance, delay, duration, label) {
		const self = this;
		const callback = function(type, target, item, offsetAngle, offsetDistance, angle, distance, duration, label) {
			let shield_loc;

			if (target && self.entity.dest !== undefined) {
				shield_loc = self.entity["dest"].clone();
			} else if (self.entity.loc !== undefined) {
				shield_loc = self.entity["loc"].clone();
			} else {
				return;
			}

			shield_loc.w = self.entity["loc"].w;

			applyDistance(shield_loc, offsetDistance, 360 - offsetAngle);

			switch (type) {
				// S_SPAWN_COLLECTION
				case "collection":
					self.handlers["spawn"]({
						id: item,
						sub_delay: duration,
						distance: distance,
						offset: angle
					}, {
						loc: shield_loc
					});
					break;

				// S_SPAWN_DROPITEM
				case "item":
					self.handlers["spawn"]({
						sub_type: "item",
						id: item,
						sub_delay: duration,
						distance: distance,
						offset: angle
					}, {
						loc: shield_loc
					});
					break;

				// S_SPAWN_BUILD_OBJECT
				case "build_object":
					self.handlers["spawn"]({
						sub_type: "build_object",
						id: item,
						sub_delay: duration,
						distance: distance,
						offset: angle,
						ownerName: label[0],
						message: label[1]
					}, {
						loc: shield_loc
					});
					break;
			}
		}

		if (delay > 0) {
			this.dispatch.setTimeout(callback, delay,
				type, target, item, offsetAngle, offsetDistance, angle, distance, duration, label
			);
		} else {
			callback(type, target, item, offsetAngle, offsetDistance, angle, distance, duration, label);
		}
	}
}

/* HELPER FUNCTIONS */

function applyDistance(loc, offsetDistance, offsetAngle) {
	const r = loc.w; //(loc.w / 0x8000) * Math.PI;
	const rads = (offsetAngle * Math.PI / 180);
	const finalrad = r - rads;

	loc.x += Math.cos(finalrad) * offsetDistance;
	loc.y += Math.sin(finalrad) * offsetDistance;

	return loc;
}

/* COMPAT FUNCTIONS */

const compat = {
	SpawnItem(item, angle, distance, delay, duration, ...args) {
		(new Spawn(...args)).item(item, angle, distance, delay, duration);
	},
	SpawnMarker(target, angle, distance, delay, duration, highlight, label, ...args) {
		(new Spawn(...args)).marker(target, angle, distance, delay, duration, highlight, label);
	},
	SpawnPoint(item, angle, distance, delay, duration, ...args) {
		(new Spawn(...args)).point(item, angle, distance, delay, duration);
	},
	SpawnVector(item, offsetAngle, offsetDistance, angle, length, delay, duration, ...args) {
		(new Spawn(...args)).vector(item, offsetAngle, offsetDistance, angle, length, delay, duration);
	},
	SpawnCircle(target, item, offsetAngle, offsetDistance, interval, radius, delay, duration, ...args) {
		(new Spawn(...args)).circle(target, item, offsetAngle, offsetDistance, interval, radius, delay, duration);
	},
	SpawnSemicircle(degree1, degree2, item, offsetAngle, offsetDistance, interval, radius, delay, duration, ...args) {
		(new Spawn(...args)).semicircle(degree1, degree2, item, offsetAngle, offsetDistance, interval, radius, delay, duration);
	},
	SpawnObject(type, target, item, offsetAngle, offsetDistance, angle, distance, delay, duration, label, ...args) {
		(new Spawn(...args)).object(type, target, item, offsetAngle, offsetDistance, angle, distance, delay, duration, label);
	}
};

/* EXPORTS */

module.exports = Object.assign(compat, {
	HIGHLIGHT_ITEM,
	HIGHLIGHT_ITEM_BLUE,
	HIGHLIGHT_ITEM_PURPLE,
	HIGHLIGHT_ITEM_RED,
	MARKER_ITEM,
	Spawn,
	applyDistance
});