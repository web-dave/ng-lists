import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Item {
  name: string;
  prize?: number;
}
export interface ListedItem extends Item {
  name: string;
  count?: number;
  prize?: number;
  done: boolean;
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

  private lists: { [name: string]: ListedItem[] } = {};
  private listsBS$ = new BehaviorSubject<{ [name: string]: ListedItem[] }>({});
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

  addItem(item: Item) {
    this.items.push(item);
    this.itemsBS$.next(this.items);
  }

  addItemToList(list: string, item: ListedItem) {
    this.lists[list].push(item);
    this.listsBS$.next(this.lists);
  }

  updateItemList(list: string, item: ListedItem, index: number) {
    // Das element in der richtigen liste finden und ersetzten
    this.lists[list][index] = item;
    this.listsBS$.next(this.lists);
  }
}
