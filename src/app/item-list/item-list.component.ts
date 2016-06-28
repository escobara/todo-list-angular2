import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  moduleId: module.id,
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.css']
})

export class ItemListComponent implements OnInit {
  items = [
    new Item('Buy Groceries', true),
    new Item('Call Comcast', false),
    new Item('Call Mother', false ),
    new Item('Find Sitter', true)
  ];
  completedItems: Item[] = [];

  markCompleted(item) {
  	item.markCompleted();
  	// this.items.pop(item);
  	console.log(this.items);
  	this.completedItems.push(item);
  	console.log(this.completedItems);
  }

  // markIncompleted() {
  // 	item.markIncompleted();
  // 	this.completedItems.push(item);
  // }


  ngOnInit() {

  }

}
