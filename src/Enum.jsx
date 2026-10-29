
export function createEnum(...memberNames) {
	return Object.freeze({
		...Object.fromEntries(memberNames.map((name, index) => [name, index])),
  		AsArray: Object.freeze(memberNames.map((_, index) => index)),
	});
}