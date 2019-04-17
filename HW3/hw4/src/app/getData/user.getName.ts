import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserGetName {
  title = 'hw4';

  constructor(private http: HttpClient) {
  }

  private name = './user.json';

  getName() {
    return this.http.get(this.name);
  }
}
