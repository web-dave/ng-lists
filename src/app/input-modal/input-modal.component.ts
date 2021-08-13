import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lists-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss'],
})
export class InputModalComponent implements OnInit {
  @Input() display = true;
  @Output() displayChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {
    console.log(document.body.scrollWidth);
  }
  close() {
    this.displayChange.emit(false);
  }
}
