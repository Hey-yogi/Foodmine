import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interfaces/IUserRegister';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
   }

   public get currentUser(): User{
    return this.userSubject.value;
   }

  //  login(userLogin:IUserLogin):Observable<User>{
  //   return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
  //     tap({
  //       next: (user) => {
  //         this.setUserToLocalStorage(user);
  //         this.userSubject.next(user);
  //         this.toastrService.success(
  //           `Welcome to Foodmine ${user.name}!`,
  //           'Login Successful'
  //         )
  //       },
  //       error: (errorResponse) => {
  //         this.toastrService.error(errorResponse.error, 'Login Failed');
  //       }
  //     })
  //   );
  //  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          if (user.token) {  // Ensure token exists before storing
            this.setUserToLocalStorage(user);
            this.userSubject.next(user);  // Update the observable
            this.toastrService.success(`Welcome to Foodmine ${user.name}!`, 'Login Successful');
          } else {
            this.toastrService.error('Authentication failed', 'Login Failed');
          }
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
  }
  

   register(userRegister: IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to the Foodmine ${user.name}`,
            'Register Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Register Failed')
        }
      })
    )
   }

   logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
   }

   private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
   }

  //  private getUserFromLocalStorage():User{
  //   const userJson = localStorage.getItem(USER_KEY);
  //   if(userJson) return JSON.parse(userJson) as User;
  //   return new User();
  //  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) {
      return JSON.parse(userJson) as User; // Directly return parsed object
    }
    return new User(); // Return empty user object
  }



  //-------------------------------------------------
  httpOptions() {
    return {
      headers: { Authorization: `Bearer ${this.currentUser.token}` }
    };
  }

  
//-----------------------------------------------------  
  
}
