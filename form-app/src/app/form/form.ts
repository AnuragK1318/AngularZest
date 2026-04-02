import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class FormComponent {

  name = '';
  email = '';
  phoneNumber = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const newUser = {
      name: this.name,
      email: this.email,
      phone: this.phoneNumber,
      active: this.name.length > 3
    };

    this.userService.addUser(newUser);

    // Navigate to list page
    this.router.navigate(['/list']);

    // Clear form
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
  }
}