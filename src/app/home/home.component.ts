import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'anju';
  address: string = 'kannur';
  isDisabled: boolean = false ;
  dangerClass = "danger";
  successClass = "success";
  isDanger: boolean = false ;
  isUndanger : boolean = true;
  yeloveClass = "yelove";
  serverCreationStatus = "server not created";
  serverName= '';
  classesList={
      'danger': this.isDanger,
    'special-font': this.isDanger,
    'success': !this.isDanger
  }
  constructor() {
  
   }

  ngOnInit(): void {
  }
  onServer(){
    this.serverCreationStatus = "server created";
  }

}
