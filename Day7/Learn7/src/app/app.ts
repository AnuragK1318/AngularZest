import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { Store } from './core/store';
import { User } from './core/user';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // constructor(public store: Store){}
  constructor(public userS:User){}
  
  protected readonly title = signal('Learn7');
  // count=signal(0);
  isLoggedIn=signal(false);

  role=signal<'Admin'|'User'>('User');

  features=signal<string[]>([
    "Dashoard","Profile","Settings"
  ]);

  makeAdmin(){
    this.role.set("Admin");
    this.features.set(["Dashoard","Profile","Settings","Admin Panel","User Management"]);
  }
  makeUser()
  {
    this.role.set("User");
    this.features.set(["Dashoard","Profile","Settings"]);
  }
  username='Panda';

}
