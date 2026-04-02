import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user';
import { CapitalizePipe } from '../capitalize-pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent {

  users: any[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}