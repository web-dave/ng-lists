import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ModalService } from './modal.service';

@Component({
  selector: 'lists-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss'],
})
export class InputModalComponent implements OnInit {
  display$!: Observable<boolean>;
  context: 'none' | 'LISTS' | 'ITEMS' | 'LISTEDITEMS' = 'none';
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.display$ = this.modalService.modalopen$.pipe(
      tap(() => {
        this.context = this.modalService.mode;
      })
    );
  }
  close() {
    this.modalService.modalopen$.next(false);
  }
}
