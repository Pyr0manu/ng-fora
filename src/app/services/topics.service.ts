import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Comment, Topic} from "../models/models";
import {Http} from "@angular/http";
import {UsersService} from "./users.service";

@Injectable()
export class TopicsService {

  constructor(public http: Http) { }

  getTopics():Observable<Topic[]> {
    return  this.http
      .get("http://localhost:8080/jax-rs-1/api/topics")
      .map(response=>response.json());
  }

  createComment(comment:Comment, topic:Topic){
    return this.http
      .post("http://localhost:8080/jax-rs-1/api/topics/"+topic.id+"/comments/", comment);
  }

}
