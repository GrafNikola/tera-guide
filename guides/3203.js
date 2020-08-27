// Forbidden Arena [Nightmare Undying Warlord]
//
// Stub

let player, entity, library, effect;

const {SpawnMarker, SpawnVector, SpawnCircle} = require("../lib");

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	}
};