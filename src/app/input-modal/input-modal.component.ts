import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService, Item } from '../data.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'lists-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss'],
})
export class InputModalComponent implements OnInit {
  display$!: Observable<boolean>;
  context: 'none' | 'LISTS' | 'ITEMS' | 'LISTEDITEMS' = 'none';
  modalForm: FormGroup = this.formBuilder.group({});
  listName = '';
  items: Item[] = [];
  itemControl = new FormControl();
  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private service: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.display$ = this.modalService.modalopen$.pipe(
      tap(() => {
        this.context = this.modalService.mode;
        if (this.context !== 'none') {
          this.modalForm.addControl(
            'name',
            new FormControl('', [Validators.required])
          );
          if (this.context === 'ITEMS') {
            this.modalForm.addControl('prize', new FormControl(0));
          }
          if (this.context === 'LISTEDITEMS') {
            this.listName = this.route.snapshot.firstChild?.params.id;
            this.items = this.service.getItems();
            this.modalForm.addControl('prize', new FormControl(0));
            this.modalForm.addControl('count', new FormControl(0));
            this.modalForm.addControl('done', new FormControl(false));
          }
          this.itemControl.valueChanges.subscribe((data) => {
            this.modalForm.get('name')?.setValue(data.name);
            this.modalForm.get('prize')?.setValue(data.prize);
          });
        }
      })
    );
  }

  saveItem() {
    console.log(this.modalForm.value);
    if (this.modalForm.get('prize')?.value === 0) {
      this.modalForm.removeControl('prize');
    }
    if (this.modalForm.get('count')?.value === 0) {
      this.modalForm.removeControl('count');
    }
    if (this.context === 'ITEMS') {
      this.service.addItem(this.modalForm.value);
    } else if (this.context === 'LISTEDITEMS') {
      this.service.addItemToList(this.listName, this.modalForm.value);
    }
    this.close();
  }
  close() {
    this.modalService.modalopen$.next(false);
    this.modalForm.removeControl('name');
    this.modalForm.removeControl('prize');
    this.modalForm.removeControl('count');
    this.modalForm.removeControl('done');
    this.listName = '';
  }
}
