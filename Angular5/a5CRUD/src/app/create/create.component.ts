import {
  Component,
  OnInit
} from '@angular/core';
import {
  Users
} from '../shared/users';
import {
  Comments
} from '../shared/users';

import {
  CoinService
} from '../shared/coin.service';

import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';


@Component({
  selector: 'crud-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  heading: string = 'Add Coin';
  users;
  comments;
  posts;
  constructor(private coinService: CoinService) {

  }

  ngOnInit() {
    //this.getFoods();
  }

  //Single Http Request
  getUsers() {
    this.coinService.getPost().subscribe((data) => {
        this.users = data; // Ignore intellisense error  --Observable onNext returns data
        console.info(this.users);
      },
      err => console.info(err), //onError returns an error 
      () => console.info('done loading users') // onCompleted Returns
    );
  } // End of getUsers Service

  //Multiple Concurrent Request
  // getUsersAndComment(){
  //   this.coinService.getPostsAndComments().subscribe((data) => {
  //       console.info('data-1', data[0]);
  //       console.info('data-2', data[1]);
  //     },
  //     err => console.info(err),
  //     () => console.info('done Loading user and comments')

  //   );
  // }

  addPosts(title, post) {
    let dataOption = [{
      post: post,
      title: title
    }]
    this.coinService.createPost(title, post).subscribe((data) => {
        this.posts = dataOption;
      },
      err => console.info(err),
      () => console.info('posted succssfully')
    )
  }
}
