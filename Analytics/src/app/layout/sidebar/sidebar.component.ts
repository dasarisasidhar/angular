import { Component, OnInit, ElementRef } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  x = ['AGENT NAME', "CREATED DATE", "ORDER TYPE", "ORDER URGENCY TYPE",
        'PICK UP COMPLETED DATE','DROP COMPLETED DATE','ORDER STATUS'];
  y = ['COLLECTION AMOUNT', "COLLECTION CHARGES", "DELIVERY CHARGES BASE", "DELIVERY CHARGES TOTAL",
        'DISTANCE'];
  Message = "Parent to Child"

  model: NgbDateStruct;
  constructor() { }

  ngOnInit(): void {
    let x = this.x;
  }

  onSubmit(f: NgForm){
    let data = f.value

    console.log(data)

  }

}
