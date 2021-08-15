import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalopen$ = new BehaviorSubject(false);
  mode: 'none' | 'LISTS' | 'ITEMS' | 'LISTEDITEMS' = 'none';

  display(contextmode: 'none' | 'LISTS' | 'ITEMS' | 'LISTEDITEMS') {
    this.mode = contextmode;
    this.modalopen$.next(contextmode !== 'none');
  }
}
