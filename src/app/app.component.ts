import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { ModalService } from './input-modal/modal.service';

@Component({
  selector: 'lists-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-lists';
  constructor(
    private router: Router,
    private modalService: ModalService,
    private swUpdate: SwUpdate,
    private swPush: SwPush
  ) {
    this.router.events.subscribe(() => this.modalService.display('none'));
    this.swUpdate.available.subscribe((data) => {
      location.reload();
    });

    // this.swPush
    //   .requestSubscription({
    //     serverPublicKey:
    //       'BHhBnRwIwW5wAqfmSswFPrLEF4Q2lGFNxrqYUtdX-dDqwKNbYy8zT02GG85kusFsostLlaW0_23uOBj0XFrGvVo',
    //   })
    //   .then((push) => console.log(push.toJSON()));

    this.swPush.messages.subscribe((data) => console.log(data));
  }
}
