import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, ListedItem } from '../data.service';
import { ModalService } from '../input-modal/modal.service';

@Component({
  selector: 'lists-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  data$ = this.service.items$;
  constructor(
    private service: DataService,
    private modalService: ModalService
  ) {}
  openModal() {
    this.modalService.display('ITEMS');
  }
}
