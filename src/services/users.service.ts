import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  public userData: any;
  public url = 'https://jsonplaceholder.typicode.com/users';

  getUserData(): Observable<any> {
    this.userData = this.http.get<any>(this.url);
    return this.userData;
  }

}
