export class Item {
	name: string;
	completed: boolean = false;
	constructor(name, completed) {
		this.name = name;
		this.completed = completed || false;
	}

	markCompleted() {
		this.completed = true;
		console.log(this.completed);
	}

	markIncompleted() {
		this.completed = false;
		console.log(this.completed);
	}
}

