import { Component, OnInit } from '@angular/core';

/**
 * Bring in Interface or data model
*/
import { Address } from '../../models/address.model';

/**
 * Bring in Service below
 */

import { DataService } from '../../services/data.service';

/**
 * Bring in Interface for the data retured from the service Post
 */

import {Post} from '../../models/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  /*
  * Declare the property without giving any value 
  * propertyname : propertyType
  * */
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];  // Array of string
  posts: Post[]; // Array of Posts
  isEdit:boolean = false;
  
  /**
   * Array of Numbers example
   * hobbies : number[];
   * Array of Mixed items example
   * hobbies: any[];
   * Any type
   * hobbies: any;
   */

  /*
  * Constructor and ngOninit runs automatically as the components is fired
  * Sequence of items lifeCycle Hooks
  * constructor, ngOnChanges, ngOnInit, ngDoCheck, ngOnDestroy
  * DO NOT implement ngOnChanges and ngDocCheck on the same component
  * Class can have methods and properties
  * Constructor is a method that runs when instantiate an object using a class then can take properties
  * Dependency Injection happens inside constructor function
  * 
  * 
  * */

  constructor(private dataService : DataService ) {
    console.info('Constructor ran');
   }

  ngOnInit() {
    //This is a life cycle hook runs when the app is initialised
    console.info('NgOnInit ran');
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'john@doe.com';
    this.address = {
      street: '50 main street',
      city:'Boston',
      state: 'MA'
    };
    this.hobbies = ['write code ', 'watch movies', 'listen to music'];


    /*
    * using service here  
    * Service is returning observable so need to subscribe to it
    * */
    this.dataService.getPosts().subscribe((posts)=>{
      //console.info(posts);
      this.posts = posts;
    })
  }

  onClick(){
    this.name = 'Jane Doe';
    this.hobbies.push('playing cricket');
  }

  addHobby(hobby){
    
    this.hobbies.unshift(hobby.value);
    hobby.value = '';
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i<this.hobbies.length; i++){
     if(this.hobbies[i] === hobby){
       this.hobbies.splice(i, 1);
     }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}
