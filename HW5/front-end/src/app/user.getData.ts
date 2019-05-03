import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserGetData {
  constructor(private http: HttpClient) {
  }

  private url = 'http://localhost:3000/catApi';

  getUrl() {
    return this.http.get(this.url);
  }
}
