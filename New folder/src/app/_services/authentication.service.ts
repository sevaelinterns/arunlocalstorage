import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, User1 } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private currentUserSubject1: BehaviorSubject<User1>;
    public currentUser1: Observable<User1>;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentUserSubject1 = new BehaviorSubject<User1>(JSON.parse(localStorage.getItem('/dataSource/register')));
        this.currentUser1 = this.currentUserSubject1.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    public get currentUserValue1(): User1 {
        return this.currentUserSubject1.value;
    }

    add(name: string,age: number,regno:number,dipart: string,gender: string, ) {
        return this.http.post<any>(`/dataSource/register`, { name,age,regno,dipart,gender })
            .pipe(map(user1 => {
                // login successful if there's a jwt token in the response
                if (user1 && user1.token1) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('/dataSource/register', JSON.stringify(user1));
                    this.currentUserSubject.next(user1);
                }

                return user1;
            }));
    }
    deleteUser(){
        localStorage.removeItem('/dataSource/register');
        this.currentUserSubject1.next(null);
    }
    login(username: string, password: string) {
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}