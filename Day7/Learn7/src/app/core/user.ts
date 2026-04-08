import { Injectable, signal } from '@angular/core';

interface IUser{
  name:string;
  role:'Admin'|'Guest';
}

@Injectable({
  providedIn: 'root',
})
export class User {

  user=signal<IUser|null>(null);

  login(name:string , role: 'Admin' | 'Guest'){
    this.user.set({name,role});
    }
  logout()
  {
    this.user.set(null);
  }
  isAdmin()
  {
    return this.user()?.role==='Admin';
  }
}
