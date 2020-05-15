import { Component, OnInit, ElementRef } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { passData } from '../../service/communicate.service';
import { MainWindowComponent } from "../../layout/main-window/main-window.component";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [MainWindowComponent]
})
export class SidebarComponent implements OnInit {

  model: NgbDateStruct;
  x = ['AGENT NAME', "CREATED DATE", "ORDER TYPE", "ORDER URGENCY TYPE",
        'PICK UP COMPLETED DATE','DROP COMPLETED DATE','ORDER STATUS'];
  y = ['COLLECTION AMOUNT', "COLLECTION CHARGES", "DELIVERY CHARGES BASE", "DELIVERY CHARGES TOTAL",
        'DISTANCE'];
  constructor(private sendData:MainWindowComponent) { }

  ngOnInit(): void {
    let x = this.x;
  }

  onSubmit(f: NgForm){
    let data = f.value
    this.sendData.arrayData(data);
  }

}
