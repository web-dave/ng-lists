import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Item {
  name: string;
  anzahl: number;
  preis: number;
  erledigt: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: Item[] = [];
  private itemsBS$ = new BehaviorSubject<Item[]>([]);
  public items$: Observable<Item[]> = this.itemsBS$
    .asObservable()
    .pipe(
      tap((data) => localStorage.setItem('itemList', JSON.stringify(data)))
    );

  private lists: { [name: string]: Item[] } = {};
  private listsBS$ = new BehaviorSubject<{ [name: string]: Item[] }>({});
  public lists$ = this.listsBS$
    .asObservable()
    .pipe(tap((data) => localStorage.setItem('lists', JSON.stringify(data))));

  constructor() {
    let items = localStorage.getItem('itemList') || '[]';
    console.log(items);

    this.items = JSON.parse(items);
    this.itemsBS$.next(this.items);

    let lists = localStorage.getItem('lists') || '{}';
    console.log(lists);

    this.lists = JSON.parse(lists);
    this.listsBS$.next(this.lists);
  }

  deleteItem(i: number) {
    this.items.splice(i, 1);

    this.itemsBS$.next(this.items);
  }

  addItem(name: string, anzahl: string, preis: string) {
    this.items.push({
      name,
      anzahl: parseInt(anzahl, 10),
      preis: parseFloat(preis),
      erledigt: false,
    });
    // this.modalVisible = 'none';
    this.itemsBS$.next(this.items);
  }

  updateItemList(list: string, item: Item, index: number) {
    // Das element in der richtigen liste finden und ersetzten
    this.lists[list][index] = item;
    this.listsBS$.next(this.lists);
  }
}
