import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');
  name="Anurag Kamble"

  getName()
  {
    return this.name="Mau"
  }
  addNum(x:number,y:number)
  {
  return x+y
  }

  onClick()
  {
    alert("Function Called")
  }
}
