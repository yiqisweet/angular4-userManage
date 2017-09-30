import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  users = [];

  constructor(
    public http:Http
  ) { }

  getUsers(){
    //返回的观察者对象
    return this.http.get('http://localhost:3000/users')
      .map(res => res.json())
  }

}
