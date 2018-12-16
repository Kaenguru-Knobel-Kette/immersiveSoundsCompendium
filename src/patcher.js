patcher = {
	battleaxe: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'WEAP',
				filter: function(record) {
					return !xelib.HasElement(record, 'CNAM') &&
						xelib.HasKeyword(record, 'WeapTypeBattleaxe') &&
						!xelib.GetFlag(record, 'DNAM\\Flags2', 'Bound Weapon');
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			xelib.AddElementValue(record, 'TNAM', locals.battleaxeFail);
		}
	},
	warhammer: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'WEAP',
				filter: function(record) {
					return !xelib.HasElement(record, 'CNAM') &&
						xelib.HasKeyword(record, 'WeapTypeWarhammer');
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			xelib.AddElementValue(record, 'TNAM', locals.warhammerFail);
		}
	},
	boundWeapon: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'WEAP',
				filter: function(record) {
					return !xelib.HasElement(record, 'CNAM') &&
						xelib.GetFlag(record, 'DNAM\\Flags2', 'Bound Weapon');
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			if (xelib.HasKeyword(record, 'WeapTypeSword')) {
				xelib.AddElementValue(record, 'TNAM', locals.boundSwordFail);
			}
			else if (xelib.HasKeyword(record, 'WeapTypeBattleaxe')) {
				xelib.AddElementValue(record, 'TNAM', locals.boundBattleaxeFail);
			}
		}
	},
	necklace: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'ARMO',
				filter: function(record) {
					return !xelib.HasElement(record, 'TNAM') &&
						xelib.HasKeyword(record, 'ClothingNecklace');
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
					return !xelib.HasElement(record, 'TNAM') &&
						xelib.HasKeyword(record, 'ClothingRing');
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
					return xelib.GetHexFormID(record, false, false) === locals.lockpick;
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			xelib.AddElementValue(record, 'YNAM', locals.lockpickUp);
		}
	}
}
