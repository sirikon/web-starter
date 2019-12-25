export class JobContext {
	constructor(
		public readonly id: string) { }
}

export interface IDoggo {
	id: number;
	name: string;
	isGoodBoy: boolean;
}
