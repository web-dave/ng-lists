import { Component, Input, OnChanges } from '@angular/core';
import { ListedItem } from '../data.service';

@Component({
  selector: 'lists-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnChanges {
  @Input() name: string = '';
  @Input() data: ListedItem[] | null = [];
  prize = 0;
  constructor() {}

  ngOnChanges(): void {
    if (this.data) {
      this.prize = parseFloat(
        this.data?.reduce((pre, cur) => pre + (cur.prize ?? 0), 0).toFixed(2)
      );
    }
  }
}
