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
  private listsBS$ = new BehaviorSubject<Item[]>([]);
  public lists$ = this.listsBS$
    .asObservable()
    .pipe(
      tap((data) => localStorage.setItem('itemList', JSON.stringify(data)))
    );

  constructor() {
    let foo = localStorage.getItem('itemList') || '[]';
    console.log(foo);

    this.items = JSON.parse(foo);
    this.itemsBS$.next(this.items);
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

  setErledigt(item: Item) {
    item.erledigt = !item.erledigt;
    this.itemsBS$.next(this.items);
  }
}
