
const HIGHLIGHT_ITEM        = 110684; // Tier 21 Superior Twin Swords
const HIGHLIGHT_ITEM_BLUE   = 89542;  // Annihilation Disc (x1 effect)
const HIGHLIGHT_ITEM_PURPLE = 89543;  // Annihilation Disc (x2 effect)
const HIGHLIGHT_ITEM_RED    = 206960; // Zenobia's Breeze Crate
const MARKER_ITEM           = 88704;  // Velika Banquet Coin

function SpawnItem(item, angle, distance, delay, duration, handlers, event, entity, dispatch) {
	angle =  Math.PI * angle / 180;

	SpawnObject("item", false, item,
		0, 0,
		angle, distance,
		delay, duration,
		null,
		handlers, event, entity, dispatch
	);
}

function SpawnMarker(target, angle, distance, delay, duration, highlight, label, handlers, event, entity, dispatch) {
	if (!label) {
		label = ["SAFE SPOT", "SAFE"];
	}

	angle =  Math.PI * angle / 180;

	SpawnObject("build_object", target, 1,
		0, 0,
		angle, distance,
		delay, duration,
		label,
		handlers, event, entity, dispatch
	);

	if (highlight) {
		let item = HIGHLIGHT_ITEM;

		switch (highlight) {
			case "blue":   item = HIGHLIGHT_ITEM_BLUE;   break;
			case "purple": item = HIGHLIGHT_ITEM_PURPLE; break;
			case "red":    item = HIGHLIGHT_ITEM_RED;    break;
		}

		SpawnObject("item", target, item,
			0, 0,
			angle, distance,
			delay, duration,
			null,
			handlers, event, entity, dispatch
		);
	}
}

function SpawnPoint(item, angle, distance, delay, duration, handlers, event, entity, dispatch) {
	angle =  Math.PI * angle / 180;

	SpawnObject("collection", false, item,
		0, 0,
		angle, distance,
		delay, duration,
		null,
		handlers, event, entity, dispatch
	);
}

function SpawnVector(item, offsetAngle, offsetDistance, angle, length, delay, duration, handlers, event, entity, dispatch) {
	angle = angle * Math.PI / 180;

	for (let radius = 50; radius <= length; radius += 50) {
		SpawnObject("collection", false, item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity, dispatch
		);
	}
}

function SpawnCircle(target, item, offsetAngle, offsetDistance, interval, radius, delay, duration, handlers, event, entity, dispatch) {
	for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * interval / 180) {
		SpawnObject("collection", target, item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity, dispatch
		);
	}
}

function SpawnSemicircle(degree1, degree2, item, offsetAngle, offsetDistance, interval, radius, delay, duration, handlers, event, entity, dispatch) {
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
			SpawnObject("collection", false, item,
				offsetAngle, offsetDistance,
				angle, radius,
				delay, duration,
				null,
				handlers, event, entity, dispatch
			);
		}

		for (let angle = Math.PI ; angle <= Math.PI * dg; angle +=  Math.PI * interval / 180) {
			SpawnObject("collection", false, item,
				offsetAngle, offsetDistance,
				angle, radius,
				delay, duration,
				null,
				handlers, event, entity, dispatch
			);
		}

		return;
	}

	for (let angle = -Math.PI * db; angle <= Math.PI * dg; angle +=  Math.PI * interval / 180) {
		SpawnObject("collection", false, item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity, dispatch
		);
	}
}

function SpawnObject(type, target, item, offsetAngle, offsetDistance, angle, distance, delay, duration, label, handlers, event, entity, dispatch) {
	let shield_loc;

	// use local delay
	dispatch.setTimeout(() => {
		if (target && entity.dest !== undefined) {
			shield_loc = entity['dest'].clone();
		} else if (entity.loc !== undefined) {
			shield_loc = entity['loc'].clone();
		} else {
			return;
		}

		shield_loc.w = entity['loc'].w;

		applyDistance(shield_loc, offsetDistance, 360 - offsetAngle);

		switch (type) {
			// S_SPAWN_COLLECTION
			case "collection":
				handlers['spawn']({
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
				handlers['spawn']({
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
				handlers['spawn']({
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
	}, delay);
}

function applyDistance(loc, offsetDistance, offsetAngle) {
	const r = loc.w; //(loc.w / 0x8000) * Math.PI;
	const rads = (offsetAngle * Math.PI / 180);
	const finalrad = r - rads;

	loc.x += Math.cos(finalrad) * offsetDistance;
	loc.y += Math.sin(finalrad) * offsetDistance;

	return loc;
}

module.exports = {
	HIGHLIGHT_ITEM,
	HIGHLIGHT_ITEM_BLUE,
	HIGHLIGHT_ITEM_PURPLE,
	HIGHLIGHT_ITEM_RED,
	MARKER_ITEM,
	SpawnItem,
	SpawnMarker,
	SpawnPoint,
	SpawnVector,
	SpawnCircle,
	SpawnSemicircle,
	SpawnObject,
	applyDistance
};