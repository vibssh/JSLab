import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class CoinService {

  constructor(public http : HttpClient) { 
    console.info('coin service is called in ');
  }

  //GET

  //Get Single API EndPoint Method
  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
    
  }

  //Get Observable forkJoin to run Multiple conncurrent
  getPostsAndComments(){
    return Observable.forkJoin(
      this.http.get('https://jsonplaceholder.typicode.com/users/1/todos'),
      this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    );
  }

  //POST
  createPost(title, post){
    var dataOption = {
      title:title,
      post: post
    }
    let postData = JSON.stringify(dataOption);
    console.info('Post Data', postData);
    return this.http.post('https://jsonplaceholder.typicode.com/posts', postData);
  }



}
