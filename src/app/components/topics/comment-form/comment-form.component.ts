import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment, Topic, User} from "../../../models/models";
import {TopicsService} from "../../../services/topics.service";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'rc-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Output() addComment: EventEmitter<Comment> = new EventEmitter();
  @Input() topic:Topic;

  comment: Comment;
  commentCopy: Comment;

  constructor(public topicsService: TopicsService, public usersService:UsersService) {
    this.topicsService;
    this.usersService;
  }

  ngOnInit() {

    this.comment = {
      score:0,
      id: 0,
      content: "",
      user: {
        id: 0,
        email: "",
        name: "",
        admin: false
      }
    }
  }

  createComment(){
    this.comment.user.id=this.usersService.logged.id;
    this.comment.user.email=this.usersService.logged.email;
    this.comment.user.name=this.usersService.logged.name;
    this.comment.user.admin=this.usersService.logged.admin;

    this.commentCopy={...this.comment}
    this.topicsService.createComment(this.comment, this.topic).subscribe(()=>this.addComment.emit(this.commentCopy))
    this.comment.content="";
  }
}
