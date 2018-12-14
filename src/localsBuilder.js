localsBuilder = {
	setLocals: function(patch, helpers, settings, locals) {
		let isc = xelib.FileByName('Immersive Sounds - Compendium.esp');

		let battleaxeImpact = xelib.GetRecord(isc, 0x041E6B31);
		let battleaxeBoundImpact = xelib.GetRecord(isc, 0x0404C731);
		let warhammerImpact = xelib.GetRecord(isc, 0x041F5E3B);
		let necklaceUp = xelib.GetRecord(isc, 0x0408AB15);
		let necklaceDown = xelib.GetRecord(isc, 0x0408AB16);
		let ringUp = xelib.GetRecord(isc, 0x0408AB14);
		let gemUp = xelib.GetRecord(isc, 0x0408AB13);
		let gemDown = xelib.GetRecord(isc, 0x0408AB18);
		let lockpickUp = xelib.GetRecord(isc, 0x0408AB17);
		
		locals.battleaxeImpact = xelib.GetHexFormID(battleaxeImpact, false, false);
		locals.battleaxeBoundImpact = xelib.GetHexFormID(battleaxeBoundImpact, false, false);
		locals.warhammerImpact = xelib.GetHexFormID(warhammerImpact, false, false);
		locals.necklaceUp = xelib.GetHexFormID(necklaceUp, false, false);
		locals.necklaceDown = xelib.GetHexFormID(necklaceDown, false, false);
		locals.ringUp = xelib.GetHexFormID(ringUp, false, false);
		locals.gemUp = xelib.GetHexFormID(gemUp, false, false);
		locals.gemDown = xelib.GetHexFormID(gemDown, false, false);
		locals.lockpickUp = xelib.GetHexFormID(lockpickUp, false, false);
	}
}
