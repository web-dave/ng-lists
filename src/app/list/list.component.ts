import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService, ListedItem } from '../data.service';
import { ModalService } from '../input-modal/modal.service';

@Component({
  selector: 'lists-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  data: ListedItem[] = [
    {
      name: 'By new sweatshirt',
      count: 1,
      prize: 2.99,
      done: false,
    },
    {
      name: 'Begin promotional phase',
      count: 1,
      prize: 2.99,
      done: false,
    },
    {
      name: 'Read an article',
      count: 1,
      prize: 2.99,
      done: false,
    },
    {
      name: 'Try not to fall asleep',
      count: 1,
      prize: 2.99,
      done: false,
    },
    {
      name: 'Watch "Sherlock"',
      count: 1,
      prize: 2.99,
      done: false,
    },
    {
      name: 'Begin QA for the product',
      count: 1,
      prize: 2.99,
      done: false,
    },
    {
      name: 'Go for a walk',
      count: 1,
      prize: 2.99,
      done: false,
    },
  ];

  date = new Date();
  items$: Observable<ListedItem[]> = this.service.lists$.pipe(
    map((data) => data[this.route.snapshot.params.id])
  );
  checkItem(item: ListedItem, index: number) {
    item.done = !item.done;
    this.service.updateItemList(this.route.snapshot.params.id, item, index);
  }
  constructor(
    private route: ActivatedRoute,
    private service: DataService,
    private modalService: ModalService
  ) {}
  openModal() {
    this.modalService.display('LISTEDITEMS');
    // this.modalService.modalopen$.next(true);
  }

  ngOnInit(): void {
    console.log(this.route);
  }
}
