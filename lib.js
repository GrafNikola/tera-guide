
const HIGHLIGHT_ITEM_ID = 88850; //  88850 - Keen Bahaar's Mask 
                                 //  88704 - Velika Banquet Coin
                                 //  98260 - Vergos's Head
                                 // 110684 - Tier 21 Superior Twin Swords
                                 // 209904 - Skill Advancement Tome IV

function SpawnItem(item, angle, distance, delay, duration, handlers, event, entity) {
	angle =  Math.PI * angle / 180;

	SpawnObject("item", false, item,
		0, 0,
		angle, distance,
		delay, duration,
		null,
		handlers, event, entity
	);
}

function SpawnMarker(target, angle, distance, delay, duration, highlight, label, handlers, event, entity) {
	if (!label) {
		label = ["SAFE SPOT", "SAFE"];
	}

	angle =  Math.PI * angle / 180;

	SpawnObject("build_object", target, 1,
		0, 0,
		angle, distance,
		delay, duration,
		label,
		handlers, event, entity
	);

	if (highlight) {
		SpawnObject("item", target, HIGHLIGHT_ITEM_ID,
			0, 0,
			angle, distance,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

function SpawnPoint(item, angle, distance, delay, duration, handlers, event, entity) {
	angle =  Math.PI * angle / 180;

	SpawnObject("collection", false, item,
		0, 0,
		angle, distance,
		delay, duration,
		null,
		handlers, event, entity
	);
}

function SpawnVector(item, offsetAngle, offsetDistance, angle, length, delay, duration, handlers, event, entity) {
	angle = angle * Math.PI / 180;

	for (let radius = 50; radius <= length; radius += 50) {
		SpawnObject("collection", false, item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

function SpawnCircle(target, item, offsetAngle, offsetDistance, interval, radius, delay, duration, handlers, event, entity) {
	for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * interval / 180) {
		SpawnObject("collection", target, item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

function SpawnSemicircle(degree1, degree2, item, offsetAngle, offsetDistance, interval, radius, delay, duration, handlers, event, entity) {
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
				handlers, event, entity
			);
		}

		for (let angle = Math.PI ; angle <= Math.PI * dg; angle +=  Math.PI * interval / 180) {
			SpawnObject("collection", false, item,
				offsetAngle, offsetDistance,
				angle, radius,
				delay, duration,
				null,
				handlers, event, entity
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
			handlers, event, entity
		);
	}
}

function SpawnObject(type, target, item, offsetAngle, offsetDistance, angle, distance, delay, duration, label, handlers, event, entity) {
	let shield_loc;

	// use local delay
	setTimeout(() => {
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
	let r = loc.w; //(loc.w / 0x8000) * Math.PI;
	let rads = (offsetAngle * Math.PI / 180);
	let finalrad = r - rads;

	loc.x += Math.cos(finalrad) * offsetDistance;
	loc.y += Math.sin(finalrad) * offsetDistance;

	return loc;
}

module.exports = {
	SpawnItem,
	SpawnMarker,
	SpawnPoint,
	SpawnVector,
	SpawnCircle,
	SpawnSemicircle,
	SpawnObject,
	applyDistance
};