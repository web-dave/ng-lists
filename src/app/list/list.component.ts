import { Component, OnInit } from '@angular/core';
import { Item } from '../data.service';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'lists-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  data: Item[] = [
    {
      name: 'By new sweatshirt',
      anzahl: 1,
      preis: 2.99,
      erledigt: false,
    },
    {
      name: 'Begin promotional phase',
      anzahl: 1,
      preis: 2.99,
      erledigt: false,
    },
    {
      name: 'Read an article',
      anzahl: 1,
      preis: 2.99,
      erledigt: false,
    },
    {
      name: 'Try not to fall asleep',
      anzahl: 1,
      preis: 2.99,
      erledigt: false,
    },
    {
      name: 'Watch "Sherlock"',
      anzahl: 1,
      preis: 2.99,
      erledigt: false,
    },
    {
      name: 'Begin QA for the product',
      anzahl: 1,
      preis: 2.99,
      erledigt: false,
    },
    {
      name: 'Go for a walk',
      anzahl: 1,
      preis: 2.99,
      erledigt: false,
    },
  ];

  checkItem(itm: Item) {
    itm.erledigt = !itm.erledigt;
  }
  constructor() {}

  ngOnInit(): void {}
}
