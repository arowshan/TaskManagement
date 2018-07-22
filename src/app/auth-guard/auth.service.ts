import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators'
import { ApiService } from '../apis/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // To let service consumers know when loggedIn status changes
  isLoggedInEmitter: EventEmitter<boolean> = new EventEmitter();

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private apiService: ApiService) {
    if(localStorage.getItem('accessToken')) {
      this.isLoggedIn = true;
    }
    this.isLoggedInEmitter.emit(this.isLoggedIn);
  }

  login(signinForm): Observable<boolean> {

    const resp = of({
      'accessToken':'dfgh',
      'success': true
    });

    // this.apiService.signin(signinForm).subscribe(res => {
      resp.subscribe(res => {
        console.log(res);
      if(res.success){
        localStorage.setItem('accessToken', res.accessToken);
        this.isLoggedIn = true;
      }
    });

    this.isLoggedInEmitter.emit(this.isLoggedIn);

    return of(this.isLoggedIn);
  }

  logout(): Observable<boolean> {
    localStorage.clear();
    this.isLoggedIn = false;
    this.isLoggedInEmitter.emit(this.isLoggedIn);
    return of(this.isLoggedIn);
  }
}