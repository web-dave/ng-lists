import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from './input-modal/modal.service';

@Component({
  selector: 'lists-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-lists';
  constructor(private router: Router, private modalService: ModalService) {
    this.router.events.subscribe((data) => this.modalService.display('none'));
  }
}
