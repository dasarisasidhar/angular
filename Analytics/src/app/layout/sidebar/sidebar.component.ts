import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  x = ['AGENT NAME', "CREATED DATE", "ORDER TYPE", "ORDER URGENCY TYPE"];
  y = ['AGENT NAME', "CREATED DATE", "ORDER TYPE", "ORDER URGENCY TYPE"];

  model: NgbDateStruct;
  constructor() { }

  ngOnInit(): void {
    let x = this.x;
  }

}
