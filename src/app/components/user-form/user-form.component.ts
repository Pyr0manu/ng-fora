import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../models/models";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'rc-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() eventEmmiter: EventEmitter<User> = new EventEmitter();

  user: User;
  copy:User;

  constructor(public usersService:UsersService){
    this.usersService;
  }

  ngOnInit() {
    this.user={name: "Totooo", id:4, email:"toto@truc.fr", admin: false}
  }

  createUser (){
    this.copy = {...this.user}
    this.usersService.createUser(this.user).subscribe(() => this.eventEmmiter.emit(this.copy));;
  }

}
