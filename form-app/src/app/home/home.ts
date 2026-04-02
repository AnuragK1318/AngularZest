import { Component } from '@angular/core';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-home',
  imports: [Highlight],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
