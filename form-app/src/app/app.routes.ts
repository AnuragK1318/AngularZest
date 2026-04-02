import { Routes } from '@angular/router';
import { Home } from './home/home';
import { FormComponent } from './form/form';
import { About } from './about/about';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list';

export const routes: Routes = [
    {path: 'home' , component: Home},
    {path: 'form', component: FormComponent},
    {path: 'about', component: About},
    { path: 'list', component: ListComponent },
    { path: '', redirectTo: 'form', pathMatch: 'full' }
];
