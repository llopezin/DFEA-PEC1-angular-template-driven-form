import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  constructor() {}

  public user = new User();
  public name = this.user.name;

  ngOnInit(): void {}

  public logInput() {
    console.log(this.user);
  }
}
