import { CommonModule } from '@angular/common';
import { Component,OnInit,inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterModule,CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  private route=inject(ActivatedRoute);
  userData = [
    { id: '101', name: 'Anurag Kamble', role: 'Software Engineer', location: 'Pune' },
    { id: '202', name: 'John Doe', role: 'UI Designer', location: 'Mumbai' }
  ];
  selectedUser: any = null;

ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Find the user in our array that matches the URL ID
    this.selectedUser = this.userData.find(u => u.id === id);
  }
}
