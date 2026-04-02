import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { User } from './user/user';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {path : 'home', component : Home},
    {path : 'about', component : About,canActivate: [authGuard]},
    {path : 'user/:id', component : User}, //parameter routing
    {path : '' ,redirectTo: '/home' , pathMatch: 'full'}
];

