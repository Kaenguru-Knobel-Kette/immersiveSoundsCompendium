registerPatcher({
	info: info,
	gameModes: [xelib.gmTES5, xelib.gmSSE],
	settings: {
		label: 'Immersive Sounds Compendium',
		hide: true,
		templateUrl: `${patcherUrl}/partials/settings.html`,
		defaultSettings: {}
	},
	requiredFiles: ['Skyrim.esm', 'Immersive Sounds - Compendium.esp'],
	getFilesToPatch: function(filenames) {
		return filenames;
	},
	execute: {
		initialize: function(patch, helpers, settings, locals) {
			localsBuilder.setLocals(patch, helpers, settings, locals);
		},
		process: [
			patcher.battleaxe,
			patcher.warhammer,
			patcher.boundWeapon,
			patcher.necklace,
			patcher.gem,
			patcher.ring,
			patcher.lockpick
		]
	}
});
