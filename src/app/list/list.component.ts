import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService, Item } from '../data.service';

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

  date = new Date();
  items$: Observable<Item[]> = this.service.lists$.pipe(
    map((data) => data[this.route.snapshot.params.id])
  );
  checkItem(item: Item, index: number) {
    item.erledigt = !item.erledigt;
    this.service.updateItemList(this.route.snapshot.params.id, item, index);
  }
  constructor(private route: ActivatedRoute, private service: DataService) {}

  ngOnInit(): void {
    console.log(this.route);
  }
}
