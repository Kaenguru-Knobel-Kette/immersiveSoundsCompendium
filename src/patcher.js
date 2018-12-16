patcher = {
	battleaxe: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'WEAP',
				filter: function(record) {
					return xelib.HasKeyword(record, 'WeapTypeBattleaxe') &&
						!xelib.HasElement(record, 'CNAM');
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			if (xelib.GetFlag(record, 'DNAM\\Flags2', 'Bound Weapon')) {
				xelib.AddElementValue(record, 'TNAM', locals.battleaxeBoundImpact);
			}
			else {
				xelib.AddElementValue(record, 'TNAM', locals.battleaxeImpact);
			}
		}
	},
	warhammer: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'WEAP',
				filter: function(record) {
					return xelib.HasKeyword(record, 'WeapTypeWarhammer') &&
						!xelib.HasElement(record, 'CNAM');
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			xelib.AddElementValue(record, 'TNAM', locals.warhammerImpact);
		}
	},
	necklace: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'ARMO',
				filter: function(record) {
					return xelib.HasKeyword(record, 'ClothingNecklace') &&
						!xelib.HasElement(record, 'TNAM');
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			xelib.AddElementValue(record, 'YNAM', locals.necklaceUp);
			xelib.AddElementValue(record, 'ZNAM', locals.necklaceDown);
		}
	},
	ring: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'ARMO',
				filter: function(record) {
					return xelib.HasKeyword(record, 'ClothingRing') &&
						!xelib.HasElement(record, 'TNAM');
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			xelib.AddElementValue(record, 'YNAM', locals.ringUp);
		}
	},
	gem: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'MISC',
				filter: function(record) {
					return xelib.HasKeyword(record, 'VendorItemGem');
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			xelib.AddElementValue(record, 'YNAM', locals.gemUp);
			xelib.AddElementValue(record, 'ZNAM', locals.gemDown);
		}
	},
	lockpick: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'MISC',
				filter: function(record) {
					return (xelib.GetHexFormID(record, false, false) === locals.lockpick);
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			xelib.AddElementValue(record, 'YNAM', locals.lockpickUp);
		}
	}
}
