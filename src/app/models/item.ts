export class Item {
	name: string;
	completed: boolean = false;
	constructor(name, completed) {
		this.name = name;
		this.completed = completed || false;
	}
}

