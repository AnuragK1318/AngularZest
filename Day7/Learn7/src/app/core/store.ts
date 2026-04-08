import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Store {
  count=signal(0);

  Increment(){
    this.count.update(val=>val+1);
  }
  Decrement(){
    this.count.update(val=>val-1);
  }
  Reset()
  {
    this.count.set(0);
  }

}
