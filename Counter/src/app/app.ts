import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Counter');

  count:number=0;

  handleCounter(val:string)
  {
    if(val=='plus')
    {
      this.count=this.count+1;
    }else if(val=='minus' && val>'0')
    {
      this.count=this.count-1;
    }
    else{
      this.count=0;
    }
  }
}
