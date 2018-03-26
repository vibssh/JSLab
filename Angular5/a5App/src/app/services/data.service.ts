import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import'rxjs/add/operator/map';

@Injectable()
export class DataService {
 
  //Need to inject http because its a service
  constructor(public http: Http) {
    console.info('Data Serrvice connected');
   }

   getPosts() {
     return this.http.get('https://jsonplaceholder.typicode.com/posts')
     .map(res => res.json()); // this brings in observable so bring in map from reactive extensions

   }


}
