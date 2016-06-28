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
    new Item('Windstorm', true),
    new Item('Bombasto', false),
    new Item('Magneta', false ),
    new Item('Tornado', true)
  ];

  ngOnInit() {

  }

}
