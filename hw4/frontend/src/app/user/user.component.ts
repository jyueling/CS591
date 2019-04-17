import {Component, OnInit} from '@angular/core';
import { UserGetData } from '../getData/user.getData';
import {UserGetName} from '../getData/user.getName';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'hw4';
  list: any;
  namelist: any;

  constructor(private urlData: UserGetData, private userName: UserGetName) { }

  ngOnInit() {
    this.getList();
    this.getUser();
  }

  getList() {
    this.urlData.getUrl()
      .subscribe((data: string[]) => this.list = data);
  }
  getUser() {
    this.userName.getName()
      .subscribe((name: string[]) => this.namelist = name);
  }
}
