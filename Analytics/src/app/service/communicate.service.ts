import {Observable} from 'rxjs/Rx';
// import { MainWindowComponent } from "../layout/main-window/main-window.component"
import { Component } from '@angular/core';

// @Component({
//   template: '',
//   providers: [MainWindowComponent]
// })

export class passData {


  public detais:any = ["sasi"]

  // constructor(private sendData:MainWindowComponent) { }

   arrayData(data: any){
    console.log(data)
    // this.sendData.get_details(data)
   }

   get_details():Observable<any>{
    // console.log(this.detais)
    var res = this.detais
    return res;
   }

}
