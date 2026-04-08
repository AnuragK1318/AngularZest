import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactiveForms');

  name=signal('');
  email=signal('');

  handleSubmit(){
    console.log(`Name:${this.name()} Email: ${this.email}`);    
  }
}
