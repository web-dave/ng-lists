import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lists-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tiles = new Array(18);
  constructor() {}

  ngOnInit(): void {}
}
