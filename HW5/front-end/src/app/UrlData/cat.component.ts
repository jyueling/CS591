import {Component, OnInit} from '@angular/core';
import { UserGetData } from '../user.getData';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  list = {};

  constructor(private urlData: UserGetData) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.urlData.getUrl()
      .subscribe((data: string[]) => {this.list = data; console.log(data); });
  }

}
