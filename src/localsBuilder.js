localsBuilder = {
	setLocals: function(patch, helpers, settings, locals) {
		let skyrim = xelib.FileByName('Skyrim.esm');
		let isc = xelib.FileByName('Immersive Sounds - Compendium.esp');

		let skyrimIndex = xelib.Hex(xelib.GetFileLoadOrder(skyrim), 2);
		let iscIndex = xelib.Hex(xelib.GetFileLoadOrder(isc), 2);
		
		locals.lockpick = `${skyrimIndex}00000A`;
		locals.lockpickUp = `${iscIndex}08AB17`;
		locals.battleaxeImpact = `${iscIndex}1E6B31`;
		locals.battleaxeBoundImpact = `${iscIndex}04C731`;
		locals.warhammerImpact = `${iscIndex}1F5E3B`;
		locals.necklaceUp = `${iscIndex}08AB15`;
		locals.necklaceDown = `${iscIndex}08AB16`;
		locals.ringUp = `${iscIndex}08AB14`;
		locals.gemUp = `${iscIndex}08AB13`;
		locals.gemDown = `${iscIndex}08AB18`;
	}
}
