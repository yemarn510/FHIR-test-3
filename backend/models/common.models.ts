export interface DropdownItem {
	code: string;
	display: string;
	definition?: string;
}

export interface FHIRPatient {
	resourceType: string;
	identifier: Identifier[];
	active: boolean;
	name: Name[];
	gender: string;
	birthDate: string;
}

export class Coding {

	constructor(
		public object: {
			system: string,
			code: string,
			display: string,
		}
	) {}
}

export interface Type {
	coding: Coding[];
}

export interface Period {
	start: string;
	end: string;
}

export interface Identifier {
	use: string;
	type: Type;
	system: string;
	value: string;
	period: Period;
}

export interface Name {
	extension: Extension[];
	text: string;
	family: string;
	given: string[];
	prefix: string[];
}

export interface Extension {
	url:	string;
	valueCode: string;
}
