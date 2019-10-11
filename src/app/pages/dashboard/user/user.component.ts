import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
   this.userService.getUsers().subscribe((response: any) => {
     console.log(response)
     this.users = response
     
   })
  }


  deleteUsers(value){
    console.log(value)
  }

}
