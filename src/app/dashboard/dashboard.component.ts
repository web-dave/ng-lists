import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { DataService, ListedItem } from '../data.service';
import { ModalService } from '../input-modal/modal.service';

@Component({
  selector: 'lists-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tiles: any[] = [];
  tileNames$: Observable<string[]> = this.service.lists$.pipe(
    map((data) => Object.keys(data))
  );
  lists$: Observable<{ [name: string]: ListedItem[] }> =
    this.service.lists$ || of({});
  constructor(
    private service: DataService,
    private modalService: ModalService
  ) {}
  openModal() {
    this.modalService.display('LISTS');
  }

  ngOnInit(): void {}

  listedItems(name: string) {
    return this.lists$.pipe(
      map((data) => data[name]),
      tap((data) => console.log(data)),
      filter((data): data is ListedItem[] => !!data)
    );
  }
}
