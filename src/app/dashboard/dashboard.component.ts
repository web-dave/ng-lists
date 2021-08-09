import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService, Item } from '../data.service';

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
  lists$: Observable<{ [name: string]: Item[] }> = this.service.lists$;
  constructor(private service: DataService) {}

  ngOnInit(): void {}
}
