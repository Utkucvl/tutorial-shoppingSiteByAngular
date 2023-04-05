import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private accountService: AccountService) {}
  model: User = new User();
  login(form: NgForm) {
    this.accountService.login(this.model)
  }
}
