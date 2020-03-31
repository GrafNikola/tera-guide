
const HIGHLIGHT_ITEM_ID = 88850; // 88850 - Keen Bahaar's Mask; 98260 - Vergos's Head; 209904 - Skill Advancement Tome IV

function SpawnMarker(angle, distance, delay, duration, highlight, label, handlers, event, entity) {
	if (!label)
		label = ["SAFE SPOT", "SAFE"];

	angle =  Math.PI * angle / 180;

	SpawnObject("object", 1, 0, 0,
		angle, distance,
		delay, duration,
		label,
		handlers, event, entity
	);

	if (highlight) {
		SpawnObject("item", HIGHLIGHT_ITEM_ID, 0, 0,
			angle, distance,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

function SpawnItem(item, angle, distance, delay, duration, handlers, event, entity) {
	angle =  Math.PI * angle / 180;

	SpawnObject("collection", item, 0, 0,
		angle, distance,
		delay, duration,
		null,
		handlers, event, entity
	);
}

function SpawnVector(item, offsetAngle, offsetDistance, angle, length, delay, duration, handlers, event, entity) {
	angle = angle * Math.PI / 180;

	for (let radius = 50; radius <= length; radius += 50) {
		SpawnObject("collection", item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

function SpawnCircle(item, offsetAngle, offsetDistance, interval, radius, delay, duration, handlers, event, entity) {
	for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * interval / 180) {
		SpawnObject("collection", item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

function SpawnSemicircle(degree1, degree2, item, offsetAngle, offsetDistance, interval, radius, delay, duration, handlers, event, entity) {
	if (degree1 == 0 || degree2 == 0) return;

	for (let angle = -Math.PI / degree1; angle <= Math.PI / degree2; angle +=  Math.PI * interval / 180) {
		SpawnObject("collection", item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

function SpawnObject(type, item, offsetAngle, offsetDistance, angle, distance, delay, duration, label, handlers, event, entity) {
	let shield_loc   = entity['loc'].clone();
	    shield_loc.w = entity['loc'].w;

	if (offsetDistance != 0 || offsetAngle != 0) {
		applyDistance(shield_loc, offsetDistance, 360 - offsetAngle);
	}

	switch (type) {
		// S_SPAWN_COLLECTION
		case "collection":
			handlers['spawn']({
				id: item,
				delay: delay,
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
				delay: delay,
				sub_delay: duration,
				distance: distance,
				offset: angle
			}, {
				loc: shield_loc
			});
			break;

		// S_SPAWN_BUILD_OBJECT
		case "object":
			handlers['spawn']({
				sub_type: "build_object",
				id: item,
				delay: delay,
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

function applyDistance(loc, offsetDistance, offsetAngle) {
	let r = loc.w; //(loc.w / 0x8000) * Math.PI;
	let rads = (offsetAngle * Math.PI / 180);
	let finalrad = r - rads;

	loc.x += Math.cos(finalrad) * offsetDistance;
	loc.y += Math.sin(finalrad) * offsetDistance;

	return loc;
}

module.exports = {
	SpawnMarker,
	SpawnItem,
	SpawnVector,
	SpawnCircle,
	SpawnSemicircle,
	SpawnObject,
	applyDistance
};