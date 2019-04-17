import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserGetData {
  title = 'hw4';

  constructor(private http: HttpClient) {
  }

  private url = 'http://localhost:3000/';

  getUrl() {
    return this.http.get(this.url);
  }
}
