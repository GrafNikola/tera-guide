// Draakon Arena

// Stub.

let player, entity, library, effect;

let skills = {

};

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	}
};

for (let [key, value] of Object.entries(skills)) {
	if (key.length === 5) {
		module.exports['s-3102-1000-1' + key] = value;
		module.exports['s-3102-1000-2' + key] = value;
	} else {
		module.exports[key] = value;
	}
}