import { Component } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ItemListComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'Welcome to Your ToDo List';
  constructor() {

  }

  addItem(item: HTMLInputElement): void {
  	console.log(new Date().toString());
  	var timeStamp = new Date().toString(); 
  	console.log(`${item.value} Added at ${timeStamp}`);
  	item.value = '';
  }
}
