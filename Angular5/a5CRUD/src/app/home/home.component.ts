import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isHidden: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleFeature(){    
    this.isHidden = !this.isHidden;
    console.info(this.isHidden);
  }

}
