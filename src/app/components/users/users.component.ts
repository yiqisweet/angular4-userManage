import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  totalOwed:number;
  constructor(
    public userService:UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
        this.users = users;
        // console.log(this.users);
      this.getTotalOwed();
    })
  }

  getTotalOwed(){
    let total = 0;
    for(let i = 0;i < this.users.length; i++){
      total += this.users[i].balance;
    }
    this.totalOwed = total;
  }

}
