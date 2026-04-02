import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  posts: any[]=[];
  errorMessage: string='';
  constructor(private api : Api){}

  ngOnInit(): void {
    this.api.getPosts().subscribe({
      next:(data)=>{
        this.posts=data;
      },
      error: () => {
        this.errorMessage="Failed to load data";
      }
    });
  }
  protected readonly title = signal('service-app');
}
